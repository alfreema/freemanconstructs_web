import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export function renderDesktopLayout(layoutData, focusIndex) {
    if (!layoutData || layoutData.length === 0) {
      return html`<p>No layout data available.</p>`;
    }
  
    return html`
      <div style="position: relative;">
        ${layoutData.map((item, i) => html`
          <layer-diamond
            .label=${item.diamond.label}
            .color1=${item.diamond.color1}
            .color2=${item.diamond.color2}
            .diamondWidth=${item.diamond.width}
            .focused=${i === focusIndex}
            style="position: absolute; top: ${item.diamond.y}px; left: ${item.diamond.x}px;"
          ></layer-diamond>
  
          <layer-callout
            .title=${item.callout.title}
            .text=${item.callout.text}
            .bgColor=${item.callout.color}
            .textColor=${item.callout.textColor}
            style="position: absolute; top: ${item.callout.y}px; left: ${item.callout.x}px;"
          ></layer-callout>
  
          <callout-connector
            .fromX=${item.connector.from.x}
            .fromY=${item.connector.from.y}
            .toX=${item.connector.to.x}
            .toY=${item.connector.to.y}
          ></callout-connector>
        `)}
      </div>
    `;
  }
  