// desktop-layout-view.js
import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export function renderDesktopLayout({ layers }) {
  return html`
    <style>
      .layout-container {
        position: relative;
      }

      .grid-layout {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        column-gap: 80px;
        row-gap: 80px;
        align-items: center;
        position: relative;
        z-index: 1;
      }

      .layer-row {
        display: contents;
      }

      .left-callout {
        justify-self: end;
      }

      .right-callout {
        justify-self: start;
      }

      .diamond-cell {
        display: flex;
        justify-content: center;
      }

      .connectors-layer {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 0;
      }

      callout-connector {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    </style>

    <div class="layout-container">
      <div class="grid-layout">
        ${layers.map((layer, index) => {
          const isLeft = index % 2 !== 0;
          const calloutId = `callout-${index}`;
          const diamondId = `diamond-${index}`;

          return html`
            <div class="layer-row">
              <div class="left-callout">
                ${isLeft ? html`
                  <layer-callout
                    id=${calloutId}
                    title=${layer.title}
                    text=${layer.body}
                    side="left"
                  ></layer-callout>
                ` : ''}
              </div>
              <div class="diamond-cell">
                <layer-diamond
                  id=${diamondId}
                  diamondId=${layer.id || `layer-${index}`}
                  label=${layer.label}
                  color1=${layer.color1}
                  color2=${layer.color2}
                ></layer-diamond>
              </div>
              <div class="right-callout">
                ${!isLeft ? html`
                  <layer-callout
                    id=${calloutId}
                    title=${layer.title}
                    text=${layer.body}
                    side="right"
                  ></layer-callout>
                ` : ''}
              </div>
            </div>
          `;
        })}
      </div>

      <div class="connectors-layer">
        ${layers.map((layer, index) => {
          const isLeft = index % 2 !== 0;

          const fromId = isLeft ? `callout-${index}` : `diamond-${index}`;
          const toId   = isLeft ? `diamond-${index}` : `callout-${index}`;
          const fromAnchor = 'right';
          const toAnchor   = 'left';
          
          return html`
            <callout-connector
              fromId=${fromId}
              toId=${toId}
              fromAnchor=${fromAnchor}
              toAnchor=${toAnchor}
              color="#00bcd4"
              width="2"
            ></callout-connector>
          `;
        })}
      </div>
    </div>
  `;
}
