"use client";

import styles from "./PanBoxSection.module.scss";
import { FaLeaf, FaCloud, FaUtensils } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function PanBoxSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.bottom}>
      <div className={styles.box}>
        <FaLeaf className={styles.icon} />
        <p>{t("panbox.box1")}</p>
      </div>

      <div className={styles.box}>
        <FaCloud className={styles.icon} />
        <p>
          <strong>{t("panbox.box2.title")}</strong>
          {t("panbox.box2.text")}
        </p>
      </div>

      <div className={styles.box}>
        <FaUtensils className={styles.icon} />
        <p>{t("panbox.box3")}</p>
      </div>
    </section>
  );
}
