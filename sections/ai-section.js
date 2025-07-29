import { LitElement, html, css } from 'https://esm.sh/lit';
import './ai/problem-scale.js';
import './ai/ai-research.js';
import './ai/why-matters.js';
import './ai/real-possibilities.js';

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
  `;

  render() {
    return html`
      <section id="ai">
        <div class="container" data-aos="fade-up">
          <problem-scale></problem-scale>
          <ai-research></ai-research>
          <why-matters></why-matters>
          <real-possibilities></real-possibilities>
        </div>
      </section>
    `;
  }
}

customElements.define('ai-section', AiSection);
