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
  title: "Pandi20 | The Italian Food Revolution",
  description: "Pan di20 è l'innovativa base pizza italiana con tre fasi di fermentazione, perfetta per chef, pizzerie e ristoranti moderni.",
  keywords: [
    "pizza italiana", 
    "pane gourmet", 
    "Pan di20", 
    "fermentazione tripla", 
    "pizzeria innovativa",
    "base pizza artigianale",
    "pane professionale",
    "pane per ristoranti",
    "alta digeribilità",
    "cucina italiana",
    "lievitazione lunga"
  ],
  authors: [{ name: "Pandi20", url: "https://pandi20.it" }],
  openGraph: {
    title: "Pandi20 | The Italian Food Revolution",
    description:
      "Scopri Pan di20: una base pizza unica, soffice dentro e croccante fuori, pensata per la ristorazione professionale.",
    url: "https://pandi20.it",
    siteName: "Pandi20",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Pan di20 pizza gourmet",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pandi20 | The Italian Food Revolution",
    description: "La pizza base italiana innovativa per chef e pizzerie moderne.",
    site: "@pandi20",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="canonical" href="https://pandi20.it" />
        <meta name="theme-color" content="#B33340" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
      </head>
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
