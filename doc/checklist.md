# ✅ To-Do Checklist for Modular Layered Architecture Visual System

## 🎨 **Visual Polish**

* [ ] Finalize `<layer-diamond>` SVG sizing to avoid vertical gaps and clipping
* [ ] Ensure diamond gradient color scales dynamically with `color1` and `color2`
* [ ] Align diamond labels vertically and horizontally within shape
* [ ] Apply consistent spacing and padding around diamonds and callouts
* [ ] Add hover effect to diamonds (e.g. border glow or opacity shift)
* [ ] Ensure connector lines (from `<callout-connector>`) anchor precisely to diamond edges

---

## 💎 **Component Enhancements: `layer-diamond` and `layer-callout`**

### ✅ **General Updates**

* ✅ Assign a unique `id` or `data-id` to each instance for connector targeting
* ✅ Add internal `div`s or `span`s that act as **anchor points** (e.g. `.anchor-left`, `.anchor-right`)
* ✅ Position anchor elements at consistent locations using CSS (e.g. center-left, center-right)

### 💠 **`<layer-diamond>` Specific**

* ✅ Add `.anchor-right` div positioned at the middle of the right edge
* ✅ Add `.anchor-left` div (optional, for symmetry or future use)
* ✅ Optionally expose a `.getAnchor(side)` method returning `{ x, y }` for requested anchor
* ✅ Ensure the anchors are always in the DOM and stable across re-renders
* ✅ Anchor elements should be absolutely positioned within the component if using internal layout logic

### 💬 **`<layer-callout>` Specific**

* ✅ Add `.anchor-left` and `.anchor-right` divs (one will be used depending on side)
* ✅ Position the appropriate anchor div based on the callout side (e.g. left-aligned callouts expose `.anchor-right`)
* ✅ Match vertical alignment to the connector target (e.g. center or \~20px from top)
* ✅ If callouts are responsive or auto-sizing, anchor divs must track padding/margin changes
* ✅ Optionally expose `.getAnchor(side)` or `.getBoundingClientRect()` helper for programmatic access

### 🧪 **Testing and Verification**

* ✅ Confirm each diamond and callout exposes usable anchor positions in the DOM
* ✅ Log anchor `getBoundingClientRect()` values to ensure consistency
* ✅ Confirm that `<callout-connector>` can draw a line correctly between anchors
* ✅ Resize the layout and verify that anchors update positions accordingly


---

## 🖥️ **Desktop Layout Enhancements (Refactor to Grid Layout)**

* ✅ Refactor `<desktop-layout>` to use CSS Grid instead of absolute positioning
* ✅ Define a 3-column grid in the layout container: `grid-template-columns: 1fr auto 1fr`
* ✅ Render one grid row per layer, with:
  * Left column: optional left callout
  * Center column: diamond
  * Right column: optional right callout
* ✅ Alternate callouts by index (even → right, odd → left)
* ✅ Align left callouts on their **right edge** using `justify-self: end`
* ✅ Align right callouts on their **left edge** using `justify-self: start`
* ✅ Remove `computeLayout()` and all hardcoded `x/y` layout logic
* ✅ Replace layout rendering with `layers.map(...)` over grid rows
* ✅ Update `<callout-connector>` to compute line endpoints using `getBoundingClientRect()`
* ✅ Assign stable `id` or `data-ref` to each diamond and callout for connector targeting
* ✅ Ensure connectors correctly anchor between components across grid cells
* [ ] Test with various layer counts (3, 6, 10) to ensure clean scaling
* [ ] Verify layout remains centered and well-balanced on desktop screens
* [ ] Ensure layout is scrollable if height exceeds viewport

---

## 📱 **Responsive Layout (Mobile / Tablet)**

* [ ] Create fallback mobile layout logic (stacked or simplified)
* [ ] In responsive mode, show **only the focused callout**, with no connectors
* [ ] Collapse or hide diamond labels if screen is narrow
* [ ] Trigger responsive layout with a `media query` or via JS width threshold
* [ ] Animate transitions between desktop and mobile modes

---

## 💬 **Callout Styling and Behavior**

* [ ] Refine typography and visual styling for callouts (`<layer-callout>`)
* [ ] Add support for multi-line body text with formatting (bold, bullets?)
* [ ] Add optional `icon` or `badge` support in callouts
* [ ] Add hover or click logic to **highlight connected diamond**
* [ ] Ensure callouts don't render off-screen on smaller viewports

---

## 🧭 **Scroll Interaction**

* [ ] Implement scroll wheel delta tracking in `<layer-stack>` or controller
* [ ] Add throttling or debounce logic for scroll-triggered focus shifts
* [ ] Sync scroll interactions to highlight focused `<layer-diamond>`
* [ ] Update callout visibility based on scroll-driven focus
* [ ] Optionally: Add arrow key support as an accessibility fallback

---

## 🧩 **Interactivity Hooks**

* [ ] Add `click`/`hover` listeners on `<layer-diamond>` to trigger focus
* [ ] Expose `selectLayer(index)` method in controller (e.g. `<desktop-layout>`)
* [ ] Fire custom events like `layer-selected`, `callout-toggled`, etc.
* [ ] Add ARIA roles and accessibility tags to interactive elements

---

## 🧪 **Testing, Cleanup, Deployment**

* [ ] Create minimal test harness (e.g. `test.html`) for standalone layout runs
* [ ] Validate all components in Chromium, Firefox, Safari
* [ ] Add dev/test toggles for bounding boxes / debug outlines
* [ ] Add light/dark mode toggle (optional)
* [ ] Minify and bundle components for deployment
* [ ] Add README with setup and usage instructions
