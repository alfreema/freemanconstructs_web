/// <reference path="../types/custom-elements.d.ts" />
"use client";
import * as React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Custom elements rendered from original static site */}
      {/* Header + Sections */}
      {React.createElement('site-header')}
      <div id="home">
        {React.createElement('hero-section')}
      </div>

      <div id="ai">
        {React.createElement('ai-section')}
      </div>

      <div id="about">
        {React.createElement('about-section')}
      </div>

      <div id="bio">
        {React.createElement('bio-section')}
      </div>

      <div id="contact">
        {React.createElement('contact-section')}
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-accent text-muted-foreground border-t">
        <p>&copy; 2025 Freeman Constructs.</p>
      </footer>

      {/* Load AOS JS and init */}
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script dangerouslySetInnerHTML={{ __html: "window.AOS&&window.AOS.init&&window.AOS.init();" }} />

      {/* Load custom elements modules from public/ */}
      <script src="/sections/site-header.js" type="module"></script>
      <script src="/sections/hero-section.js" type="module"></script>
      <script src="/sections/ai-section.js" type="module"></script>
      <script src="/sections/about-section.js" type="module"></script>
      <script src="/sections/bio-section.js" type="module"></script>
      <script src="/sections/contact-section.js" type="module"></script>
    </main>
  );
}
