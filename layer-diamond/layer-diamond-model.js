export function computePoints(width) {
    const w = width;
    const h = 0.35 * w;
    const d = 0.18 * w;

    // Revised mid-depth line: drop less vertically
    const midD = h;
  
    const top = `${w / 2},0 ${w},${h / 2} ${w / 2},${h} 0,${h / 2}`;
    const left = `0,${h / 2} ${w / 2},${h} ${w / 2},${h + d} 0,${midD}`;
    const right = `${w},${h / 2} ${w / 2},${h} ${w / 2},${h + d} ${w},${midD}`;
    const angle = -Math.atan2(h / 2, w / 2) * (180 / Math.PI);
    console.log(angle);
  
    return {
      top,
      left,
      right,
      viewBox: `0 0 ${w} ${h + d}`,
      labelAngle: angle
    };
  }
  
  export function darken(hex, amt) {
    let col = hex.slice(1);
    const num = parseInt(col, 16);
    let r = Math.max(0, (num >> 16) - amt);
    let g = Math.max(0, ((num >> 8) & 0x00FF) - amt);
    let b = Math.max(0, (num & 0x0000FF) - amt);
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
  }
  