// callout-connector.js
import { LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { renderConnector } from './callout-connector-view.js';

customElements.define('callout-connector', class CalloutConnector extends LitElement {
  static properties = {
    fromX: { type: Number },
    fromY: { type: Number },
    toX: { type: Number },
    toY: { type: Number },
    color: { type: String },
    width: { type: Number }
  };

  constructor() {
    super();
    this.fromX = 0;
    this.fromY = 0;
    this.toX = 0;
    this.toY = 0;
    this.color = '#cccccc';
    this.width = 2;
  }

  render() {
    return renderConnector({
      fromX: this.fromX,
      fromY: this.fromY,
      toX: this.toX,
      toY: this.toY,
      color: this.color,
      width: this.width
    });
  }

  createRenderRoot() {
    return this; // Render in light DOM to allow easier positioning
  }
});
