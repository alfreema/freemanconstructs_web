// callout-connector-view.js
import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { computeElbowConnectorPath } from './callout-connector-model.js';

export function renderConnector({ fromX, fromY, toX, toY, color = '#cccccc', width = 2 }) {
  const path = computeElbowConnectorPath({ fromX, fromY, toX, toY });

  return html`
    <svg
      style="position: absolute; top: 0; left: 0; pointer-events: none; overflow: visible;"
      width="100%"
      height="100%"
    >
      <path d="${path}"
            stroke="${color}"
            stroke-width="${width}"
            fill="none" />
    </svg>
  `;
}
