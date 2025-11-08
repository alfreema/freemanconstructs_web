import { LitElement, html, css } from 'https://esm.sh/lit';

export class PipelineHighlight extends LitElement {
  static styles = css`
    .wrapper {
      /* Soft pink glow using shared token */
      background: radial-gradient(
        circle at center,
        hsl(var(--pink-glow) / 0.06),
        transparent 80%
      );
      padding: 1rem 1.5rem;
      border-radius: 1rem;
      display: inline-block;
      margin-bottom: 2.5rem;
    }

    .pipeline {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.95rem;
    }

    .step {
      padding: 0.3rem 0.85rem;
      border-radius: 9999px;
      background: hsl(var(--accent));
      color: hsl(var(--primary));
      border: 1px solid hsl(var(--border));
      font-weight: 500;
      transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }

    .step.active {
      background: linear-gradient(
        to right,
        hsl(var(--brand-primary)),
        hsl(var(--brand-primary-2))
      );
      color: white;
      transform: scale(1.05);
      box-shadow: 0 0 0 2px hsl(var(--pink-glow) / 0.25);
    }

    .arrow-icon {
      width: 1rem;
      height: 1rem;
    }

    .arrow-icon path {
      stroke: hsl(var(--border));
      stroke-width: 2;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    @media (max-width: 640px) {
      .wrapper {
        padding: 0.75rem 1rem;
        margin-bottom: 2rem;
      }

      .pipeline {
        font-size: 0.8rem;
        gap: 0.4rem;
      }

      .step {
        padding: 0.25rem 0.65rem;
      }

      .arrow-icon {
        width: 0.75rem;
        height: 0.75rem;
      }
    }

  `;

  static properties = {
    steps: { type: Array },
    _index: { state: true }
  };

  constructor() {
    super();
    this.steps = ['Analysis', 'Idea', 'Build', 'Validate'];
    this._index = 0;
  }

  firstUpdated() {
    this._highlightTimer = setInterval(() => {
      this._index = (this._index + 1) % this.steps.length;
    }, 1400);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._highlightTimer);
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="pipeline">
          ${this.steps.map(
            (step, i) => html`
              <span class="step ${i === this._index ? 'active' : ''}">${step}</span>
              ${i < this.steps.length - 1
                ? html`<svg class="arrow-icon" viewBox="0 0 20 20">
                    <path d="M5 10h10M12 7l3 3-3 3" />
                  </svg>`
                : ''}
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('pipeline-highlight', PipelineHighlight);
