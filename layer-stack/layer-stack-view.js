import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export function renderStack(layers, focusIndex) {
    const total = layers.length;
  
    return html`
      <div style="position: relative; height: 600px;">
        ${layers.map((layer, i) => {
          const offset = i * 50;
          const zIndex = total - i;
          const isFocused = i === focusIndex;
  
          return html`
            <layer-diamond
              style="position: absolute; top: ${offset}px; left: 0; z-index: ${zIndex};"
              .diamondWidth=${layer.diamondWidth}
              .color1=${layer.color1}
              .color2=${layer.color2}
              .label=${layer.label}
              .focused=${isFocused}
            ></layer-diamond>
          `;
        })}
      </div>
    `;
  }
  
