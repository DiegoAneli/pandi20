"use client";

import styles from "./TraditionSection.module.scss";
import { useTranslation } from "react-i18next";

export default function TraditionSection() {
  const { t } = useTranslation();

  const items = t("tradition.list", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.label}>{t("tradition.label")}</p>
          <h2 className={styles.title}>{t("tradition.title")}</h2>
          <p className={styles.subtitle}>{t("tradition.subtitle")}</p>

          <div className={styles.list}>
            {items.map((item, index) => (
              <div className={styles.item} key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <p className={styles.footerText}>{t("tradition.footer")}</p>
        </div>

        <div className={styles.right}>
          <img
            src="/assets/tradition.png"
            alt={t("tradition.alt")}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
