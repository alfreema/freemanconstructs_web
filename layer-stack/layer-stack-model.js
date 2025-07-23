export function computeStackLayout(count, spacing = 10, baseY = 0) {
    return Array.from({ length: count }, (_, i) => ({
      yOffset: baseY + i * spacing,
      zIndex: i,
    }));
  }
  