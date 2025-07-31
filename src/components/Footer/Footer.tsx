"use client";

import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Pan di20 · {t("footer.rights")} – {t("footer.developedBy")}{" "}
        <a
          href="https://diegoaneli.it"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          diegoaneli.it
        </a>
      </p>
    </footer>
  );
}
