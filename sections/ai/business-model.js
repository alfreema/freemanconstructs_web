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
      box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .phase-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 25px 60px rgba(59, 130, 246, 0.25);
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
        <div class="section-title">Our Roadmap: Licensing First. Chips Next.</div>
        <div class="phase-grid">
          <!-- Phase 1: Validate -->
          <div class="phase-card">
            <svg class="icon" viewBox="0 0 24 24">
              <polyline points="5 13 9 17 19 7" />
            </svg>
            <div class="phase-title">Phase 1: Validate</div>
            <div class="phase-text">
              Validate TenFold performs 10x faster than current hardware.
            </div>
          </div>

          <!-- Phase 2: RTL to Licensing -->
          <div class="phase-card">
            <svg class="icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l3 3" />
            </svg>
            <div class="phase-title">Phase 2: RTL → Licensing</div>
            <div class="phase-text">
              License TenFold to hardware manufacturing partners.
            </div>
          </div>

          <!-- Phase 3: Hardware -->
          <div class="phase-card">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4.5 16.5 3 21l4.5-1.5" />
            <path d="M12 15c-1.7 0-3.3-.3-4.7-.9a.3.3 0 0 1-.2-.4c.3-1 .9-2.7 2-4.1a11.3 11.3 0 0 1 7.3-4.3l3.1 3.1a11.3 11.3 0 0 1-4.3 7.2c-1.4 1-3.1 1.6-4.2 2a.3.3 0 0 1-.4-.2c-.6-1.3-.9-3-.9-4.7Z" />
            <path d="m9 9 1 1" />
            <path d="M17 13a6 6 0 0 0-6-6" />
          </svg>

            <div class="phase-title">Phase 3: Hardware</div>
            <div class="phase-text">
              Manufacture and sell Tenfold hardware that improves AI training 10x.
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('business-model', BusinessModel);
