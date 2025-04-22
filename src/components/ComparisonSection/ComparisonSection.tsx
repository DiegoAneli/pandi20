"use client";

import styles from "./ComparisonSection.module.scss";
import Image from "next/image";

export default function ComparisonSection() {
  return (
    <section className={styles.section}>
      <div className={styles.ellipse}>
        <p>
          <strong>Where Innovation Meets Tradition:</strong>
          <br />
          The Only Pizza Base with Triple Fermentation.
        </p>
      </div>

      <h2 className={styles.title}>
        <span>Comparison among</span>
        <br />
        Pan Di20, Pinsa e Pizza
      </h2>

      <div className={styles.cards}>
        {/* Pan di20 */}
        <div className={styles.card}>
          <Image
            src="/assets/pandi20p.png"
            alt="Pan di20"
            width={300}
            height={200}
            className={styles.image}
          />
          <h3>Pan di20</h3>
          <ul>
            <li>✅ Leavening and fermentation: 28 hours with <strong>3 rising phases</strong>, for a highly digestible dough.</li>
            <li>✅ Texture: Crunchy on the outside, soft inside, with a light structure.</li>
            <li>✅ Versatility: Perfect as a base for gourmet dishes, from appetizers to main courses.</li>
            <li>✅ Easy to use: Ready in 5 minutes, with no waste.</li>
            <li>✅ Selected ingredients: High-quality Italian flours, olive oil, and only <span className={styles.highlight}>0.3% brewer’s yeast</span>.</li>
          </ul>
        </div>

        {/* Pinsa */}
        <div className={styles.card}>
          <Image
            src="/assets/pinsa.png"
            alt="Pinsa"
            width={300}
            height={200}
            className={styles.image}
          />
          <h3>Pinsa</h3>
          <ul>
            <li>✅ Leavening and fermentation: Around 48 hours, with high hydration.</li>
            <li>✅ Texture: Extremely crispy outside and very soft inside.</li>
            <li>✅ Usage: Best suited for light, fresh, and delicate toppings.</li>
            <li>✅ Tradition: An ancient dough made with a mix of flours for a rustic flavor.</li>
          </ul>
        </div>

        {/* Pizza */}
        <div className={styles.card}>
          <Image
            src="/assets/pizza.png"
            alt="Pizza"
            width={300}
            height={200}
            className={styles.image}
          />
          <h3>Pizza</h3>
          <ul>
            <li>✅ Leavening and fermentation: Variable, generally between 6 and 24 hours.</li>
            <li>✅ Texture: Can range from soft and airy (Neapolitan style) to crispy (Roman style).</li>
            <li>✅ Usage: Designed to be topped and served as a main Course.</li>
            <li>✅ Popularity: The most well-known and widely consumed baked product worldwide.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
