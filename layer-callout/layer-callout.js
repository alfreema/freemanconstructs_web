import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { getCalloutStyles } from './layer-callout-model.js';
import { renderCallout } from './layer-callout-view.js';

customElements.define('layer-callout', class LayerCallout extends LitElement {
  static properties = {
    title: { type: String },
    text: { type: String },
    backgroundColor: { type: String },
    borderColor: { type: String }
  };

  constructor() {
    super();
    this.title = '';
    this.text = '';
    this.backgroundColor = '#ffffcc';
    this.borderColor = '#333333';
  }

  render() {
    const styles = getCalloutStyles(this.backgroundColor, this.borderColor);

    return html`
      <div
        class="callout-wrapper"
        data-id="${this.title?.toLowerCase().replace(/\s+/g, '-') || ''}"
        style="
          ${styles.wrapper}
          position: relative;
        "
      >
        <!-- Visual anchor markers -->
        <div class="anchor-left" style="
          position: absolute;
          width: 10px;
          height: 10px;
          background: red;
          left: -25px;
          top: 50%;
          transform: translateY(-50%);
        "></div>

        <div class="anchor-right" style="
          position: absolute;
          width: 10px;
          height: 10px;
          background: red;
          right: -25px;
          top: 50%;
          transform: translateY(-50%);
        "></div>

        ${renderCallout({
          title: this.title,
          text: this.text,
          styles
        })}
      </div>
    `;
  }

  getAnchor(side) {
    const selector = `.anchor-${side}`;
    const el = this.shadowRoot?.querySelector(selector) || this.querySelector(selector);
    if (el) {
      const rect = el.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    }
    return null;
  }

  createRenderRoot() {
    return this;
  }
});
