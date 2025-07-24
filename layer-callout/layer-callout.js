import { LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
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
    return renderCallout({
      title: this.title,
      text: this.text,
      styles
    });
  }

  createRenderRoot() {
    return this;
  }
});
