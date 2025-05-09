"use client";

import styles from "./PanBoxSection.module.scss";
import { FaLeaf, FaCloud, FaUtensils } from "react-icons/fa";

export default function PanBoxSection() {
  return (
    <section className={styles.bottom}>
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
          <strong>CRISPY CLOUD: </strong>Due to the long
          fermentation of over 28 hours and its three distinct
          fermentation phases, we achieve a crispy crust and
          a soft interior, like-cloud.
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
          product that boosts the average ticket.
        </p>
      </div>
    </section>
  );
}
