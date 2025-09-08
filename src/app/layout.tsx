import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Monastery 360° | Explore Sacred Spaces",
  description: "Immersive 360° Tours of Sacred Monasteries in Sikkim - Experience Spiritual Heritage & Cultural Preservation",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      }
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

function RootLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Literata:opsz,wght@7..72,400;700&family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <RootLayoutContent>{children}</RootLayoutContent>
    </Suspense>
  );
}
