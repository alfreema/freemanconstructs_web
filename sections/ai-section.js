import { LitElement, html, css } from 'https://esm.sh/lit';
import './ai/problem-scale.js';
import './ai/the-breakthrough.js';
import './ai/how-it-works.js';
import './ai/market-timing.js';
import './ai/real-impact.js';
import './ai/business-model.js'; // ✅ new section here

export class AiSection extends LitElement {
  static styles = css`
  :host {
    display: block;
    padding: 6rem 1.5rem;
    background: linear-gradient(to bottom, #e5e7eb, #f9fafb);
    color: #1f2937;
  }

  .container {
    max-width: 64rem;
    margin: 0 auto;
    background: white;
    box-shadow: 0 10px 15px rgba(0,0,0,0.05);
    border-radius: 1rem;
    padding: 3.5rem;
  }

  ::slotted(*) {
    margin-bottom: 3rem;
  }

  @media (max-width: 640px) {
    :host {
      padding: 3rem 1rem; /* reduced padding for mobile */
    }

    .container {
      padding: 2rem 1rem; /* reduced inner padding for mobile */
      border-radius: 0.5rem;
      box-shadow: none;
    }

    ::slotted(*) {
      margin-bottom: 2rem;
    }
  }
`;

  render() {
    return html`
      <section id="ai">
        <div class="container" data-aos="fade-up">
          <problem-scale></problem-scale>
          <the-breakthrough></the-breakthrough>
          <how-it-works></how-it-works>
          <market-timing></market-timing>
          <real-impact></real-impact>
          <business-model></business-model> <!-- ✅ added here -->
        </div>
      </section>
    `;
  }
}

customElements.define('ai-section', AiSection);
