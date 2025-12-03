/// <reference path="../../types/custom-elements.d.ts" />
"use client";
import * as React from "react";

type TimelineEntry = {
  week: string;
  highlight: React.ReactNode;
  details?: string[];
  expenses?: string[];
  balance?: string;
  media?: React.ReactNode;
};

const entries: TimelineEntry[] = [
  {
    week: "Week of Nov 3",
    highlight:
      "Incorporated Freeman Constructs; banking setup underway; RTL work on systolic array; obtained logo.",
    details: [
      "Incorporated Freeman Constructs, Inc.",
      "Opened checking account (check is being held until Nov 20)",
      "RTL development on systolic array",
      "Obtained logo",
    ],
    expenses: [],
    balance: "$14,500",
    media: (
      <img
        src="/freeman_constructs.svg"
        alt="Freeman Constructs logo"
        className="h-12 w-auto"
      />
    ),
  },
  {
    week: "Week of Nov 10",
    highlight:
      "Brought up Alveo U30 (healthy diags); compiled RTL to .xo but blocked by missing platform package for .xclbin.",
    details: [
      "Begin research if Alveo U30 FPGA card I bought works and is actually programmable.",
      "Enabled bifurcation on motherboard, created bootable Ubuntu USB Drive, installed Xilinx/AMD toolset for Alveo U30 and was able to bring it up and diags show it's healthy.",
      "Wrote hello_world RTL and was able to compile into .xo, but unable to compile to xclbin that I can install on FPGA.",
      "U30 Platform Package is required to compile xclbin and that package was never made publicly available so that's a hard stop on using this card. Unless ...",
      "Is it possible to reverse-engineer the Alveo U30 and hack together the first open source platform package for that device.  It would make a high quality FPGA that is affordable actually useful.",
    ],
    expenses: [],
    balance: "$14,500",
  },
  {
    week: "Week of Nov 17",
    highlight:
      "Continue reverse-engineering Alveo U30 to build an open-source Platform Package; potential $3.5k+ savings if successful.",
    details: [
      "Continue deep-dive into creating a replacement Platform Package for U30.",
      "Intent to open source the results if successful.",
      "Used U30 pricing: ~$100–$200; success would avoid ~$3,500+ on a new supported card (plus possibly a few thousand in tooling).",
      "Allocate ~1 week to explore.",
      "An unintended but happy consequence of hacking the U30 Alveo is I am getting more familiar with Vivado.",
      "Hard stop on U30 - reverse engineering not feasible in reasonable time.  Investigate U50/U200/U250.",
      "U50 looks 'okay' as AI says I may be able to squeeze a 32x32 systolic array onto it, but I'm skeptical. For not a lot more money a U200/U250 might make a bunch more sense. Starting to build the simulations in Vivado to sort it out.",
      "Attended grantee introduction event and met some great project founders and mentors!",
      "2025-11-21 – Just had an exciting result!  I was able to sythesize/implement the BF16 baseline and Q16A proprietary encodings on Vivado.  Only ran 2x2 array for quick comparison but got:  \"Both Q16A flows are dramatically better than BF16 on performance and logic area: ≈2.6–3.5× Fmax and ≈3×–3.5× smaller LUT+10*DSP, with essentially identical or slightly better total on‑chip power (~1% lower). The enhanced Q16A design is the strongest across all three dimensions: highest Fmax (~3.5× BF16), best logic area (~3.45×), and the lowest power, yielding an overall PPA gain of about 2.3× vs BF16. Based purely on these numbers, I’d use the enhanced Q16A configuration as the headline comparison against BF16, with the baseline Q16A as a slightly more conservative but still ~2× PPA improvement point.\"",
    ],
    expenses: [],
    balance: "$14,500",
  },
  {
    week: "Week of Dec 1",
    highlight:
      "Compiled new Nangate45 ASIC results, and holy smokes are they awesome!",
    details: [
      "Have stunning results for 4x4, 8x8, 12x12 systolic arrays.",
      "Also have 14x14 and 16x16 results but OpenROAD is struggling with my workstation limits (64GB RAM, Intel i7-10700K).",
      "Created Defense Bible draft.",
      "Created One Pager.",
      "Created new website home page.",
    ],
    expenses: [],
    balance: "$14,500",
  },
];

export default function KansasPage() {
  const [open, setOpen] = React.useState<Record<number, boolean>>({});
  const toggle = (idx: number) =>
    setOpen((s) => ({ ...s, [idx]: !s[idx] }));
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Same header/menu as home */}
      {React.createElement("site-header")}

      {/* Kansas content */}
      <section id="home" className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">ACCEL-KS Timeline</h1>
      </section>

      {/* Timeline entries */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-muted-foreground">
        <ol className="relative border-l border-border pl-6 space-y-10">
          {entries.map((e, i) => (
            <li key={i} data-aos="fade-up" className="relative">
              <span className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
              <div className="ml-5 text-sm uppercase tracking-wide text-muted-foreground">{e.week}</div>

              {/* Highlight (visible) */}
              <div className="mt-2 ml-5 leading-relaxed">
                <span className="font-medium text-foreground">Highlight</span>
                <span className="hidden md:inline mx-2">—</span>
                <br className="md:hidden" />
                <span>{e.highlight}</span>
                {e.media && <div className="mt-3">{e.media}</div>}
              </div>

              {/* Gory tech details (toggle) */}
              {e.details && e.details.length > 0 && (
                <div className="mt-3 ml-5">
                  <button
                    type="button"
                    className="text-sm underline text-blue-500 hover:text-blue-600"
                    aria-expanded={!!open[i]}
                    onClick={() => toggle(i)}
                  >
                    Nerd Notes
                  </button>
                  {open[i] && (
                    <ul className="mt-2 ml-5 list-disc space-y-1">
                      {e.details.map((it, j) => (
                        <li key={j} className="leading-relaxed">{it}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Grant expenses and balance (visible) */}
              <div className="mt-3 ml-5">
                <div className="font-medium text-foreground">Grant expenses and balance</div>
                <div className="mt-1">
                  {e.expenses && e.expenses.length > 0 && (
                    <ul className="ml-5 list-disc space-y-1">
                      {e.expenses.map((ex, k) => (
                        <li key={k} className="leading-relaxed">{ex}</li>
                      ))}
                    </ul>
                  )}
                  <div
                    className="mt-3 border-t"
                    style={{ borderColor: "hsl(var(--primary) / 0.25)" }}
                  />
                  <div className="text-sm mt-2 flex items-center justify-between">
                    <span>Balance</span>
                    <span className="font-medium tabular-nums text-primary/80">{e.balance ? e.balance : "not updated"}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Placeholder anchors to keep header links functional */}
      <div id="ai" className="hidden" />
      <div id="about" className="hidden" />

      {/* Bio and Contact sections with visible anchor wrappers */}
      <div id="bio">{React.createElement('bio-section')}</div>
      <div id="contact">{React.createElement('contact-section')}</div>

      {/* Footer (same style as home) */}
      <footer className="py-6 text-center text-sm bg-accent text-muted-foreground border-t">
        <p>&copy; 2025 Freeman Constructs.</p>
      </footer>

      {/* Load AOS JS and init (as on home) */}
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: "window.AOS&&window.AOS.init&&window.AOS.init();",
        }}
      />

      {/* Load custom elements used for the header and sections */}
      <script src="/sections/site-header.js" type="module"></script>
      <script src="/sections/bio-section.js" type="module"></script>
      <script src="/sections/contact-section.js" type="module"></script>
    </main>
  );
}
