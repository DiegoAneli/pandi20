"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      {/* Parte sinistra: immagine */}
      <div className={styles.left}>
        <Image
          src="/assets/pizzaHero.png"
          alt="Italian food plate"
          fill
          priority
          className={styles.image}
        />
      </div>

      {/* Parte destra: logo + testo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.right}
      >
        <div className={styles.branding}>
          <div className={styles.logoWrapper}>
            <Image
              src="/assets/logo.png"
              alt="PAN DI 20 icon"
              width={800}
              height={700}
              className={styles.logo}
            />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandLine}>
              THE ITALIAN FOOD
              <span className={styles.highlight}>
                <span className={styles.rCircle}>r</span>EVOLUTION
              </span>
            </span>
          </div>
        </div>

        <h1 className={styles.title}>
          Bring the new <strong>Italian</strong> style to your venue
        </h1>
      </motion.div>
    </section>
  );
}