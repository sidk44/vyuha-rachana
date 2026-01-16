import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vyuha Rachana: Ancient Indian Military Science",
  description:
    "Interactive visualizations of ancient Indian military formations - Chakravyuha, Garudavyuha, and Mandalavyuha",
  keywords: [
    "Chakravyuha",
    "Garudavyuha",
    "Mandalavyuha",
    "Ancient India",
    "Military Science",
    "Vyuha",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f5e6d3" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="relative min-h-screen overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
