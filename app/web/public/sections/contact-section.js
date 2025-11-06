import { LitElement, html, css } from 'https://esm.sh/lit';

export class ContactSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 5rem 1.5rem;
      background-color: #ffffff;
      color: #1f2937; /* Tailwind gray-800 */
    }

    .container {
      max-width: 48rem;
      margin: 0 auto;
      text-align: center;
    }

    h2 {
      font-size: 1.875rem;
      font-weight: 700;
      color: #6366f1;
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
      color: #6b7280; /* gray-600 */
      transition: color 0.2s;
    }

    a:hover {
      color: #6366f1; /* primary */
    }

    .icon {
      width: 1.5rem;
      height: 1.5rem;
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
              aaron<span class="hidden sm:inline"> [at] </span><span class="inline sm:hidden">@</span>freemanconstructs.com
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
