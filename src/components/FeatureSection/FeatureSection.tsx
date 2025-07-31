"use client";

import { motion } from "framer-motion";
import styles from "./FeatureSection.module.scss";
import { useTranslation } from "react-i18next";

export default function FeatureSection() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("features.versatility.title"),
      description: t("features.versatility.description"),
    },
    {
      title: t("features.convenience.title"),
      description: t("features.convenience.description"),
    },
    {
      title: t("features.nowaste.title"),
      description: t("features.nowaste.description"),
    },
    {
      title: t("features.value.title"),
      description: t("features.value.description"),
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t("features.heading")}</h2>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
