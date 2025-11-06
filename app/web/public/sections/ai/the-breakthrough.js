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

    .statement {
      margin: 2.5rem auto;
      max-width: 48rem;
      text-align: center;
      font-size: 1.125rem;
      line-height: 1.75rem;
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

        <p class="statement">
          Most AI training relies on power-hungry floating-point math. We’ve replaced it with simpler integer math—unlocking up to <strong>10× gains in speed and energy efficiency</strong>.
        </p>

        <div class="stat-grid">
          <div class="stat">
            ${this.cpuIcon()}
            <div>AI models have only been trainable with floating-point math.</div>
          </div>
          <div class="stat">
            <div class="icon">${this.boltIcon()}</div>
            <div><span class="highlight">10.5×</span> faster performance with integer math.</div>
          </div>
          <div class="stat">
            ${this.chipIcon()}
            <div>Tenfold unlocks pure-integer AI training.</div>
          </div>
        </div>

        <h3 style="margin-top: 80px;">
          Multiply-Accumulate drives 95% of AI compute—we’ve boosted it 3.8× and project 10×.
        </h3>

        <p class="statement">
          At the heart of every AI model is one core operation: <strong>Multiply-Accumulate</strong> (MAC). It's how neural networks do math—multiplying inputs and summing results—over and over, trillions of times per second.
        </p>

        <p class="statement">
          GPUs and accelerators spend up to <strong>95% of their time</strong> performing MACs in many models. So we focused there first—analyzing and redesigning the MAC to run on integer math instead of floating point.
        </p>

        <p class="statement">
          The result? A <strong>10× leap in speed and energy efficiency</strong>, backed by real hardware data. All while preserving training accuracy.
        </p>

        <performance-bars
          .metrics=${[
            { label: 'Current State of the Art GPU MAC: Speed/Energy', value: 1.0 },
            { label: 'Tenfold validated integer MAC: Speed/Energy', value: 5.27 },
            { label: 'Tenfold projected optimized integer MAC: Speed/Energy', value: 16.6 },
          ]}
        ></performance-bars>
        <p>Floating-point vs Tenfold MAC comparison</p>
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
