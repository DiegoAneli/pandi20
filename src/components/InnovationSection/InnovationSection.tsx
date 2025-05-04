"use client";

import { Award, HandCoins, Euro, Trash2 } from "lucide-react";
import styles from "./InnovationSection.module.scss";
import Image from "next/image";

export default function InnovationSection() {
  const cards = [
    {
      icon: <Award size={32} strokeWidth={1} className="text-white" />,
      title: "Versatility:",
      text: "Compatible with infinite topping combinations, from classic to gourmet. Ideal for innovative pizzerias.",
    },
    {
      icon: <HandCoins size={32} strokeWidth={1} className="text-white" />,
      title: "Convenience:",
      text: "Simplifies plating and usage, suitable for professionals and non-experts alike.",
    },
    {
      icon: <Euro size={32} strokeWidth={1} className="text-white" />,
      title: "Increase the average ticket value:",
      text: "Thanks to a unique product with high perceived value for the end customer.",
    },
    {
      icon: <Trash2 size={32} strokeWidth={1} className="text-white" />,
      title: "No Waste:",
      text: "Precisely portioned for optimal use.",
    },
  ];

  return (
    <section id="about" className={styles.section}>
      {/* sfondo rosso laterale */}
      

      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.label}>INNOVATION</p>
          <h2 className={styles.title}>Pandi20</h2>
          <p className={styles.subtitle}>
            The Best offer to a Chef and pizza Maker
          </p>

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
