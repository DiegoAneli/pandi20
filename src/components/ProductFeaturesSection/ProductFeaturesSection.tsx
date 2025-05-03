"use client";

import styles from "./ProductFeaturesSection.module.scss";
import Image from "next/image";
import { Clock3, Wheat, Pizza, Leaf } from "lucide-react";

export default function ProductFeaturesSection() {
  return (
    <section id="product" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.title}>Product Features</h2>

          <div className={styles.features}>
            <div className={styles.item}>
              <Clock3 className={styles.icon} />
              <div>
                <h3>3 Fermentations for Over 28 Hours:</h3>
                <p>Superior Taste and High Digestibility</p>
              </div>
            </div>
            <div className={styles.item}>
              <Wheat className={styles.icon} />
              <div>
                <h3>Selected Italian flours Type1 e Type2:</h3>
                <p>Soft Wheat, Durum Wheat, and Spelt – <strong>Rich in Fibers</strong>.</p>
              </div>
            </div>
            <div className={styles.item}>
              <Pizza className={styles.icon} />
              <div>
                <h3>Natural Yeast (0,3%) :</h3>
                <p>Authentic Aroma and Lightness.</p>
              </div>
            </div>
            <div className={styles.item}>
              <Leaf className={styles.icon} />
              <div>
                <h3>Only Italian Natural Ingredients:</h3>
                <p>Flour, Water, Olive Oil, Salt, and Brewer&apos;s Yeast.</p>
              </div>
            </div>
          </div>

          <div className={styles.availability}>
            <h4>Availability:</h4>
            <p><strong>Frozen</strong>: 18 Months</p>
            <p><strong>Fresh</strong>: 60 Days</p>
          </div>

          <div className={styles.prepare}>
            <h4>Easy to prepare:</h4>
            <p>Ready in 3-5 Minutes at 220°/280°C<br />With every type of oven</p>
          </div>
        </div>

        <div className={styles.right}>
        <div className={styles.imageWrapper}>
            <Image
            src="/assets/product.png"
            alt="Pizza product"
            width={600}
            height={600}
            className={styles.image}
            priority
            />
            <div className={styles.imageOverlay} />
        </div>
        </div>

      </div>
    </section>
  );
}
