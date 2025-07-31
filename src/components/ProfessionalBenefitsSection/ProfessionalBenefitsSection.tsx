"use client";

import styles from "./ProfessionalBenefitsSection.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Hand, TrendingUp, Timer, Egg,
  Trash2, ChefHat, UtensilsCrossed, Soup
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProfessionalBenefitsSection() {
  const { t } = useTranslation();

  const left = [
    { label: t("professional.left.0"), icon: Hand },
    { label: t("professional.left.1"), icon: TrendingUp },
    { label: t("professional.left.2"), icon: Timer },
    { label: t("professional.left.3"), icon: Egg },
  ];

  const right = [
    { label: t("professional.right.0"), icon: Trash2 },
    { label: t("professional.right.1"), icon: ChefHat },
    { label: t("professional.right.2"), icon: UtensilsCrossed },
    { label: t("professional.right.3"), icon: Soup },
    { label: t("professional.right.4"), icon: Soup },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.topLabels}>
        <div className={styles.ribbon}>
          <h2>{t("professional.title1")}</h2>
        </div>
        <div className={styles.ribbon}>
          <h2>{t("professional.title2")}</h2>
        </div>
      </div>

      <div className={styles.grid}>
        <ul className={styles.list}>
          {left.map(({ label, icon: Icon }, i) => (
            <li key={i} className={`${styles.featureItem} ${styles.leftItem}`}>
              <Icon className={styles.icon} />
              <span>{label}</span>
              <motion.svg
                className={styles.connector}
                viewBox="0 0 300 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <path
                  d="M 0 50 L 240 50"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  fill="transparent"
                />
              </motion.svg>
            </li>
          ))}
        </ul>

        <div className={styles.centerImage}>
          <Image src="/assets/pane2.png" alt="Pan di20" width={450} height={450} className={styles.pane} />
          <Image src="/assets/pane.png" alt="Pan di20 2" width={450} height={450} className={styles.pane} />
        </div>

        <ul className={styles.list}>
          {right.map(({ label, icon: Icon }, i) => (
            <li key={i} className={`${styles.featureItem} ${styles.rightItem}`}>
              <motion.svg
                className={styles.connector}
                viewBox="0 0 300 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <path
                  d="M 300 50 L 60 50"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  fill="transparent"
                />
              </motion.svg>
              <Icon className={styles.icon} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
