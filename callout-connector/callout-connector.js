import { LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { renderConnector } from './callout-connector-view.js';

customElements.define('callout-connector', class CalloutConnector extends LitElement {
  static properties = {
    fromId: { type: String },
    toId: { type: String },
    fromAnchor: { type: String },
    toAnchor: { type: String },
    color: { type: String },
    width: { type: Number },
    fromX: { type: Number },
    fromY: { type: Number },
    toX: { type: Number },
    toY: { type: Number }
  };

  constructor() {
    super();
    this.fromAnchor = 'right';
    this.toAnchor = 'left';
    this.color = '#cccccc';
    this.width = 2;
    this.fromX = 0;
    this.fromY = 0;
    this.toX = 0;
    this.toY = 0;
    this.updateConnectorBound = () => this.updateConnector();
  }

  connectedCallback() {
    super.connectedCallback();
    this.scheduleConnectorUpdate();

    window.addEventListener('resize', this.updateConnectorBound);

    // Observe DOM position changes (optional, useful for animating/mutating callouts)
    this.resizeObserver = new ResizeObserver(this.updateConnectorBound);
    const fromEl = document.getElementById(this.fromId);
    const toEl = document.getElementById(this.toId);
    if (fromEl) this.resizeObserver.observe(fromEl);
    if (toEl) this.resizeObserver.observe(toEl);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.updateConnectorBound);
    if (this.resizeObserver) this.resizeObserver.disconnect();
  }

  scheduleConnectorUpdate() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.updateConnector();
      });
    });
  }

  updateConnector() {
    const fromEl = document.getElementById(this.fromId);
    const toEl = document.getElementById(this.toId);
    const container = this.offsetParent;

    if (
      !fromEl || !toEl ||
      typeof fromEl.getAnchor !== 'function' ||
      typeof toEl.getAnchor !== 'function' ||
      !container
    ) return;

    const from = fromEl.getAnchor(this.fromAnchor);
    const to = toEl.getAnchor(this.toAnchor);

    if (!from || !to) return;

    const containerRect = container.getBoundingClientRect();

    this.fromX = from.x - containerRect.left;
    this.fromY = from.y - containerRect.top;
    this.toX = to.x - containerRect.left;
    this.toY = to.y - containerRect.top;

    this.requestUpdate();
  }

  render() {
    return renderConnector({
      fromX: this.fromX,
      fromY: this.fromY,
      toX: this.toX,
      toY: this.toY,
      color: this.color,
      width: this.width
    });
  }

  createRenderRoot() {
    return this; // Use light DOM for SVG positioning ease
  }
});
