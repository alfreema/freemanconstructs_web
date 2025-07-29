import { LitElement, html, css } from 'https://esm.sh/lit';

class WhyMatters extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-top: 4rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 300;
      color: #6366f1;
      margin-bottom: 1rem;
    }

    img {
      width: 12rem;
      height: 16rem;
      object-fit: cover;
      border-radius: 0.75rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      float: right;
      margin-left: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
  `;

  render() {
    return html`
      <h3>Why This Matters</h3>

      <img
        src="https://images.unsplash.com/photo-1529310399831-ed472b81d589?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0"
        alt="Circuit board close-up"
      />

      <p>
        In engineering, we talk about the <i>Performance, Power, Area (PPA) triangle</i> — you typically optimize for two at the expense of the third.
        But if you break that triangle, delivering better performance, lower power, and smaller size at the same time,
        you’ve created something truly <b>disruptive</b>.
      </p>

      <p>
        That’s what this research explores: new ways to train and run AI models with much simpler, more efficient computation.
        The results point to a future where chips can outperform today's best (like the Nvidia H100),
        with less power, less silicon, and dramatically lower cost.
      </p>

      <p>
        This unlocks high-performance AI not just in datacenters — but in edge devices: PCs, laptops, wearables, even autonomous vehicles.
        It brings real-time AI training and inference into reach for countless applications.
      </p>
    `;
  }
}

customElements.define('why-matters', WhyMatters);
