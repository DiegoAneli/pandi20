"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#recipes", label: "Ricette" },
    { href: "#storia", label: "Chi siamo" },
    { href: "#contatti", label: "Contatti" },
  ];

  return (
    <header
  className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-200 ${
    scrolled ? "bg-beige/80 backdrop-blur shadow-md py-10" : "bg-beige py-20"
  } text-amaranto`}
>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        {/* Logo + brand */}
        <Link href="/" className="flex items-center gap-6">
          <Image
            src="/assets/logo.png"
            alt="Pan di20 logo"
            width={48}
            height={48}
            priority
          />
          <h1 className="text-4xl font-serif tracking-wide text-amaranto">
            Pandi20
          </h1>
        </Link>

        {/* Nav molto distanziato */}
        <nav className="flex gap-[1rem] font-sans text-lg tracking-wide">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-amaranto hover:underline underline-offset-4 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
