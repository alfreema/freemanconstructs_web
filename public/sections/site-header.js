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
    const itemSvg = document.createElement('button');
    itemSvg.type = 'button';
    itemSvg.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="13" height="13" rx="2"/>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
      </svg>
      <span>Copy logo to clipboard</span>`;
    Object.assign(itemSvg.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
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
    menu.appendChild(itemSvg);

    const itemDl = document.createElement('button');
    itemDl.type = 'button';
    itemDl.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      <span>Download brand assets (ZIP)</span>`;
    Object.assign(itemDl.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      width: '100%',
      textAlign: 'left',
      padding: '8px 12px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      borderTop: '1px solid rgba(0,0,0,0.06)'
    });
    itemDl.addEventListener('click', () => {
      this.#removeLogoMenu();
      this.#downloadBrandAssets();
    });
    menu.appendChild(itemDl);
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

  #downloadBrandAssets() {
    const a = document.createElement('a');
    a.href = '/brand-assets.zip';
    a.download = 'brand-assets.zip';
    document.body.appendChild(a);
    a.click();
    a.remove();
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
    // Compute hrefs that behave well across routes
    const linkHref = (id) => {
      const path = (typeof window !== 'undefined' && window.location && window.location.pathname) || '/';
      const notRoot = path !== '/';
      const isKansas = path.startsWith('/kansas');
      // Keep Bio/Contact on the Kansas page; otherwise link to home anchors
      if (id === 'bio' || id === 'contact') {
        return isKansas ? `#${id}` : `/#${id}`;
      }
      // Home/AI/About should take you to the homepage anchors when not on root
      return notRoot ? `/#${id}` : `#${id}`;
    };
    return html`
      <header>
        <nav>
          <a class="logo" href="${linkHref('home')}" aria-label="Freeman Constructs" title="Right-click for options" @contextmenu=${this.showLogoMenu}>
            <img src="/freeman_constructs.svg" alt="Freeman Constructs" />
          </a>
          <div class="menu">
            <a href="${linkHref('home')}">Home</a>
            <a href="${linkHref('ai')}">AI</a>
            <a href="${linkHref('about')}">About</a>
            <a href="${linkHref('bio')}">Bio</a>
            <a href="${linkHref('contact')}">Contact</a>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
