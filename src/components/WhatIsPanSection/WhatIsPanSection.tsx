"use client";


import styles from "./WhatIsPanSection.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";


export default function WhatIsPanSection() {
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className={styles.headerRow}>
            <div className={styles.heading}>
            <div className={styles.ribbon}>
                <h2>What is Pan di20 ?</h2>
            </div>
            <p>The Only Pizza Base with Triple Fermentation.</p>
            </div>

            <div className={styles.logo}>
            <Image
                src="/assets/logo.png"
                alt="Pan di20 Logo"
                width={160}
                height={80}
                priority
            />
            </div>
        </div>

        <motion.div
  className={styles.imageWrapper}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <Image
    src="/assets/panplate.png"
    alt="Pan di20"
    width={800}
    height={400}
    className={styles.image}
    priority
  />
</motion.div>

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
