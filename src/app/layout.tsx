import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

// Font Google
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pandi20",
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
          ${montserrat.variable} 
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
