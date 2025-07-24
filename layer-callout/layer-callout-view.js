import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export function renderCallout({ title, text, backgroundColor = '#e6f7fb', borderColor = '#a0d8ef' }) {
  return html`
    <div style="
      background-color: ${backgroundColor};
      border: 1px solid ${borderColor};
      border-radius: 10px;
      padding: 20px;
      max-width: 360px;
      font-family: 'Segoe UI', sans-serif;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    ">
      <div style="font-size: 20px; font-weight: 700; margin-bottom: 10px; color: #336699;">
        ${title}
      </div>
      <div style="font-size: 14px; color: #4a4a4a;">
        ${text}
      </div>
    </div>
  `;
}
