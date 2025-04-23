"use client";

import styles from "./ProfessionalBenefitsSection.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
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

const left = [
  { label: "Strictly stretched by hand", icon: Hand, curveId: "L1" },
  { label: "Slow rising and easy to digest", icon: TrendingUp, curveId: "L2" },
  { label: "Ready to cook in 5 minutes", icon: Timer, curveId: "L3" },
  { label: "Suitable for sweet and savoury recipes", icon: Egg, curveId: "L4" },
];

const right = [
  { label: "Zero Waste", icon: Trash2, curveId: "R1" },
  { label: "No specialised staff needed", icon: ChefHat, curveId: "R2" },
  { label: "Suitable for any premise", icon: UtensilsCrossed, curveId: "R3" },
  { label: "Perfect with any type of oven", icon: Soup, curveId: "R4" },
  { label: "Can be prepared in a thousands of ways", icon: Soup, curveId: "R5" },
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
          {left.map(({ label, icon: Icon, curveId }, i) => (
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
                  d={`M 0 20 C 80 20, 120 80, 240 100`}
                  stroke="#8B0000"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  fill="transparent"
                />
              </motion.svg>
            </li>
          ))}
        </ul>

        <div className={styles.centerImage}>
          <Image
            src="/assets/pane.png"
            alt="Pan di20"
            width={450}
            height={450}
            className={styles.pane}
            priority
          />
        </div>

        <ul className={styles.list}>
          {right.map(({ label, icon: Icon, curveId }, i) => (
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
                  d={`M 300 20 C 220 20, 180 80, 60 100`}
                  stroke="#8B0000"
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
