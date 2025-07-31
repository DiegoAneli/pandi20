"use client";
import "../../i18n";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const leftLinks = [
    { href: "#whats", label: t("nav.whats") },
    { href: "#revolution", label: t("nav.revolution") },
  ];

  const rightLinks = [
    { href: "#comparison", label: t("nav.comparison") },
    { href: "#product", label: t("nav.product") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const iconColorClass = menuOpen
    ? styles.iconMenuOpen
    : scrolled
    ? styles.iconScrolled
    : styles.iconDefault;

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

            {/* 🌍 Switch lingua desktop */}
            <div className={styles.languageSwitcher}>
              <button onClick={() => changeLanguage("it")}>IT</button>
              <button onClick={() => changeLanguage("en")}>EN</button>
            </div>
          </div>

          {/* 🌍 Switch lingua mobile */}
          {menuOpen && (
            <div className={styles.languageSwitcherMobile}>
              <button onClick={() => changeLanguage("it")}>IT</button>
              <button onClick={() => changeLanguage("en")}>EN</button>
            </div>
          )}
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} className={iconColorClass} />
          ) : (
            <Menu size={28} className={iconColorClass} />
          )}
        </button>
      </div>
    </header>
  );
}
