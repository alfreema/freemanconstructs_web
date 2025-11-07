import { LitElement, html, css } from 'https://esm.sh/lit';

export class RealImpact extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 0rem 1.5rem;
      /* Match original bluish gray → white gradient */
      background: linear-gradient(to bottom, #f9fafb, #ffffff);
      color: hsl(var(--foreground));
    }

    .section-title {
      text-align: center;
      font-size: 2rem;
      font-weight: 800;
      padding-bottom: 3rem;
      padding-top: 3rem;
    }

    .impact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      justify-content: center;
    }

    .impact-card {
      background: hsl(var(--card));
      padding: 2rem;
      border-radius: 1rem;
      border: 1px solid hsl(var(--border));
      /* Keep this section's distinct pink glow */
      box-shadow: 0 20px 40px hsl(var(--impact-glow) / 0.15);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
    }

    .impact-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 25px 50px hsl(var(--impact-glow) / 0.25);
    }

    .icon {
      width: 40px;
      height: 40px;
      margin-bottom: 1rem;
      stroke: hsl(var(--primary));
      stroke-width: 2;
      fill: none;
      transition: transform 0.3s ease;
    }

    .impact-card:hover .icon {
      transform: scale(1.1);
    }

    .impact-title {
      font-weight: 700;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }

    .impact-text {
      color: hsl(var(--muted-foreground));
      font-size: 0.95rem;
      line-height: 1.4;
    }
  `;

  render() {
    return html`
      <section>
        <div class="section-title">What 10× Really Means</div>
        <div class="impact-grid">
          <!-- Savings -->
          <div class="impact-card">
            <svg class="icon" viewBox="0 0 24 24">
              <path d="M12 1v22" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <div class="impact-title">Reduce Training Costs</div>
            <div class="impact-text">
              At scale, a 1GW datacenter could save <strong>$295M annually</strong> using integer AI compute.
            </div>
          </div>

          <!-- HAL9000 Edge -->
          <div class="impact-card">
            <svg class="icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <div class="impact-title">Train Models Faster</div>
            <div class="impact-text">
              Integer math runs <strong>10×</strong> more efficiently, enabling faster iteration and smarter AI.
            </div>
          </div>

          <!-- Cars -->
          <div class="impact-card">
            <svg class="icon" viewBox="0 0 24 24">
              <path d="M3 13h2l1 2h12l1-2h2" />
              <path d="M5 6h14a2 2 0 0 1 2 2v5H3V8a2 2 0 0 1 2-2Z" />
              <circle cx="7.5" cy="16.5" r="1.5" />
              <circle cx="16.5" cy="16.5" r="1.5" />
            </svg>
            <div class="impact-title">Train Deeper Models</div>
            <div class="impact-text">
              Unlock the ability to train larger, more capable models—even at the edge without cloud dependency.
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('real-impact', RealImpact);
