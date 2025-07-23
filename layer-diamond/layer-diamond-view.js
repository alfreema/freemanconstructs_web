import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export function renderDiamond({ points, colors, viewBox, width, label, labelAngle }) {
  return html`
    <svg
      width="${width}"
      height="${viewBox.split(' ')[3]}"
      viewBox="${viewBox}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Left Face -->
      <polygon points="${points.left}" fill="${colors.left}" />

      <!-- Right Face -->
      <polygon points="${points.right}" fill="${colors.right}" />

      <!-- Top Face -->
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colors.topStart}" />
          <stop offset="100%" stop-color="${colors.topEnd}" />
        </linearGradient>
      </defs>
      <polygon points="${points.top}" fill="url(#grad)" />

      <!-- Label -->
      <text
        x="${width / 2 + 10}"
        y="90"
        fill="white"
        font-size="16"
        font-family="sans-serif"
        text-anchor="start"
        dominant-baseline="middle"
        transform="rotate(${labelAngle} ${width / 2} 90)"
      >
        ${label}
      </text>
    </svg>
  `;
}
