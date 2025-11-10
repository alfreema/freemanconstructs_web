import { LitElement, html, css } from 'https://esm.sh/lit';

export class SiteHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(4px);
      color: #1f2937; /* Tailwind text-gray-800 */
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    nav {
      max-width: 72rem; /* max-w-6xl */
      margin: 0 auto;
      padding: 1rem 1.5rem;
      display: flex;
      justify-content: center; /* keep menu centered */
      align-items: center;
      position: relative; /* allow absolutely positioned logo */
    }
    .menu {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }
    .logo {
      position: absolute;
      left: 8rem; /* move logo significantly closer to the menu */
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    .logo img {
      height: 44px;
      width: auto;
      display: block;
    }
    a {
      margin: 0 0.75rem;
      font-size: 0.875rem;
      font-weight: 300;
      color: inherit;
      text-decoration: none;
      transition: color 0.2s;
    }
    a:hover {
      color: #6366f1; /* Tailwind primary */
    }

    /* Stack logo above menu at ≤1024px */
    @media (max-width: 1024px) {
      nav {
        flex-direction: column;
        gap: 0.5rem;
      }
      .logo {
        position: static;
        left: auto;
        margin-bottom: 0.25rem;
      }
      .menu {
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  `;

  // Show a small context menu with a "Copy logo to clipboard" action
  showLogoMenu(e) {
    e.preventDefault();
    this.#removeLogoMenu();
    const menu = document.createElement('div');
    menu.dataset.fcMenu = 'logo';
    Object.assign(menu.style, {
      position: 'fixed',
      top: `${e.clientY}px`,
      left: `${e.clientX}px`,
      background: 'white',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: '8px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      padding: '6px 0',
      minWidth: '200px',
      zIndex: '10000',
      fontSize: '13px',
      color: '#111827',
    });
    const itemPng = document.createElement('button');
    itemPng.type = 'button';
    itemPng.textContent = 'Copy logo (PNG) to clipboard';
    Object.assign(itemPng.style, {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '8px 12px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
    });
    itemPng.addEventListener('click', async () => {
      this.#removeLogoMenu();
      await this.#copyLogoAsPng();
    });
    const itemSvg = document.createElement('button');
    itemSvg.type = 'button';
    itemSvg.textContent = 'Copy logo (SVG as text)';
    Object.assign(itemSvg.style, {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '8px 12px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
    });
    itemSvg.addEventListener('click', async () => {
      this.#removeLogoMenu();
      await this.#copyLogoAsSvgText();
    });
    menu.appendChild(itemPng);
    menu.appendChild(itemSvg);
    document.body.appendChild(menu);

    const onDocClick = (evt) => {
      if (!menu.contains(evt.target)) {
        this.#removeLogoMenu();
        document.removeEventListener('click', onDocClick, true);
        document.removeEventListener('keydown', onKey, true);
      }
    };
    const onKey = (evt) => {
      if (evt.key === 'Escape') {
        this.#removeLogoMenu();
        document.removeEventListener('click', onDocClick, true);
        document.removeEventListener('keydown', onKey, true);
      }
    };
    document.addEventListener('click', onDocClick, true);
    document.addEventListener('keydown', onKey, true);
    return false;
  }

  #removeLogoMenu() {
    const existing = document.querySelector('div[data-fc-menu="logo"]');
    if (existing) existing.remove();
  }

  async #copyLogoAsPng() {
    try {
      if (navigator.clipboard && 'write' in navigator.clipboard && window.ClipboardItem) {
        const png = await this.#svgToPngBlob('/freeman_constructs.svg');
        if (!png) throw new Error('PNG generation failed');
        const item = new ClipboardItem({ 'image/png': png });
        await navigator.clipboard.write([item]);
        this.#showToast('Logo copied to clipboard');
      } else {
        this.#showToast('Clipboard image not supported');
      }
    } catch (err) {
      this.#showToast('Copy failed');
      console.error('PNG copy failed', err);
    }
  }

  async #copyLogoAsSvgText() {
    try {
      const res = await fetch('/freeman_constructs.svg');
      const svgText = await res.text();
      if (navigator.clipboard && 'writeText' in navigator.clipboard) {
        await navigator.clipboard.writeText(svgText);
        this.#showToast('Logo SVG copied as text');
      } else {
        // Fallback using execCommand
        this.#copyViaExecCommand(svgText);
        this.#showToast('Logo SVG copied as text');
      }
    } catch (err) {
      this.#showToast('Copy failed');
      console.error('SVG text copy failed', err);
    }
  }

  #copyViaExecCommand(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.top = '-9999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
    } finally {
      ta.remove();
    }
  }

  async #svgToPngBlob(path) {
    const res = await fetch(path);
    const svgText = await res.text();
    const blob = new Blob([svgText], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    try {
      const img = await new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = url;
      });
      const width = img.naturalWidth || 1450;
      const height = img.naturalHeight || 340;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const pngBlob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
      return pngBlob;
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  #showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    Object.assign(toast.style, {
      position: 'fixed',
      top: '12px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(17, 24, 39, 0.9)',
      color: 'white',
      padding: '6px 10px',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: '9999',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      opacity: '0',
      transition: 'opacity 150ms ease',
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
    });
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 200);
    }, 1400);
  }

  render() {
    return html`
      <header>
        <nav>
          <a class="logo" href="#home" aria-label="Freeman Constructs" title="Right-click for options" @contextmenu=${this.showLogoMenu}>
            <img src="/freeman_constructs.svg" alt="Freeman Constructs" />
          </a>
          <div class="menu">
            <a href="#home">Home</a>
            <a href="#ai">AI</a>
            <a href="#about">About</a>
            <a href="#bio">Bio</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
