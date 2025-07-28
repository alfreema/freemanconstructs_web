// desktop-layout-model.js

/**
 * Normalizes raw layer data into a format safe for rendering.
 * Adds default properties like ID, color1/color2, label fallback, etc.
 * 
 * @param {Array<Object>} layers - Raw layer array
 * @returns {Array<Object>} Normalized layer array
 */
export function normalizeLayers(layers = []) {
  return layers.map((layer, index) => ({
    id: layer.id || `layer-${index}`,
    label: layer.label || `Layer ${index + 1}`,
    title: layer.title || '',
    body: layer.body || '',
    color1: layer.color1 || '#67b7ef',
    color2: layer.color2 || '#a1d5f4',
    side: index % 2 === 0 ? 'right' : 'left'
  }));
}

/**
 * Sample default data for preview/testing.
 */
export const defaultLayerData = [
  {
    id: 'inference',
    label: 'INFERENCE',
    title: 'Performance Boost',
    body: 'This layer represents the optimized execution path.',
    color1: '#d68fff',
    color2: '#c38dff'
  },
  {
    id: 'training',
    label: 'TRAINING',
    title: 'Deeper Insights',
    body: 'This layer improves generalization and representation.',
    color1: '#90ee90',
    color2: '#32cd32'
  },
  {
    id: 'fine-tuning',
    label: 'TUNING',
    title: 'Adaptation Layer',
    body: 'This stage customizes the model to the target domain.',
    color1: '#ffa07a',
    color2: '#ff7f50'
  }
];
