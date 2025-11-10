import { LitElement, html, css } from 'https://esm.sh/lit';

export class PerformanceBars extends LitElement {
  static styles = css`
    .bars {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .bar-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .label {
      font-weight: 600;
      color: hsl(var(--foreground));
      margin-bottom: 0.5rem;
    }

    .bar-container {
      position: relative;
      width: 100%;
      height: 14px;
      background-color: hsl(var(--border));
      border-radius: 9999px;
      overflow: hidden;
    }

    .bar-fill {
      height: 100%;
      border-radius: 9999px;
      background: linear-gradient(
        to right,
        hsl(var(--brand-primary)),
        hsl(var(--brand-primary-2))
      );
      width: 0;
      transition: width 1s ease-in-out;
    }

    .value-label {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.75rem;
      font-weight: 600;
      color: white;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 0.25rem;
      padding: 0 0.3rem;
      pointer-events: none;
    }
  `;

  static properties = {
    metrics: { type: Array },
    animated: { type: Boolean }
  };

  constructor() {
    super();
    this.metrics = [
      { label: 'Speed/Area', value: 1.79 },
      { label: 'Energy/Area', value: 5.98 },
      { label: 'Speed/Energy', value: 5.27 },
    ];
    this.animated = false;
  }

  firstUpdated() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.animated = true;
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(this);
  }

  render() {
    const maxVal = Math.max(...this.metrics.map(m => m.value));
    return html`
      <div class="bars">
        ${this.metrics.map(metric => {
          const percent = this.animated
            ? (metric.value / maxVal) * 100
            : 0;
          return html`
            <div class="bar-wrapper">
              <div class="label">${metric.label}</div>
              <div class="bar-container">
                <div class="bar-fill" style="width: ${percent}%;"></div>
                <div class="value-label">×${metric.value}</div>
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('performance-bars', PerformanceBars);
