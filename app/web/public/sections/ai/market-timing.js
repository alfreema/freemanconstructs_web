import { LitElement, html, css } from 'https://esm.sh/lit';
import './market-timeline.js'; // ⬅️ make sure this is included

export class MarketTiming extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 6rem 1.5rem;
      background: white;
    }

    .container {
      max-width: 60rem;
      margin: 0 auto;
      text-align: center;
    }

    .headline {
      font-size: 2.75rem;
      font-weight: 800;
      line-height: 1.2;
      color: #111827;
      margin-bottom: 2.5rem;
    }

    .fade-lines {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      font-size: 1.25rem;
      font-weight: 500;
      color: #374151;
      margin-bottom: 4rem;
    }

    .fade-lines div:nth-child(1) {
      color: #1f2937;
    }

    .fade-lines div:nth-child(2) {
      color: #1f2937;
    }

    .fade-lines div:nth-child(3) {
      color: hsl(var(--muted-foreground));
      font-style: italic;
      opacity: 0.9;
    }

    @media (max-width: 640px) {
    :host {
        padding: 3rem 1rem;
    }

    .headline {
        font-size: 1.75rem;
        line-height: 1.3;
        margin-bottom: 2rem;
    }

    .fade-lines {
        gap: 1rem;
        font-size: 1rem;
        margin-bottom: 2.5rem;
    }

    .fade-lines div:nth-child(3) {
        font-size: 0.95rem;
    }
    }

  `;

  render() {
    return html`
      <div class="container">
        <div class="headline" data-aos="fade-up">
          The Breakthrough Couldn’t Have Happened Sooner
        </div>

        <div class="fade-lines">
          <div data-aos="fade-up" data-aos-delay="100">
            Models have outpaced Moore’s Law.
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            Data centers are hitting energy and cost ceilings.
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            The World Needs AI at the Edge. Silicon is the Bottleneck.
          </div>
        </div>

        <market-timeline data-aos="fade-up" data-aos-delay="700"></market-timeline>
      </div>
    `;
  }
}

customElements.define('market-timing', MarketTiming);
