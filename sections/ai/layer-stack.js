import { LitElement, html, css } from 'https://esm.sh/lit';

export class LayerStack extends LitElement {
  static properties = {
    layers: { type: Array }
  };

  constructor() {
    super();
    this.layers = [
      {
        title: 'Transformer Model',
        description: 'Standard attention-based architecture.',
        icon: html`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M9 9h6v6H9z"/></svg>`
      },
      {
        title: 'Custom Encoding',
        description: 'All tensors encoded with compact integer format.',
        icon: html`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 3v18M16 3v18"/></svg>`
      },
      {
        title: 'Integer Ops',
        description: 'Matmul, Softmax, Optimizer — all pure integer math.',
        icon: html`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`
      },
      {
        title: 'Synthesized RTL',
        description: 'Custom OPs and logic mapped to silicon.',
        icon: html`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18"/></svg>`
      },
      {
        title: 'Chip Ready',
        description: 'Final IP ready for licensing or tapeout.',
        icon: html`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 4v-2M16 4v-2M8 20v2M16 20v2M4 8H2M4 16H2M22 8h-2M22 16h-2"/></svg>`
      }
    ];
  }

  static styles = css`
    :host {
      display: block;
      max-width: 640px;
      margin: 0 auto;
    }

    .stack {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      position: relative;
    }

    .layer {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: #f9fafb;
      border: 1px solid #f9a8d4;
      padding: 1.25rem 1.5rem;
      border-radius: 0.75rem;
      text-align: left;
      transition: transform 0.2s ease;
    }

    .layer:hover {
      transform: translateY(-1px);
    }

    .icon {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
    }

    .text {
      flex-grow: 1;
    }

    .title {
      font-weight: 700;
      font-size: 1rem;
      color: #1f2937;
      margin-bottom: 0.25rem;
    }

    .desc {
      font-size: 0.875rem;
      color: #4b5563;
    }

    .footer {
      text-align: center;
      font-size: 0.85rem;
      color: #6b7280;
      margin-top: 1.5rem;
    }
  `;

  render() {
    return html`
      <div class="stack">
        ${this.layers.map(
          (layer) => html`
            <div class="layer">
              <div class="icon">${layer.icon}</div>
              <div class="text">
                <div class="title">${layer.title}</div>
                <div class="desc">${layer.description}</div>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define('layer-stack', LayerStack);
