import { LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { computePoints, darken } from './layer-diamond-model.js';
import { renderDiamond } from './layer-diamond-view.js';

customElements.define('layer-diamond', class LayerDiamond extends LitElement {
  static properties = {
    diamondWidth: { type: Number },
    color1: { type: String },
    color2: { type: String },
    label: { type: String },
    zIndex: { type: Number }
  };

  constructor() {
    super();
    this.diamondWidth = 200;
    this.color1 = '#67b7ef';
    this.color2 = '#a1d5f4';
    this.label = '';
    this.zIndex = 1;
  }

  render() {
    const width = this.diamondWidth;
    const { top, left, right, viewBox, labelAngle } = computePoints(width);
  
    const colors = {
      topStart: this.color1,
      topEnd: this.color2,
      left: darken(this.color1, 40),
      right: darken(this.color2, 40)
    };
  
    return renderDiamond({
      width,
      viewBox,
      points: { top, left, right },
      colors,
      label: this.label,
      labelAngle   // <-- Pass it here!
    });
  }
  

  createRenderRoot() {
    return this;
  }
});
