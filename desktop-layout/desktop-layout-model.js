export function computeLayout(layers, startX = 500, startY = 100, verticalGap = 60) {
  if (!Array.isArray(layers)) {
    console.error('computeLayout expects an array of layers');
    return [];
  }

  const diamondWidth = 200;
  const leftCalloutRightEdge = 230;  // fixed column
  const rightCalloutOffsetX = 100;
  const calloutWidth = 180;
  const calloutYOffset = 40;
  const minLeftMargin = 20;

  const positions = [];

  layers.forEach((layer, index) => {
    const x = startX;
    const y = startY + index * verticalGap;

    const isEven = index % 2 === 0;

    const calloutX = isEven
    ? x + diamondWidth + rightCalloutOffsetX
    : leftCalloutRightEdge - calloutWidth;
  
    const calloutY = isEven ? y : y + calloutYOffset;

    const diamond = {
      ...layer,
      x,
      y,
      width: diamondWidth,
      zIndex: layers.length - index
    };

    const callout = {
      title: layer.title || '',
      text: layer.body || '',
      x: calloutX,
      y: calloutY,
      color: layer.calloutBg || '#ffffff',
      textColor: layer.calloutColor || '#000000',
      width: calloutWidth,
    };

    const connector = {
      from: {
        x: isEven ? x + diamondWidth : x,
        y: y + 20,
      },
      to: {
        x: isEven ? calloutX : calloutX + calloutWidth,
        y: calloutY + 20,
      },
    };

    positions.push({ diamond, callout, connector });
  });

  return positions.reverse(); // draw top-most layer last
}

export function darken(hex, amount = 20) {
  if (typeof hex !== 'string' || !hex.startsWith('#') || hex.length !== 7) return '#999999';
  hex = hex.slice(1); // strip the #
  const r = Math.max(0, parseInt(hex.slice(0, 2), 16) - amount);
  const g = Math.max(0, parseInt(hex.slice(2, 4), 16) - amount);
  const b = Math.max(0, parseInt(hex.slice(4, 6), 16) - amount);
  return `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}`;
}

export function lighten(hex, amount = 20) {
  if (typeof hex !== 'string' || !hex.startsWith('#') || hex.length !== 7) return '#cccccc';
  hex = hex.slice(1);
  const r = Math.min(255, parseInt(hex.slice(0, 2), 16) + amount);
  const g = Math.min(255, parseInt(hex.slice(2, 4), 16) + amount);
  const b = Math.min(255, parseInt(hex.slice(4, 6), 16) + amount);
  return `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}`;
}
