import { LitElement, html, css } from 'https://esm.sh/lit';

export class ContactSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 5rem 1.5rem;
      /* Use global theme tokens */
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
    }

    .container {
      max-width: 48rem;
      margin: 0 auto;
      text-align: center;
    }

    h2 {
      font-size: 1.875rem;
      font-weight: 700;
      color: hsl(var(--primary));
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.125rem;
      margin-top: 1rem;
    }

    .email {
      font-family: monospace;
      user-select: text;
    }

    .icons {
      margin-top: 1.5rem;
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }

    a {
      color: hsl(var(--muted-foreground));
      transition: color 0.2s;
    }

    a:hover {
      color: hsl(var(--primary));
    }

    .icon {
      width: 1.5rem;
      height: 1.5rem;
    }

    /* Tailwind-like responsive visibility without relying on Tailwind inside shadow DOM */
    .desktop-only { display: none; }
    .mobile-only { display: inline; }
    @media (min-width: 640px) {
      .desktop-only { display: inline; }
      .mobile-only { display: none; }
    }
  `;

  render() {
    return html`
      <section id="contact">
        <div class="container" data-aos="fade-up">
          <h2>Get in Touch</h2>
          <p style="margin-bottom: 300px;">
            Email:
            <span class="email">
              aaron<span class="desktop-only"> [at] </span><span class="mobile-only">@</span>freemanconstructs.com
            </span>
          </p>

          <div class="icons">
            <a href="https://www.linkedin.com/in/aaronfreeman/" target="_blank" aria-label="LinkedIn">
              <i data-lucide="linkedin" class="icon"></i>
            </a>
            <a href="https://www.facebook.com/aaron.freeman.7330" target="_blank" aria-label="Facebook">
              <i data-lucide="facebook" class="icon"></i>
            </a>
            <a href="https://github.com/alfreema" target="_blank" aria-label="GitHub">
              <i data-lucide="github" class="icon"></i>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  firstUpdated() {
    // lucide icons need to be created after the element is connected
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

customElements.define('contact-section', ContactSection);
