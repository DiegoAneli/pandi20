import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Inizializzazione font Google (Geist Sans e Mono)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO base
export const metadata: Metadata = {
  title: "Pan di20",
  description: "Pane, emozione e territorio",
};

// Layout radice del sito
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          font-sans 
          bg-beige 
          text-amaranto
        `}
      >
        {children}
      </body>
    </html>
  );
}
