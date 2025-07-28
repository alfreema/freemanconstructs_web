import { LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { render as litRender } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
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
    this.resizeObserver = new ResizeObserver(this.updateConnectorBound); // ✅ Move this to top
    setTimeout(() => this.scheduleConnectorUpdate(), 50);
    this.retryUntilResolved();
  
    window.addEventListener('resize', this.updateConnectorBound);
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.updateConnectorBound);
    if (this.resizeObserver) this.resizeObserver.disconnect();
  }

  retryUntilResolved(retries = 10) {
    const fromEl = document.getElementById(this.fromId);
    const toEl = document.getElementById(this.toId);

    if (
      fromEl && toEl &&
      typeof fromEl.getAnchor === 'function' &&
      typeof toEl.getAnchor === 'function'
    ) {
      this.resizeObserver.observe(fromEl);
      this.resizeObserver.observe(toEl);
      this.updateConnector();
    } else if (retries > 0) {
      setTimeout(() => this.retryUntilResolved(retries - 1), 100);
    } else {
      console.warn(`Connector failed to resolve elements: ${this.fromId} → ${this.toId}`);
    }
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

    if (
      !fromEl || !toEl ||
      typeof fromEl.getAnchor !== 'function' ||
      typeof toEl.getAnchor !== 'function'
    ) return;

    // ✅ Use Lit properties here (not attributes)
    const fromAnchor = this.fromAnchor || 'right';
    const toAnchor   = this.toAnchor || 'left';

    const from = fromEl.getAnchor(fromAnchor);
    const to = toEl.getAnchor(toAnchor);

    if (!from || !to) return;

    const containerRect = this.getBoundingClientRect();

    this.fromX = from.x - containerRect.left;
    this.fromY = from.y - containerRect.top;
    this.toX = to.x - containerRect.left;
    this.toY = to.y - containerRect.top;

    this.requestUpdate();
    litRender(this.render(), this);
  }

  willUpdate(changedProps) {
    if (
      changedProps.has('fromId') ||
      changedProps.has('toId') ||
      changedProps.has('fromAnchor') ||
      changedProps.has('toAnchor')
    ) {
      this.scheduleConnectorUpdate();
    }
  }

  createRenderRoot() {
    return this; // Use light DOM so anchors remain visible
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
});
