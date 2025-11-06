// Allow React/TSX to render custom web components without type errors
declare namespace JSX {
  interface IntrinsicElements {
    'site-header': any;
    'hero-section': any;
    'ai-section': any;
    'about-section': any;
    'bio-section': any;
    'contact-section': any;
    'diamond-component': any;
  }
}

export {};

