import { LitElement, html, css } from 'https://esm.sh/lit';

export class MarketTimeline extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 0rem 1rem 3rem;
      background: linear-gradient(to bottom, #f9fafb, #ffffff);
    }

    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
      background: #e2e8f0;
    }

    .entry {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 3rem 0;
      position: relative;
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .entry.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .entry:nth-child(odd) {
      flex-direction: row-reverse;
    }

    .dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #6366f1;
      position: absolute;
      left: 50%;
      transform: scale(0.5) translateX(-50%);
      transition: transform 0.4s ease;
      z-index: 1;
    }

    .entry.visible .dot {
      transform: scale(1) translateX(-50%);
    }

    .entry-content {
      background: white;
      border-radius: 1rem;
      padding: 1.25rem 1.5rem;
      box-shadow: 0 10px 20px rgba(0,0,0,0.06);
      max-width: 320px;
      position: relative;
    }

    .entry:nth-child(odd) .entry-content {
      margin-right: 0rem;
      text-align: left;
    }

    .entry:nth-child(even) .entry-content {
      margin-left: 2.5rem;
      text-align: left;
    }

    .year {
      font-size: 0.875rem;
      font-weight: 600;
      color: #64748b;
      margin-bottom: 0.25rem;
    }

    .title {
      font-size: 1rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 0.25rem;
    }

    .desc {
      font-size: 0.95rem;
      color: #374151;
    }

    .entry:last-child .dot {
      background: #be185d;
    }

    .entry:last-child .title {
      color: #be185d;
    }

    @media (max-width: 640px) {
    .timeline::before {
        left: 12px; /* move line to left */
        transform: none;
    }

    .entry {
        flex-direction: row !important;
        align-items: flex-start;
        margin: 2rem 0;
    }

    .dot {
        left: 12px;
        transform: scale(1);
    }

    .entry-content {
        margin-left: 2.25rem !important;
        margin-right: 0 !important;
        max-width: 100%;
        padding: 1rem 1rem;
    }

    .year {
        font-size: 0.85rem;
    }

    .title {
        font-size: 1rem;
    }

    .desc {
        font-size: 0.875rem;
    }
    }

  `;

  firstUpdated() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.renderRoot.querySelectorAll('.entry').forEach(el =>
      observer.observe(el)
    );
  }

  render() {
    const events = [
      {
        year: '2018',
        title: 'Model Scaling Begins',
        desc: 'Transformer models start exponential growth.'
      },
      {
        year: '2020',
        title: 'Moore\'s Law Wobbles',
        desc: 'Chip shrink slows, model size explodes.'
      },
      {
        year: '2022',
        title: 'Energy Ceiling Hits',
        desc: 'Data centers face power and cost constraints.'
      },
      {
        year: '2023',
        title: 'Edge AI Demand Surges',
        desc: 'On-device inference takes off globally.'
      },
      {
        year: '2025',
        title: 'The Integer Era',
        desc: 'Integer-based training and inference becomes possible.'
      }
    ];

    return html`
      <div class="timeline">
        ${events.map(
          (event, i) => html`
            <div class="entry" style="transition-delay: ${i * 120}ms">
              <div class="dot"></div>
              <div class="entry-content">
                <div class="year">${event.year}</div>
                <div class="title">${event.title}</div>
                <div class="desc">${event.desc}</div>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define('market-timeline', MarketTimeline);
