// desktop-layout.js
import { LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { normalizeLayers } from './desktop-layout-model.js';
import { renderDesktopLayout } from './desktop-layout-view.js';

customElements.define('desktop-layout', class DesktopLayout extends LitElement {
  static properties = {
    layers: { type: Array }
  };

  constructor() {
    super();
    this.layers = [];
  }

  render() {
    const normalized = normalizeLayers(this.layers);
    return renderDesktopLayout({ layers: normalized });
  }

  createRenderRoot() {
    return this; // render into light DOM for connectors to overlay
  }
});
