"use client";

import styles from "./ContactSection.module.scss";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>{t("contact2.title")}</h2>
      <div className={styles.info}>
        <p>
          <a href="mailto:info@pandi20.it" className={styles.link}>
            <FaEnvelope style={{ display: "inline", marginRight: 8 }} />
            info@pandi20.it
          </a>
        </p>
        <p>
          <a href="tel:+393331234567" className={styles.link}>
            <FaPhone style={{ display: "inline", marginRight: 8 }} />
            +39 333 123 4567
          </a>
        </p>
      </div>
    </section>
  );
}
