"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./CookieBanner.module.scss";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <p>
        {t("cookie.message")}{" "}
        <Link href="/privacy" className={styles.link}>
          {t("cookie.privacy")}
        </Link>
        .
      </p>
      <button onClick={handleAccept} className={styles.button}>
        {t("cookie.button")}
      </button>
    </div>
  );
}
