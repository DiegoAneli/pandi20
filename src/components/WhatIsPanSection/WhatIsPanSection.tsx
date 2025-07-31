"use client";

import { useState, useRef } from "react";
import styles from "./WhatIsPanSection.module.scss";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function WhatIsPanSection() {
  const { t } = useTranslation();
  const slides = t("whatIsPan.slides", { returnObjects: true }) as {
    src: string;
    alt: string;
    description: string;
  }[];

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (diff < -50) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
    touchStartX.current = null;
  };

  return (
    <section id="whats" className={styles.section}>
      <div className={styles.top}>
        <div className={styles.headerRow}>
          <div className={styles.heading}>
            <div className={styles.ribbon}>
              <h2>{t("whatIsPan.title")}</h2>
            </div>
          </div>

          <div className={styles.logo}>
            <Image src="/assets/logo.png" alt="Pan di20 Logo" width={180} height={80} priority />
          </div>
        </div>

        <div
          className={styles.carouselWrapper}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={styles.imageWrapper}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={slides[current].src}
                alt={slides[current].alt}
                width={700}
                height={420}
                className={styles.image}
                priority
              />
              <h3 className={styles.slideTitle}>{slides[current].alt}</h3>
              <p className={styles.caption}>{slides[current].description}</p>
            </motion.div>
          </AnimatePresence>

          <div className={styles.dots}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${current === i ? styles.active : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
