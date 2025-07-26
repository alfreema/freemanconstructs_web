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
        label: 'USER APP',
        title: 'User-Facing Application',
        body: 'Interacts with the model to deliver real-world utility.',
        color1: '#67b7ef',
        color2: '#a1d5f4',
        calloutBg: '#ffffff',
        calloutColor: '#333333'
      },
      {
        label: 'INFERENCE',
        title: 'Inference Engine',
        body: 'Processes tokens using trained weights.',
        color1: '#50c878',
        color2: '#98e2bc',
        calloutBg: '#ffffff',
        calloutColor: '#333333'
      },
      {
        label: 'TRAINING',
        title: 'Training Stack',
        body: 'Optimizes model weights based on loss.',
        color1: '#f78a1d',
        color2: '#f9ba7f',
        calloutBg: '#ffffff',
        calloutColor: '#333333'
      },
      {
        label: 'HARDWARE',
        title: 'Compute Infrastructure',
        body: 'Runs model training and inference workloads.',
        color1: '#a364d9',
        color2: '#cfa8f2',
        calloutBg: '#ffffff',
        calloutColor: '#333333'
      },
      {
        label: 'SILICON',
        title: 'Chips & Accelerators',
        body: 'Physical devices that perform matrix math efficiently.',
        color1: '#5a9bd4',
        color2: '#9ac6f2',
        calloutBg: '#ffffff',
        calloutColor: '#333333'
      },
      {
        label: 'THEORY',
        title: 'Mathematical Foundations',
        body: 'Linear algebra, gradient descent, and optimization theory.',
        color1: '#e94f4f',
        color2: '#f5a9a9',
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
