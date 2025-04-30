"use client";

import styles from "./ComparisonSection.module.scss";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react"; // icona sostitutiva

export default function ComparisonSection() {
  return (
    <section id="comparison" className={styles.section}>
      <div className={styles.overlay} />

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
        {[
          {
            title: "Pan di20",
            image: "/assets/pandi20p.png",
            items: [
              "Leavening and fermentation: 28 hours with ",
              "Texture: Crunchy on the outside, soft inside, with a light structure.",
              "Versatility: Perfect as a base for gourmet dishes, from appetizers to main courses.",
              "Easy to use: Ready in 5 minutes, with no waste.",
              "Selected ingredients: High-quality Italian flours, olive oil, and only ",
            ],
            highlight: "0.3% brewer’s yeast",
            emphasis: "3 rising phases",
          },
          {
            title: "Pinsa",
            image: "/assets/pinsa.png",
            items: [
              "Leavening and fermentation: Around 48 hours, with high hydration.",
              "Texture: Extremely crispy outside and very soft inside.",
              "Usage: Best suited for light, fresh, and delicate toppings.",
              "Tradition: An ancient dough made with a mix of flours for a rustic flavor.",
            ],
          },
          {
            title: "Pizza",
            image: "/assets/pizza3.png",
            items: [
              "Leavening and fermentation: Variable, generally between 6 and 24 hours.",
              "Texture: Can range from soft and airy (Neapolitan style) to crispy (Roman style).",
              "Usage: Designed to be topped and served as a main course.",
              "Popularity: The most well-known and widely consumed baked product worldwide.",
            ],
          },
        ].map(({ title, image, items, highlight, emphasis }) => (
          <div className={styles.card} key={title}>
            <Image
              src={image}
              alt={title}
              width={300}
              height={200}
              className={styles.image}
            />
            <h3>{title}</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <CheckCircle2 className={styles.check} />
                  {item.includes("rising phases") && emphasis ? (
                    <>
                      {item}
                      <strong> {emphasis}</strong>
                    </>
                  ) : item.includes("0.3%") && highlight ? (
                    <>
                      {item}
                      <span className={styles.highlight}>{highlight}</span>
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
