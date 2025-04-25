"use client";

import { useState } from "react";
import styles from "./WhatIsPanSection.module.scss";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/assets/panplate.png",
    alt: "Classic Pan di20",
    description: "Type 1 wheat, durum wheat & olive oil. Perfect for bruschetta or gourmet starters.",
  },
  {
    src: "/assets/panplate.png",
    alt: "Whole grain Pan di20",
    description: "Rich in fibers with Type 2 soft wheat and spelt. Ideal with vegetable toppings.",
  },
  {
    src: "/assets/panplate.png",
    alt: "Mini Pan di20",
    description: "Perfect size for tasting menus and sweet or savory bites.",
  },
];

export default function WhatIsPanSection() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="whats" className={styles.section}>
      <div className={styles.top}>
        <div className={styles.headerRow}>
          <div className={styles.heading}>
            <div className={styles.ribbon}>
              <h2>What is Pan di20 ?</h2>
            </div>
            <p>The Only Pizza Base with Triple Fermentation.</p>
          </div>

          <div className={styles.logo}>
            <Image src="/assets/logo.png" alt="Pan di20 Logo" width={160} height={80} priority />
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <button onClick={prev} className={styles.navButton}>
            <ChevronLeft size={32} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={styles.imageWrapper}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={slides[current].src}
                alt={slides[current].alt}
                width={800}
                height={400}
                className={styles.image}
                priority
              />
              <p className={styles.caption}>{slides[current].description}</p>
            </motion.div>
          </AnimatePresence>

          <button onClick={next} className={styles.navButton}>
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

     
      <div className={styles.bottom}>
        <div className={styles.box}>
          <span className={styles.icon}>🌾</span>
          <p>
            It is made up of two different flours mixed together: type 1 soft
            wheat and durum wheat flour and type 2 soft wheat, durum wheat and
            spelled flour. This means slightly refined flours with a high
            percentage of fibre, without added animal fats.
          </p>
        </div>
        <div className={styles.box}>
          <span className={styles.icon}>☁️</span>
          <p>
            <strong>CRISPY CLOUD:</strong> Due to the long fermentation of over
            28 hours and its three distinct fermentation phases, we achieve a
            crispy crust and a soft interior, like-cloud.
          </p>
        </div>
        <div className={styles.box}>
          <span className={styles.icon}>👨‍🍳</span>
          <p>
            Perfect for the creativity of modern chefs and contemporary pizza
            makers, allowing them to create innovative dishes or pizzas with
            high perceived value. It lets a restaurant pair its bread with a
            signature recipe for a premium experience and helps a pizzeria craft
            a product that boosts the average ticket.
          </p>
        </div>
      </div>
    </section>
  );
}
