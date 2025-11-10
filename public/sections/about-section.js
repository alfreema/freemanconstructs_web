import { LitElement, html, css } from 'https://esm.sh/lit';

export class AboutSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 5rem 1.5rem;
      background-color: hsl(var(--accent));
      color: hsl(var(--foreground));
    }

    .container {
      max-width: 48rem;
      margin: 0 auto;
    }

    h2 {
      font-size: 1.875rem;
      font-weight: 300;
      margin-bottom: 1rem;
      color: hsl(var(--primary));
    }

    p {
      line-height: 1.7;
    }
  `;

  render() {
    return html`
      <section id="about">
        <div class="container" data-aos="fade-up">
          <h2>What is Freeman Constructs?</h2>
          <p>
            Freeman Constructs is a personal innovation lab and future-facing brand for private research, engineering, and venture exploration.
            It includes work in AI, tech architecture, construction concepts, and investment strategy. Current focus is on a hardware-level
            breakthrough in AI compute: full transformer training using integer arithmetic &dash; a potential paradigm shift in energy-efficient AI hardware.
          </p>
        </div>
      </section>
    `;
  }
}

customElements.define('about-section', AboutSection);
