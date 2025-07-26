import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { computePoints, darken } from './layer-diamond-model.js';
import { renderDiamond } from './layer-diamond-view.js';

customElements.define('layer-diamond', class LayerDiamond extends LitElement {
  static properties = {
    diamondId: { type: String },
    diamondWidth: { type: Number },
    color1: { type: String },
    color2: { type: String },
    label: { type: String },
    zIndex: { type: Number },
    focused: { type: Boolean }
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
    const svgHeight = parseInt(viewBox.split(' ')[3]);

    const colors = {
      topStart: this.color1,
      topEnd: this.color2,
      left: darken(this.color1, 40),
      right: darken(this.color2, 40)
    };

    return html`
      <div
        id="${this.diamondId}"
        data-id="${this.diamondId}"
        class="diamond-wrapper"
        style="
          position: relative;
          width: ${width}px;
          height: ${svgHeight}px;
          z-index: ${this.zIndex};
          background: rgba(0,255,0,0.1); /* debug wrapper */
        "
      >
        <!-- Hardcoded anchor boxes -->
        <div class="anchor-left" style="
          position: absolute;
          width: 10px;
          height: 10px;
          background: red;
          left: -25px;
          top: ${svgHeight / 2 - 5}px;
        "></div>

        <div class="anchor-right" style="
          position: absolute;
          width: 10px;
          height: 10px;
          background: red;
          right: -20px;
          top: ${svgHeight / 2 - 5}px;
        "></div>

        ${renderDiamond({
          width,
          viewBox,
          points: { top, left, right },
          colors,
          label: this.label,
          labelAngle,
          focused: this.focused
        })}
      </div>
    `;
  }

  getAnchor(side = 'right') {
    const selector = `.anchor-${side}`;
    const el = this.querySelector(selector);
    if (!el) return null;

    const rect = el.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }

  createRenderRoot() {
    return this;
  }
});
