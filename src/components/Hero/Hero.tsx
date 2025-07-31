"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.scss";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

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
              {t("hero2.sloganLine1")}
              <span className={styles.highlight}>
                <span className={styles.rCircle}>r</span>{t("hero2.sloganLine2")}
              </span>
            </span>
          </div>
        </div>

        <h1 className={styles.title}>
          {t("hero2.title.prefix")} <strong>{t("hero2.title.highlight")}</strong> {t("hero2.title.suffix")}
        </h1>
      </motion.div>

      {/* Parte sinistra (immagine piatto) */}
      <div className={styles.left}>
        <Image
          src="/assets/panplate.png"
          alt="Italian food plate"
          fill
          priority
          className={styles.image}
        />
      </div>
    </section>
  );
}
