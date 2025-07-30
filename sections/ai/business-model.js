import { LitElement, html, css } from 'https://esm.sh/lit';

export class BusinessModel extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 8rem 1.5rem 6rem;
      background: linear-gradient(to bottom, #ffffff, #f9fafb);
      color: #1f2937;
    }

    .section-title {
      text-align: center;
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 3rem;
    }

    .phase-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2.5rem;
      justify-content: center;
      align-items: stretch;
    }

    .phase-card {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15); /* bright blue glow */
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .phase-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 25px 60px rgba(59, 130, 246, 0.25); /* brighter on hover */
    }

    .icon {
      width: 42px;
      height: 42px;
      stroke: #3b82f6;
      stroke-width: 2;
      fill: none;
      margin-bottom: 1rem;
      transition: transform 0.3s ease;
    }

    .phase-card:hover .icon {
      transform: scale(1.1);
    }

    .phase-title {
      font-weight: 700;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    .phase-text {
      font-size: 0.95rem;
      color: #4b5563;
      line-height: 1.5;
    }
  `;

  render() {
    return html`
      <section>
        <div class="section-title">Licensing First. Chips Next.</div>
        <div class="phase-grid">
          <!-- Phase 1: De-risk -->
          <div class="phase-card">
            <svg class="icon" viewBox="0 0 24 24">
              <path d="M3 12h18M12 3v18" />
              <path d="M4.5 4.5l15 15M19.5 4.5l-15 15" />
            </svg>
            <div class="phase-title">Phase 1: De-risk</div>
            <div class="phase-text">
              Use validated training results to de-risk the pipeline before fabrication.
            </div>
          </div>

          <!-- Phase 2: RTL to Licensing -->
          <div class="phase-card">
            <svg class="icon" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
              <path d="M9 4v16M15 4v16" />
              <path d="M4 9h16M4 15h16" />
            </svg>
            <div class="phase-title">Phase 2: RTL → Licensing</div>
            <div class="phase-text">
              License proven RTL blocks for integer AI acceleration.
            </div>
          </div>

          <!-- Phase 3: Hardware -->
          <div class="phase-card">
            <svg class="icon" viewBox="0 0 24 24">
              <rect x="3" y="6" width="18" height="12" rx="2" />
              <path d="M7 20h10" />
              <path d="M9 16v4M15 16v4" />
            </svg>
            <div class="phase-title">Phase 3: Hardware</div>
            <div class="phase-text">
              Vertically integrate IP into a full accelerator card for hyperscaler and edge deployments.
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('business-model', BusinessModel);
