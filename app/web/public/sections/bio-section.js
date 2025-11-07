import { LitElement, html, css } from 'https://esm.sh/lit';

export class BioSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 5rem 1.5rem;
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
    }

    .container {
      max-width: 64rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    @media (min-width: 768px) {
      .container {
        flex-direction: row;
        align-items: flex-start;
      }
    }

    img {
      width: 10rem;
      height: 10rem;
      object-fit: cover;
      border-radius: 0.75rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      flex-shrink: 0;
    }

    h2 {
      font-size: 1.875rem;
      font-weight: 300;
      color: hsl(var(--primary));
      margin-bottom: 1rem;
    }

    p {
      line-height: 1.7;
      margin-top: 1rem;
    }

    a {
      color: hsl(var(--primary));
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <section id="bio">
        <div class="container" data-aos="fade-up">
          <img
            src="/200x200.jpg"
            alt="Aaron Freeman"
          />
          <div>
            <h2>Bio: Aaron Freeman</h2>
            <p>
              Aaron Freeman is a technologist, inventor, and founder with deep expertise in computer and software engineering. He holds a B.S. in Computer Science and an M.S. in Electrical Engineering from Wichita State University, where he also taught computer architecture and programming while pursuing a Ph.D.
            <p>
            <p>
              Aaron was granted a U.S. patent for the first internet-connected sprinkler system and later founded SendThisFile, the original file-transfer-as-a-service platform. His work spans robotics, cloud infrastructure, and AI acceleration.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('bio-section', BioSection);
