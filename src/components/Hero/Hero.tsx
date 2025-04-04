"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <h1>
          The Italian Food{" "}
          <span>rEVOLUTION</span>
        </h1>
        <p>Bring the new Italian style to your venue</p>
      </motion.div>
    </section>
  );
}
