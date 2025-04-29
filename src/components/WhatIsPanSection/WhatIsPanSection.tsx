"use client";

import { useState, useRef } from "react";
import styles from "./WhatIsPanSection.module.scss";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaLeaf, FaCloud, FaUtensils } from "react-icons/fa";

const slides = [
  {
    src: "/assets/margherita.png",
    alt: "Margherita",
    description: "Pan di20 baked with tomato sauce and mozzarella; after baking, add: Burrata, Bebè Rosso (Ginos), Basil Cream (or Genovese Pesto), and EVO Oil."
  },
  {
    src: "/assets/Vegetarian.png",
    alt: "Vegetarian",
    description: "Pan di20 baked with tomato sauce and cooked vegetables of choice (potatoes, carrots, onions, zucchini, etc.). After baking add: fresh vegetables seasoned with rosemary oil, oregano, and a drizzle of soy sauce.",
  },
  {
    src: "/assets/PulledPorck.png",
    alt: "The Pulled Pork",
    description: "Pan di20 baked with Mozzarella; after baking, add: Pulled Pork, BBQ Sauce, Sweet and Sour Onion, Mustard Sauce, and EVO Oil.",
  },
  {
    src: "/assets/Tonno.png",
    alt: "Tuna and Onion",
    description: "Pan di20 baked without toppings; after baking, add: Burrata, Caramelized Red Onion (Ginos), Tuna Tataki, Ginger Gel, and EVO Oil."
  },
  {
    src: "/assets/panplate.png",
    alt: "Beef Tartar",
    description: "Mozzarella during baking; after baking add: Beef Tartare, Capers, Pepper, Spring Onion (Ginos), Mustard Cream, EVO Oil. Optional: Parmesan flakes or Raspberry/Mango gel.",
  },
  {
    src: "/assets/Anatra.png",
    alt: "Duck Breast",
    description: "Pan di20 baked with Artichoke Cream and Mozzarella; after baking add: Duck Breast Roast Beef, Jus with Orange, Fresh Artichokes, and Saffron Parmesan Cream.",
  },
];

export default function WhatIsPanSection() {
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
              <h2>What is Pan di20 ?</h2>
            </div>
            <p>The Only Pizza Base with Triple Fermentation.</p>
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

      <div className={styles.bottom}>
        <div className={styles.box}>
          <FaLeaf className={styles.icon} />
          <p>
          It is made up of two different flours
mixed together: type 1 soft wheat
and durum wheat flour and type 2
soft wheat, durum wheat and
spelled flour. This means slightly
refined flours with a high
percentage of fibre, without added
animal fats.

          </p>
        </div>
        <div className={styles.box}>
          <FaCloud className={styles.icon} />
          <p>
            <strong>CRISPY CLOUD:</strong>Due to the long
fermentation of over 28
hours and its three distinct
fermentation phases, we
achieve a crispy crust and
a soft interior, like-cloud
          </p>
        </div>
        <div className={styles.box}>
          <FaUtensils className={styles.icon} />
          <p>
          Perfect for the creativity of modern chefs and
contemporary pizza makers, allowing them to
create innovative dishes or pizzas with high
perceived value. It lets a restaurant pair its
bread with a signature recipe for a premium
experience and helps a pizzeria craft a
product that boosts the average ticket
          </p>
        </div>
      </div>
    </section>
  );
}
