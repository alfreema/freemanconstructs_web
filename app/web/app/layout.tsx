import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
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

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
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
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
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
        {/* Optional: Lucide icons for contact section */}
        <Script
          id="lucide-umd"
          src="https://unpkg.com/lucide@1.80.0/dist/umd/lucide.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
