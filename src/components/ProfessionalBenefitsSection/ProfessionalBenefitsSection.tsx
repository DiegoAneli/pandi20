"use client";

import styles from "./ProfessionalBenefitsSection.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Hand, TrendingUp, Timer, Egg,
  Trash2, ChefHat, UtensilsCrossed, Soup
} from "lucide-react";

const left = [
  { label: "Strictly stretched by hand", icon: Hand },
  { label: "Slow rising and easy to digest", icon: TrendingUp },
  { label: "Ready to cook in 5 minutes", icon: Timer },
  { label: "Suitable for sweet and savoury recipes", icon: Egg },
];

const right = [
  { label: "Zero Waste", icon: Trash2 },
  { label: "No specialised staff needed", icon: ChefHat },
  { label: "Suitable for any premise", icon: UtensilsCrossed },
  { label: "Perfect with any type of oven", icon: Soup },
  { label: "Can be prepared in a thousands of ways", icon: Soup },
];

export default function ProfessionalBenefitsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.topLabels}>
        <div className={styles.labelLeft}>
          <h2>THE BENEFITS OF<br />PAN DI20 PROFESSIONAL</h2>
        </div>
        <div className={styles.labelRight}>
          <h2>THE ADVANTAGES<br />FOR PROFESSIONALS</h2>
        </div>
      </div>

      <div className={styles.grid}>
        <ul className={styles.list}>
          {left.map(({ label, icon: Icon }, i) => (
            <li key={i} className={`${styles.featureItem} ${styles.leftItem}`}>
              <Icon className={styles.icon} />
              <span>{label}</span>
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
              <Icon className={styles.icon} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
