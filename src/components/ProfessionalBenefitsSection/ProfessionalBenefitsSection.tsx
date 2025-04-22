"use client";

import styles from "./ProfessionalBenefitsSection.module.scss";
import {
  Hand,
  TrendingUp,
  Timer,
  Egg,
  Trash2,
  ChefHat,
  UtensilsCrossed,
  //Oven,
  Soup,
} from "lucide-react";
import Image from "next/image";

export default function ProfessionalBenefitsSection() {
  const left = [
    { label: "Strictly stretched by hand", icon: <Hand className={styles.icon} /> },
    { label: "Slow rising and easy to digest", icon: <TrendingUp className={styles.icon} /> },
    { label: "Ready to cook in 5 minutes", icon: <Timer className={styles.icon} /> },
    { label: "Suitable for sweet and savoury recipes", icon: <Egg className={styles.icon} /> },
  ];

  const right = [
    { label: "Zero Waste", icon: <Trash2 className={styles.icon} /> },
    { label: "No specialised staff needed", icon: <ChefHat className={styles.icon} /> },
    { label: "Suitable for any premise", icon: <UtensilsCrossed className={styles.icon} /> },
    { label: "Perfect with any type of oven", icon: <Soup className={styles.icon} /> },
    { label: "Can be prepared in a thousands of ways", icon: <Soup className={styles.icon} /> },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>THE BENEFITS OF PAN DI20 PROFESSIONAL</h2>

      <div className={styles.grid}>
        <ul className={styles.listLeft}>
          {left.map((item, i) => (
            <li key={i} className={styles.featureItem}>
              <div className={styles.dashedLine} />
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className={styles.centerImage}>
          <Image
            src="/assets/pane.png"
            alt="Pan Top"
            width={600}
            height={600}
            className={styles.top}
          />
          <Image
            src="/assets/pro-pan-flat.png"
            alt="Pan Flat"
            width={280}
            height={280}
            className={styles.flat}
          />
        </div>

        <ul className={styles.listRight}>
          {right.map((item, i) => (
            <li key={i} className={styles.featureItem}>
              {item.icon}
              <span>{item.label}</span>
              <div className={styles.dashedLine} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
