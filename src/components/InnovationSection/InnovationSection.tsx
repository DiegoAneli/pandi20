"use client";

import { Award, HandCoins, Euro, Trash2 } from "lucide-react";
import styles from "./InnovationSection.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function InnovationSection() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: <Award size={32} strokeWidth={1} className="text-white" />,
      title: t("innovation.cards.versatility.title"),
      text: t("innovation.cards.versatility.text"),
    },
    {
      icon: <HandCoins size={32} strokeWidth={1} className="text-white" />,
      title: t("innovation.cards.convenience.title"),
      text: t("innovation.cards.convenience.text"),
    },
    {
      icon: <Euro size={32} strokeWidth={1} className="text-white" />,
      title: t("innovation.cards.ticket.title"),
      text: t("innovation.cards.ticket.text"),
    },
    {
      icon: <Trash2 size={32} strokeWidth={1} className="text-white" />,
      title: t("innovation.cards.nowaste.title"),
      text: t("innovation.cards.nowaste.text"),
    },
  ];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.label}>{t("innovation.label")}</p>
          <h2 className={styles.title}>Pan di20</h2>
          <p className={styles.subtitle}>{t("innovation.subtitle")}</p>

          <div className={styles.cardList}>
            {cards.map((card, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrapper}>{card.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardText}>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <Image
            src="/assets/chef.png"
            alt="Chef with pizza"
            className={styles.image}
            width={1000}
            height={600}
          />
        </div>
        <div className={styles.backgroundRight}></div>
      </div>
    </section>
  );
}
