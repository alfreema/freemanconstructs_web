import { LitElement, html, css } from 'https://esm.sh/lit';

export class DiamondComponent extends LitElement {
  static properties = {
    scale: { type: Number, attribute: 'scale', reflect: true },
    size: { type: String, attribute: 'size', reflect: true },
    color1: { type: String, attribute: 'color-1' },
    color2: { type: String, attribute: 'color-2' },
    color3: { type: String, attribute: 'color-3' },
    color4: { type: String, attribute: 'color-4' },
    color5: { type: String, attribute: 'color-5' }
  };

  constructor() {
    super();
    console.log('DiamondComponent initialized');
    this.scale = 1;
    this.size = '200px'; // Default size
    this.color1 = null;
    this.color2 = null;
    this.color3 = null;
    this.color4 = '#2ba4cc';
    this.color5 = '#269cb7';
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('DiamondComponent connected to DOM');
  }

  firstUpdated() {
    super.firstUpdated();
    console.log('DiamondComponent first updated, shadowRoot:', this.shadowRoot);
  }

  static styles = css`
    :host {
      display: block;
      width: 200px; /* Fallback static width */
      height: auto;
    }
    svg {
      display: block;
      width: 100%;
      height: auto;
    }
  `;

  render() {
    console.log('Rendering DiamondComponent', this.scale, this.size, this.color1, this.color2, this.color3, this.color4, this.color5);
    return html`
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1000 1000"
        style="transform: scale(${this.scale || 1});"
      >
        <defs>
          <style>
            .st0 {
              fill-rule: evenodd;
              clip-rule: evenodd;
              fill: ${this.color1 ? this.color1 : 'url(#S1_1_)'};
            }
            .st1 {
              fill-rule: evenodd;
              clip-rule: evenodd;
              fill: ${this.color2 ? this.color2 : 'url(#S1_2_1_)'};
            }
            .st2 {
              fill-rule: evenodd;
              clip-rule: evenodd;
              fill: ${this.color3 ? this.color3 : this.color4};
            }
            .st3 {
              fill-rule: evenodd;
              clip-rule: evenodd;
              fill: ${this.color4};
            }
            .st4 {
              display: none;
            }
            .st5 {
              display: inline;
              opacity: 0.58;
              fill-rule: evenodd;
              clip-rule: evenodd;
              fill: ${this.color5 ? this.color5 : 'url(#SVGID_1_)'};
            }
          </style>
          <linearGradient
            id="S1_1_"
            gradientUnits="userSpaceOnUse"
            x1="323.2598"
            y1="2113.2878"
            x2="978.8402"
            y2="2110.498"
            gradientTransform="matrix(1 0 0 -1 0 2681)"
          >
            <stop offset="0.2667" style="stop-color: #2badd7" />
            <stop offset="0.2745" style="stop-color: #2fb6e2" />
            <stop offset="0.6275" style="stop-color: #39c4e8" />
            <stop offset="0.8118" style="stop-color: #5fc9db" />
            <stop offset="0.8784" style="stop-color: #60c9db" />
            <stop offset="1" style="stop-color: #36c0e4" />
          </linearGradient>
          <linearGradient
            id="S1_2_1_"
            gradientUnits="userSpaceOnUse"
            x1="-4060.0984"
            y1="-253.4517"
            x2="-4059.436"
            y2="-253.418"
            gradientTransform="matrix(728.283 0 0 272.535 2957189.75 69466.0547)"
          >
            <stop offset="0" style="stop-color: #5bcae9" />
            <stop offset="1" style="stop-color: #76cfe7" />
          </linearGradient>
          <radialGradient
            id="SVGID_1_"
            cx="-241.7971"
            cy="4411.0283"
            r="185.0597"
            gradientTransform="matrix(1.393 0 0 -0.2185 837.8581 1717.9637)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.02814647" style="stop-color: #010101; stop-opacity: 0.4" />
            <stop offset="1" style="stop-color: #010101; stop-opacity: 0" />
          </radialGradient>
        </defs>
        <g id="Layer_2_1_">
          <path
            id="S1_5_"
            class="st0"
            d="M991.4,400.2c-0.2,0-984.4-5.3-984.6-5.3l4.5,168.6L499.1,740c0,0,489.5-179.9,489.7-179.9L991.4,400.2z"
          />
          <path
            id="S1_2_4_"
            class="st1"
            d="M501.2,211.4L6.8,394.8l495.6,185L991.2,400C991.2,400.2,501.2,211.4,501.2,211.4z"
          />
          <path
            id="S1_2_2_4_"
            class="st2"
            d="M500,320.8l-202.3,69.5l204.7,79.4l203.5-75.6C705.9,393.9,500,320.8,500,320.8z"
          />
          <path
            id="S2_4_"
            class="st3"
            d="M497.7,321.6c0,40.2,0,80.4,0,120.4c0,8.7,0,17.1,0,25.8c1.6,0.6,3.2,1.2,4.9,2c68-25.2,135.5-50.4,203.5-75.6c-68.4-24.6-137.3-49.1-205.9-73.3C499.3,321,498.5,321.4,497.7,321.6z"
          />
        </g>
        <g id="Layer_2" class="st4">
          <ellipse class="st5" cx="501" cy="754.4" rx="332.9" ry="45.1" />
        </g>
      </svg>
    `;
  }
}

console.log('Defining diamond-component');
customElements.define('diamond-component', DiamondComponent);