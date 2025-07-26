// callout-connector-model.js

/**
 * Computes an elbow connector path from a diamond anchor point to a callout.
 * @param {Object} options
 * @param {number} options.fromX - Starting x (usually center of diamond side).
 * @param {number} options.fromY - Starting y.
 * @param {number} options.toX - Ending x (usually side of callout).
 * @param {number} options.toY - Ending y.
 * @returns {string} SVG path string.
 */
export function computeElbowConnectorPath({ fromX, fromY, toX, toY }) {
    const midX = (fromX + toX) / 2;
  
    return `M ${fromX},${fromY}
            L ${midX},${fromY}
            L ${midX},${toY}
            L ${toX},${toY}`;
  }
  