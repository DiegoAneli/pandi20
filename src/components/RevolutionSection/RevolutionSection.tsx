"use client";

import styles from "./RevolutionSection.module.scss";
import Image from "next/image";
import { Award, Utensils, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function RevolutionSection() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: <Award className={styles.iconSvg} />,
      title: t("revolution.cards.0.title"),
      text: t("revolution.cards.0.text"),
    },
    {
      icon: <Utensils className={styles.iconSvg} />,
      title: t("revolution.cards.1.title"),
      text: t("revolution.cards.1.text"),
    },
    {
      icon: <Sparkles className={styles.iconSvg} />,
      title: t("revolution.cards.2.title"),
      text: t("revolution.cards.2.text"),
    },
  ];

  return (
    <section id="revolution" className={styles.section}>
      <div className={styles.backgroundRight}></div>

      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.label}>{t("revolution.label")}</p>
          <h2 className={styles.title}>
            A<span className={styles.revo}>r</span>EVOLUTION
          </h2>
          <p className={styles.subtitle}>{t("revolution.subtitle")}</p>
          <p className={styles.text}>{t("revolution.description")}</p>

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

          <p className={styles.footerText}>{t("revolution.footer")}</p>
        </div>

        <div className={styles.right}>
          <Image
            src="/assets/revolution.png"
            alt="Pan Revolution Dish"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
