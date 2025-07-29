import { LitElement, html, css } from 'https://esm.sh/lit';

class AiResearch extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 300;
      color: #6366f1;
      margin: 3rem 0 1rem 0;
    }

    p {
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .img-float {
      width: 16rem;
      border-radius: 0.75rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-left: 1.5rem;
      margin-bottom: 1rem;
      float: right;
    }

    .highlight {
      background-color: #fef9c3;
      padding: 1rem;
      border-radius: 0.5rem;
      overflow: hidden;
    }

    .highlight div {
      overflow: hidden;
    }

    .highlight p {
      margin-bottom: 0.5rem;
    }

    .highlight img {
      float: left;
      width: 6rem;
      height: 6rem;
      border-radius: 0.5rem;
      object-fit: cover;
      margin-right: 1rem;
    }

    ul {
      list-style: none;
      padding-left: 0;
      margin-top: 2rem;
    }

    li {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }

    li strong {
      display: block;
    }

    .icon {
      color: #6366f1;
      font-weight: bold;
      flex-shrink: 0;
    }

    .sublist {
      margin: 0.5rem 0 1rem 0;
      padding-left: 1.5rem;
    }

    .sublist li {
      font-size: 0.875rem;
      margin: 0.25rem 0;
    }

    .subdued {
      font-size: 0.875rem;
      color: #4b5563;
    }
  `;

  render() {
    return html`
      <h3>AI Research</h3>

      <img
        src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0"
        alt="Chip detail"
        class="img-float"
      />

      <p>
        This research explores a next-generation <b>computer chip architecture</b> purpose-built for <b>artificial intelligence</b>.
        Designed from the ground up with AI in mind, this new approach delivers faster, more efficient performance —
        and has the potential to reshape how the industry powers advanced AI systems.
      </p>
      <p>
        A key breakthrough in this work is streamlining the math used for AI. By proving transformer models can run with leaner calculations,
        it opens the door to faster, more efficient, and simpler hardware — and a future beyond the limits of traditional compute designs.
      </p>

      <ul>
        <li class="highlight">
          <img src="https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=735&auto=format&fit=crop" alt="Training" />
          <div>
            <p><strong>Trained a GPT-style transformer using radically simplified computation.</strong></p>
            <p class="subdued">
              Potentially a world-first milestone, showing transformer models can train using much leaner math —
              enabling simpler, lower-power hardware throughout the stack.
            </p>
          </div>
        </li>

        <li>
          <span class="icon">✓</span>
          <div>
            <strong>Early benchmarks on MNIST and CIFAR-10 confirmed viability.</strong>
            <p class="subdued">Used as a quick “fail-fast” check before committing deeper development effort.</p>
          </div>
        </li>

        <li>
          <span class="icon">✓</span>
          <div>
            <strong>Custom MAC design outperforms HardFloat 32-bit across key metrics.</strong>
            <ul class="sublist">
              <li><b>Speed/Area:</b> 1.79×</li>
              <li><b>Energy/Area:</b> 5.98×</li>
              <li><b>Speed/Energy:</b> 5.27×</li>
            </ul>
            <p class="subdued">
              Improves performance, power, and area simultaneously — enabling more efficient AI hardware.
            </p>
          </div>
        </li>

        <li>
          <span class="icon">✓</span>
          <div>
            <strong>~10× <i>minimum</i> overall improvement projected over today’s best AI hardware.</strong>
            <ul class="sublist">
              <li><b>Speed/Area:</b> ~5.6×</li>
              <li><b>Energy/Area:</b> ~12.6×</li>
              <li><b>Speed/Energy:</b> ~16.6×</li>
            </ul>
            <p class="subdued">
              Enables massive reductions in datacenter AI power and cost.
            </p>
          </div>
        </li>

        <li>
          <span class="icon">✓</span>
          <div>
            <strong>Implemented entirely with open-source tools (OpenLane, Yosys) and no architectural optimization.</strong>
            <p class="subdued">Meaning significant performance headroom remains with dedicated effort.</p>
          </div>
        </li>

        <li>
          <span class="icon">✓</span>
          <div>
            <strong>Design is radically simpler, accelerating the path from concept to silicon.</strong>
            <p class="subdued">Lower development costs, easier verification, and faster innovation cycles.</p>
          </div>
        </li>
      </ul>

      <p>
        These accomplishments point to a foundational shift in AI compute — impacting everything from chip design to data center infrastructure and beyond.
      </p>

      <p class="subdued">
        * Supporting documentation available upon request for qualified reviewers, collaborators, or investors.
      </p>
    `;
  }
}

customElements.define('ai-research', AiResearch);
