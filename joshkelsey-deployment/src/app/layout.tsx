import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Josh Kelsey · Lead Pastor & Church Planter",
  description: "Lead Pastor and founder of FOUNT Church. Leadership training, church planting insights, and kingdom principles for exponential growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
