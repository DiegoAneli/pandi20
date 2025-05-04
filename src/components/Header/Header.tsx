"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const leftLinks = [
    { href: "#whats", label: "WHAT'S PANDI20" },
    { href: "#revolution", label: "A REVOLUTION" },
  ];

  const rightLinks = [
    { href: "#comparison", label: "COMPARISON" },
    { href: "#product", label: "PRODUCT" },
    { href: "#contact", label: "CONTACT" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false); // Chiude il menu dopo il clic
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <nav className={`${styles.navGroup} ${menuOpen ? styles.open : ""}`}>
          <div className={styles.leftNav}>
            {leftLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.logoDesktop}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/assets/logo.png"
                alt="Pan di20 logo"
                width={82}
                height={82}
                priority
              />
            </Link>
          </div>

          <div className={styles.rightNav}>
            {rightLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} className={scrolled ? styles.iconScrolled : styles.iconDefault} />
          ) : (
            <Menu size={28} className={scrolled ? styles.iconScrolled : styles.iconDefault} />
          )}
        </button>
      </div>
    </header>
  );
}
