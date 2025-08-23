"use client";

import styles from "./ComparisonSection.module.scss";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ComparisonSection() {
  const { t } = useTranslation();

  const cards = [
    {
      title: t("comparison.pan.title"),
      image: "/assets/pandi20p.png",
      items: [
        t("comparison.pan.item1"),
        t("comparison.pan.item2"),
        t("comparison.pan.item3"),
        t("comparison.pan.item4"),
        t("comparison.pan.item5"),
      ],
    },
    {
      title: t("comparison.pinsa.title"),
      image: "/assets/pinsa.png",
      items: [
        t("comparison.pinsa.item1"),
        t("comparison.pinsa.item2"),
        t("comparison.pinsa.item3"),
        t("comparison.pinsa.item4"),
      ],
    },
    {
      title: t("comparison.pizza.title"),
      image: "/assets/pizza.png",
      items: [
        t("comparison.pizza.item1"),
        t("comparison.pizza.item2"),
        t("comparison.pizza.item3"),
        t("comparison.pizza.item4"),
      ],
    },
  ];

  return (
    <section id="comparison" className={styles.section}>
      <div className={styles.overlay} />

      <div className={styles.ellipse}>
        <p>{t("comparison.ellipseTitle")}</p>
        <p>{t("comparison.ellipseSubtitle")}</p>
      </div>


      <h2 className={styles.title}>
        <span>{t("comparison.heading1")}</span>
        <br />
        {t("comparison.heading2")}
      </h2>

      <div className={styles.cards}>
        {cards.map(({ title, image, items }) => (
          <div className={styles.card} key={title}>
            <Image
              src={image}
              alt={title}
              width={300}
              height={200}
              className={styles.image}
            />
            <h3>{title}</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <CheckCircle2 className={styles.check} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
