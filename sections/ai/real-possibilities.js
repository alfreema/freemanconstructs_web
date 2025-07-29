import { LitElement, html, css } from 'https://esm.sh/lit';

class RealPossibilities extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-top: 3rem;
    }

    h4 {
      font-size: 1.25rem;
      font-weight: 300;
      color: #6366f1;
      margin-bottom: 1rem;
    }

    .item {
      display: flex;
      align-items: start;
      gap: 1rem;
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
      color: #374151;
    }

    .icon-box {
      width: 4rem;
      height: 4rem;
      flex-shrink: 0;
      overflow: hidden;
      border-radius: 0.5rem;
    }

    .icon-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    strong {
      display: block;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
  `;

  render() {
    return html`
      <h4>Real-World Possibilities</h4>

      <div class="item">
        <div class="icon-box">
          <img
            src="https://plus.unsplash.com/premium_photo-1661386253258-64ab9521ce89?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Datacenter"
          />
        </div>
        <p>
          <strong>Datacenter disruption</strong>
          Drastically lower power, cost, and footprint for AI training and inference at scale.
        </p>
      </div>

      <div class="item">
        <div class="icon-box">
          <img
            src="https://images.unsplash.com/photo-1554744512-d6c603f27c54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Self-driving car"
          />
        </div>
        <p>
          <strong>Self-learning vehicles</strong>
          Real-time training onboard — no cloud required, adaptive to every road and driver.
        </p>
      </div>

      <div class="item">
        <div class="icon-box">
          <img
            src="https://images.unsplash.com/photo-1701111759812-b9a2da549c44?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="HAL9000 interface"
          />
        </div>
        <p>
          <strong>Private AI assistants</strong>
          HAL9000-style intelligence that runs locally — always on, always personal, never shared.
        </p>
      </div>

      <div class="item">
        <div class="icon-box">
          <img
            src="https://images.unsplash.com/photo-1619037961390-f2047d89bc55?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Wearable tech"
          />
        </div>
        <p>
          <strong>Ambient edge AI</strong>
          Wearables, implants, or sensors that learn and respond — without needing the cloud or even batteries.
        </p>
      </div>

      <div class="item">
        <div class="icon-box">
          <img
            src="https://plus.unsplash.com/premium_photo-1699387204264-0645255b7d69?q=80&w=1678&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Medical AI"
          />
        </div>
        <p>
          <strong>Advancement in medicine</strong>
          Enables real-time diagnostics, personalized treatment, and accelerated drug discovery — transforming how care is delivered and scaled.
        </p>
      </div>
    `;
  }
}

customElements.define('real-possibilities', RealPossibilities);
