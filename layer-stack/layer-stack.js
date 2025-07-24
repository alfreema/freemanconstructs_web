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
      { label: 'STEP 01', color1: '#cc80ff', color2: '#d08dff', diamondWidth: 140 },
      { label: 'STEP 02', color1: '#b08dff', color2: '#b3a0ff', diamondWidth: 155 },
      { label: 'STEP 03', color1: '#9db8ff', color2: '#97c1ff', diamondWidth: 170 },
      { label: 'STEP 04', color1: '#82d7ff', color2: '#77e2ff', diamondWidth: 185 },
      { label: 'STEP 05', color1: '#6ef1ff', color2: '#67faff', diamondWidth: 200 },
      { label: 'STEP 06', color1: '#4dfbfb', color2: '#36f9f9', diamondWidth: 215 }
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