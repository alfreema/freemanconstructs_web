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
    .logo {
      position: absolute;
      left: 3rem; /* bring logo further right from the edge */
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    .logo img {
      height: 28px;
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
  `;

  render() {
    return html`
      <header>
        <nav>
          <a class="logo" href="#home" aria-label="Freeman Constructs">
            <img src="/freeman_constructs.png" alt="Freeman Constructs" />
          </a>
          <a href="#home">Home</a>
          <a href="#ai">AI</a>
          <a href="#about">About</a>
          <a href="#bio">Bio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
