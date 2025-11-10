import { LitElement, html, css } from 'https://esm.sh/lit';
import './layer-stack.js';
import './pipeline-highlight.js';

export class HowItWorks extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 4rem 1.5rem;
      background: hsl(var(--background));
      color: hsl(var(--foreground));
      text-align: center;
    }

    h2 {
      font-size: 2rem;
      font-weight: 800;
      color: hsl(var(--foreground));
      margin-bottom: 2rem;
    }

    .statement {
      margin: 2.5rem auto;
      max-width: 48rem;
      text-align: center;
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.75rem;
      margin-bottom: 3rem;
    }

    @media (max-width: 640px) {
      .feature-grid {
        grid-template-columns: 1fr;
      }
    }

    .feature {
      position: relative;
      background: hsl(var(--card));
      border: 1px solid hsl(var(--border));
      border-radius: 0.75rem;
      padding: 2rem 1.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .feature::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 4px;
      width: 100%;
      background: linear-gradient(
        to right,
        hsl(var(--brand-primary)),
        hsl(var(--brand-primary-2))
      );
    }

    .feature:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 24px hsl(var(--primary) / 0.12);
    }

    .icon-wrapper {
      position: relative;
      width: 3.5rem;
      height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-glow {
      position: absolute;
      width: 3.5rem;
      height: 3.5rem;
      background: radial-gradient(
        circle,
        hsl(var(--primary) / 0.15),
        transparent 70%
      );
      border-radius: 9999px;
      z-index: 0;
    }

    svg {
      width: 2rem;
      height: 2rem;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      color: hsl(var(--primary));
      z-index: 1;
      position: relative;
      transition: transform 0.3s ease;
    }

    .feature:hover svg {
      transform: scale(1.1) rotate(2deg);
    }

    .stack-wrapper {
      margin-top: 3rem;
    }

    .stack-caption {
      text-align: center;
      margin-top: 0.5rem;
      font-size: 0.9rem;
      color: hsl(var(--muted-foreground));
    }
      
    a {
      color: hsl(var(--primary));
      font-style: italic;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    a:hover {
      text-decoration: underline;
      color: hsl(var(--primary));
    }      
  `;

  render() {
    return html`
      <section>
        <h2>How We Replace Floating Point</h2>

        <div class="feature-grid">
          ${this.feature(this.encodeIcon(), 'Custom number encoding format')}
          ${this.feature(this.opsIcon(), 'Integer-only matmul, softmax, layernorm, optimizer')}
          ${this.feature(this.checkIcon(), 'Complex math functions made integer-friendly')}
          ${this.feature(this.chipIcon(), 'Integer-only memory and silicon layout')}
        </div>

        <pipeline-highlight></pipeline-highlight>

        <h3 style="margin-top: 80px;">
          Developing IP for radically efficient AI.
        </h3>

        <p class="statement">
          Tenfold is still in active development, but the <strong>foundational breakthrough is real</strong>: <strong>pure-integer training is viable</strong>, and early results show <strong>major gains</strong> in performance, power, and area.
        </p>
        <p class="statement">
          We're now scaling up — working to train large transformer models end-to-end using only integer math. Our goal: to offer <strong>licensing-ready IP</strong> that enables radically simpler, faster, and more efficient AI chips.
        </p>
        <p class="statement">
          If you're a chipmaker, systems partner, or investor exploring next-gen AI compute, <a href="#contact"><em>we’d love to talk</em><a/>.
        </p>

        <!--
        <div class="stack-wrapper">
          <layer-stack></layer-stack>
        </div>
        -->
      </section>
    `;
  }

  feature(icon, text) {
    return html`
      <div class="feature">
        <div class="icon-wrapper">
          <div class="icon-glow"></div>
          ${icon}
        </div>
        <div>${text}</div>
      </div>
    `;
  }

  encodeIcon() {
    return html`
      <svg viewBox="0 0 24 24">
        <rect x="4" y="6" width="16" height="2" />
        <rect x="4" y="11" width="16" height="2" />
        <rect x="4" y="16" width="16" height="2" />
      </svg>
    `;
  }

  opsIcon() {
    return html`
      <svg viewBox="0 0 24 24">
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    `;
  }

  checkIcon() {
    return html`
      <svg viewBox="0 0 24 24">
        <polyline points="5 13 9 17 19 7" />
      </svg>
    `;
  }

  chipIcon() {
    return html`
      <svg viewBox="0 0 24 24">
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <line x1="4" y1="9" x2="4" y2="15" />
        <line x1="20" y1="9" x2="20" y2="15" />
        <line x1="9" y1="4" x2="15" y2="4" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="4" y1="4" x2="4" y2="6" />
        <line x1="4" y1="18" x2="4" y2="20" />
        <line x1="20" y1="4" x2="20" y2="6" />
        <line x1="20" y1="18" x2="20" y2="20" />
      </svg>
    `;
  }
}

customElements.define('how-it-works', HowItWorks);
