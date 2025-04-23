import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer/Footer";

import Header from "@/components/Header/Header";


// Font Google
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pan di20",
  description: "Pane, emozione e territorio",
};

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
