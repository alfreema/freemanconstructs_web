import { LitElement, html, css } from 'https://esm.sh/lit';
import './performance-bars.js';

export class TheBreakthrough extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 4rem 1.5rem;
      background: linear-gradient(to bottom, #f9fafb, #ffffff);
      color: #1f2937;
      text-align: center;
    }

    h2 {
      font-size: 2rem;
      font-weight: 800;
      color: #111827;
      margin-bottom: 2.5rem;
    }

    .stat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 2rem;
      margin-bottom: 2.5rem;
    }

    .stat {
      background: white;
      border-radius: 1rem;
      padding: 2rem;
      box-shadow: 0 8px 30px rgba(232, 121, 249, 0.35);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      transition: transform 0.2s ease;
    }

    .stat:hover {
      transform: translateY(-4px);
    }

    svg {
      width: 2.5rem;
      height: 2.5rem;
      color: #6366f1;
      stroke: currentColor;
      stroke-width: 2;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: transform 0.3s ease;
    }

    .stat:hover svg {
      transform: scale(1.15) rotate(4deg);
    }

    .note {
      font-size: 0.875rem;
      color: #6b7280;
      margin-bottom: 2rem;
    }

    .highlight {
        background: rgba(236, 72, 153, 0.1); /* tailwind pink-500 @ 10% */
        color: #ec4899; /* pink-500 */
        font-weight: 700;
        padding: 0.15rem 0.5rem;
        border-radius: 9999px;
        margin-right: 0.25rem;
        font-size: 0.95rem;
    }    
  `;

  render() {
    return html`
      <section>
        <h2>Pure Integer Training: A World First</h2>
        <div class="stat-grid">
          <div class="stat">
            ${this.cpuIcon()}
            <div>Transformer trained with 0 FP ops.</div>
          </div>
          <div class="stat">
            <div class="icon">${this.boltIcon()}</div>
            <div><span class="highlight">10.5×</span> MAC uplift - breaks the Performance, Power, Area triangle.</div>
          </div>
          <div class="stat">
            ${this.chipIcon()}
            <div>Enables radically simpler chips.</div>
          </div>
        </div>
        <div>FP32 vs 32-bit Integer MAC comparison</div>
        <performance-bars
          .metrics=${[
            { label: 'Speed/Area', value: 1.79 },
            { label: 'Energy/Area', value: 5.98 },
            { label: 'Speed/Energy', value: 5.27 },
          ]}
        ></performance-bars>
        <div style="margin-top: 100px;">Projected FP32 vs Optimized MAC comparison</div>
        <performance-bars
          .metrics=${[
            { label: 'Speed/Area', value: 5.6 },
            { label: 'Energy/Area', value: 12.6 },
            { label: 'Speed/Energy', value: 16.6 },
          ]}
        ></performance-bars>
      </section>
    `;
  }

  cpuIcon() {
    return html`
      <svg viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2" />
      </svg>
    `;
  }

  boltIcon() {
    return html`
      <svg viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 13 10 13 2" />
      </svg>
    `;
  }

  chipIcon() {
    return html`
      <svg viewBox="0 0 24 24">
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M4 9v6M20 9v6M9 4h6M9 20h6M4 4v2M4 18v2M20 4v2M20 18v2" />
      </svg>
    `;
  }
}

customElements.define('the-breakthrough', TheBreakthrough);
