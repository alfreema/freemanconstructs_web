import { LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { renderStack } from './layer-stack-view.js';

customElements.define('layer-stack', class LayerStack extends LitElement {
  static properties = {
    layers: { type: Array },
    focusIndex: { type: Number }
  };

  constructor() {
    super();
    this.layers = [
      { label: 'Layer 1', color1: '#67b7ef', color2: '#a1d5f4' },
      { label: 'Layer 2', color1: '#67b7ef', color2: '#a1d5f4' },
      { label: 'Layer 3', color1: '#67b7ef', color2: '#a1d5f4' },
      { label: 'Layer 4', color1: '#67b7ef', color2: '#a1d5f4' }
    ];
    this.focusIndex = 0;
    this._lastScrollTime = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('wheel', this._onScroll.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('wheel', this._onScroll.bind(this));
    super.disconnectedCallback();
  }

  _onScroll(e) {
    const now = Date.now();
    if (now - this._lastScrollTime < 200) return; // Throttle
    this._lastScrollTime = now;
  
    const delta = e.deltaY;
    const prevIndex = this.focusIndex;
  
    if (delta > 0 && this.focusIndex < this.layers.length - 1) {
      this.focusIndex++;
    } else if (delta < 0 && this.focusIndex > 0) {
      this.focusIndex--;
    }
  
    if (this.focusIndex !== prevIndex) {
      console.log(`Focus changed to layer ${this.focusIndex}: ${this.layers[this.focusIndex].label}`);
    }
  }
  

  render() {
    return renderStack(this.layers, this.focusIndex);
  }

  createRenderRoot() {
    return this;
  }
});
