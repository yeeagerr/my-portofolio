import type React from "react";
import ClientLayout from "./ClientLayout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayout>
      <SpeedInsights />
      <Analytics /> {children}
    </ClientLayout>
  );
}

import "./globals.css";

export const metadata = {
  generator: "v0.dev",
};
