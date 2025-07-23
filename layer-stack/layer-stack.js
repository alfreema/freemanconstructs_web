import { LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { renderStack } from './layer-stack-view.js';

customElements.define('layer-stack', class LayerStack extends LitElement {
  static properties = {
    layers: { type: Array }
  };

  constructor() {
    super();
    this.layers = [
        { label: 'Layer 1', color1: '#67b7ef', color2: '#a1d5f4' },
        { label: 'Layer 2', color1: '#67b7ef', color2: '#a1d5f4' },
        { label: 'Layer 3', color1: '#67b7ef', color2: '#a1d5f4' },
        { label: 'Layer 4', color1: '#67b7ef', color2: '#a1d5f4' }
      ];
  }

  render() {
    return renderStack(this.layers);
  }

  createRenderRoot() {
    return this;
  }
});
