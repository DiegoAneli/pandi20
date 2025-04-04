"use client";

import { motion } from "framer-motion";
import styles from "./FeatureSection.module.scss";

const features = [
  {
    title: "Versatility",
    description: "Compatible with infinite topping combinations, from classic to gourmet.",
  },
  {
    title: "Convenience",
    description: "Simplifies plating and usage, suitable for professionals and non-experts alike.",
  },
  {
    title: "No Waste",
    description: "Precisely portioned for optimal use.",
  },
  {
    title: "High Value",
    description: "A unique product with high perceived value for the end customer.",
  },
];

export default function FeatureSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Why choose Pan di20?</h2>
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
