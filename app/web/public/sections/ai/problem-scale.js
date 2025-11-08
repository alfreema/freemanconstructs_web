import { LitElement, html, css } from 'https://esm.sh/lit';

export class ProblemScale extends LitElement {
  static styles = css`
    :host {
      display: block;
      /* Preserve original bluish gray → white gradient */
      background: linear-gradient(to bottom, #f9fafb, #ffffff);
      color: hsl(var(--foreground));
      padding: 6rem 1.5rem;
    }

    .section-content {
      max-width: 72rem;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
      text-align: center;
    }

    h2 {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: hsl(var(--foreground));
    }

    .subtitle {
      font-size: 1.125rem;
      color: hsl(var(--muted-foreground));
      margin-bottom: 3rem;
    }

    .graphic-wrapper {
      position: relative;
      max-width: 960px;
      margin: 0 auto;
    }

    .graphic-wrapper svg {
      width: 100%;
    }

    .stat-blocks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .stat-block {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      background: hsl(var(--card) / 0.7);
      backdrop-filter: blur(10px);
      border-radius: 0.75rem;
      padding: 1.5rem;
      text-align: left;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
      border: 1px solid hsl(var(--border));
    }

    .stat-icon svg {
      width: 1.5rem;
      height: 1.5rem;
      color: hsl(var(--primary));
      flex-shrink: 0;
    }

    .stat-text {
      font-size: 1rem;
      color: hsl(var(--muted-foreground));
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 1.75rem;
        line-height: 1.3;
        max-width: 16ch;
        margin-inline: auto;
      }

      .subtitle {
        font-size: 1rem;
        margin-bottom: 2rem;
        max-width: 32ch;
        margin-inline: auto;
      }

      .graphic-wrapper {
        margin-top: 2rem;
      }

      .stat-blocks {
        grid-template-columns: 1fr;
        gap: 1.25rem;
        margin-top: 2rem;
      }

      .stat-block {
        padding: 1rem;
        font-size: 0.95rem;
      }

      .stat-icon svg {
        width: 1.25rem;
        height: 1.25rem;
      }

      :host {
        padding: 3rem 1rem;
      }
    }
  `;

  firstUpdated() {
    fetch('/market_cap.svg')
      .then((res) => res.text())
      .then((svg) => {
        const container = this.renderRoot.querySelector('#market-graphic');
        container.innerHTML = svg;
      });
  }

  render() {
    return html`
      <section id="problem-scale">
        <div class="section-content" data-aos="fade-up">
          <h2>AI Compute is the Bottleneck</h2>
          <div class="subtitle">
            The infrastructure behind modern AI can't keep up with its scale.
          </div>

          <div class="graphic-wrapper" id="market-graphic"></div>

          <div class="stat-blocks">
            <div class="stat-block">
              <span class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8zm0 0V4m0 11v5m-7-4a9.985 9.985 0 0114 0" /></svg>
              </span>
              <span class="stat-text">$50M+ to train GPT-4-class models</span>
            </div>
            <div class="stat-block">
              <span class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 3a.75.75 0 00-.75.75v1.086a8.002 8.002 0 00-2.925 13.955l-.83.83a.75.75 0 101.06 1.06l.83-.83A8.001 8.001 0 0012 19.5a8.001 8.001 0 006.865-3.624l.83.83a.75.75 0 001.06-1.06l-.83-.83A8.002 8.002 0 0015 4.836V3.75a.75.75 0 00-.75-.75h-4.5z" /></svg>
              </span>
              <span class="stat-text">16,000 H100 GPUs — 3+ months of runtime</span>
            </div>
            <div class="stat-block">
              <span class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1m-1.636 6.364l-.707-.707M12 21v-1m-6.364-1.636l.707-.707M3 12h1m1.636-6.364l.707.707" /></svg>
              </span>
              <span class="stat-text">500MW+ datacenter energy burn</span>
            </div>
            <div class="stat-block">
              <span class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v18h18" /></svg>
              </span>
              <span class="stat-text">Chips aren’t keeping pace with model scale</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('problem-scale', ProblemScale);
