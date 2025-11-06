"use client";
import Script from "next/script";

export default function Home() {
  return (
    <main className="text-gray-800 bg-white min-h-screen">
      {/* Custom elements rendered from original static site */}
      {/* Header + Sections */}
      <site-header></site-header>
      <div id="home">
        <hero-section></hero-section>
      </div>

      <div id="ai">
        <ai-section></ai-section>
      </div>

      <div id="about">
        <about-section></about-section>
      </div>

      <div id="bio">
        <bio-section></bio-section>
      </div>

      <div id="contact">
        <contact-section></contact-section>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-gray-100">
        <p>&copy; 2025 Freeman Constructs.</p>
      </footer>

      {/* Load AOS JS and initialize */}
      <Script
        id="aos-lib"
        src="https://unpkg.com/aos@next/dist/aos.js"
        strategy="afterInteractive"
      />
      <Script id="aos-init" strategy="afterInteractive">{`
        if (window.AOS && typeof window.AOS.init === 'function') { window.AOS.init(); }
      `}</Script>

      {/* Load custom elements modules from public/ */}
      <Script id="wc-site-header" src="/sections/site-header.js" strategy="afterInteractive" type="module" />
      <Script id="wc-hero-section" src="/sections/hero-section.js" strategy="afterInteractive" type="module" />
      <Script id="wc-ai-section" src="/sections/ai-section.js" strategy="afterInteractive" type="module" />
      <Script id="wc-about-section" src="/sections/about-section.js" strategy="afterInteractive" type="module" />
      <Script id="wc-bio-section" src="/sections/bio-section.js" strategy="afterInteractive" type="module" />
      <Script id="wc-contact-section" src="/sections/contact-section.js" strategy="afterInteractive" type="module" />
    </main>
  );
}
