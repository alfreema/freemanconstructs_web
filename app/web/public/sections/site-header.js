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

  // Copy the SVG logo to clipboard on right-click (context menu)
  async copyLogoToClipboard(e) {
    e.preventDefault();
    try {
      const res = await fetch('/freeman_constructs.svg');
      const svgText = await res.text();
      // Try rich clipboard with image/svg+xml; fall back to plain text
      if (navigator.clipboard && 'write' in navigator.clipboard && window.ClipboardItem) {
        const item = new ClipboardItem({ 'image/svg+xml': new Blob([svgText], { type: 'image/svg+xml' }) });
        await navigator.clipboard.write([item]);
        this.#showToast('Logo copied to clipboard');
      } else if (navigator.clipboard && 'writeText' in navigator.clipboard) {
        await navigator.clipboard.writeText(svgText);
        this.#showToast('Logo SVG copied as text');
      } else {
        this.#showToast('Clipboard not supported');
      }
    } catch (err) {
      this.#showToast('Copy failed');
      // eslint-disable-next-line no-console
      console.error('Logo copy failed', err);
    }
    return false;
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
          <a class="logo" href="#home" aria-label="Freeman Constructs" title="Right-click to copy logo" @contextmenu=${this.copyLogoToClipboard}>
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
