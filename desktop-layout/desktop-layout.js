import { LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { renderDesktopLayout } from './desktop-layout-view.js';
import { computeLayout } from './desktop-layout-model.js';

customElements.define('desktop-layout', class DesktopLayout extends LitElement {
  static properties = {
    layers: { type: Array },
    focusIndex: { type: Number }
  };

  constructor() {
    super();
    this.focusIndex = 0;

    // Example default layer data
    this.layers = [
      {
        label: 'Layer 1',
        title: 'Input Layer',
        body: 'Takes raw data from user or system.',
        color1: '#67b7ef',
        color2: '#a1d5f4',
        calloutBg: '#ffffff',
        calloutColor: '#333333'
      },
      {
        label: 'Layer 2',
        title: 'Processing Layer',
        body: 'Performs computations and logic.',
        color1: '#50c878',
        color2: '#98e2bc',
        calloutBg: '#ffffff',
        calloutColor: '#333333'
      },
      {
        label: 'Layer 3',
        title: 'Output Layer',
        body: 'Presents processed results to the user.',
        color1: '#f78a1d',
        color2: '#f9ba7f',
        calloutBg: '#ffffff',
        calloutColor: '#333333'
      }
    ];
  }

  render() {
    const layoutData = computeLayout(this.layers);
    return renderDesktopLayout(layoutData, this.focusIndex);
  }

  createRenderRoot() {
    return this; // Don't use shadow DOM
  }
});
