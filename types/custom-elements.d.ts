// Global JSX augmentation for custom web components used in the app
declare namespace JSX {
  interface IntrinsicElements {
    'site-header': any;
    'hero-section': any;
    'ai-section': any;
    'about-section': any;
    'bio-section': any;
    'contact-section': any;
    'diamond-component': any;
    // Allow any other custom element tags without TS errors
    [elemName: string]: any;
  }
}
