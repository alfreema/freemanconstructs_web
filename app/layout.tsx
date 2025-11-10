import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Freeman Constructs",
  description: "Freeman Constructs — AI, engineering, and venture exploration.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

// Local Inter font to avoid network fetch during build
const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  preload: true,
  src: [
    { path: "./fonts/inter/InterVariable.woff2", style: "normal", weight: "100 900" },
    { path: "./fonts/inter/InterVariable-Italic.woff2", style: "italic", weight: "100 900" },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Fonts are loaded via next/font (Inter) */}
        {/* AOS styles for scroll animations used by sections */}
        <link
          href="https://unpkg.com/aos@next/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
        suppressHydrationWarning
      >
        {children}
        {/* Viewport height fix used in original index.html */}
        <Script id="vh-fix" strategy="afterInteractive">{`
          (function(){
            function setRealVh(){
              const vh = window.innerHeight * 0.01;
              document.documentElement.style.setProperty('--vh', vh + 'px');
            }
            window.addEventListener('resize', setRealVh);
            window.addEventListener('load', setRealVh);
            setRealVh();
          })();
        `}</Script>
        {/* Optional external icon script removed to satisfy TS types */}
      </body>
    </html>
  );
}
