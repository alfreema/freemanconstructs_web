import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export function renderStack(layers) {
  const total = layers.length;

  return html`
    <div style="position: relative; height: 300px;">
      ${layers.map((layer, i) => {
        const offset = i * 50;                 // vertical spacing between layers
        const zIndex = total - i;              // higher zIndex for upper layers
        return html`
          <layer-diamond
            style="position: absolute; top: ${offset}px; left: 0; z-index: ${zIndex};"
            .diamondWidth=${200}
            .color1=${layer.color1}
            .color2=${layer.color2}
            .label=${layer.label}
          ></layer-diamond>
        `;
      })}
    </div>
  `;
}
