import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACCEL-KS Timeline — Freeman Constructs",
  description: "Running log of work toward the ACCEL-KS grant.",
};

export default function KansasLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

