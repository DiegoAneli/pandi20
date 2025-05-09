"use client";

import styles from "./RevolutionSection.module.scss";
import Image from "next/image";
import { Award, Utensils, Sparkles } from "lucide-react";

export default function RevolutionSection() {
  const cards = [
    {
      icon: <Award className={styles.iconSvg} />,
      title: "Premium thick crust Base :",
      text: "Perfect for pairing with any combination of Toppings, amplifying their flavors.",
    },
    {
      icon: <Utensils className={styles.iconSvg} />,
      title: "Versatile and practical :",
      text: "Ideal for restaurants, bistros, Pizzerias and catering, thanks to its quick and easy use.",
    },
    {
      icon: <Sparkles className={styles.iconSvg} />,
      title: "Unlimited creativity :",
      text: "The perfect foundation for innovative and refined proposals. Pan di20 is the perfect blend of innovation and tradition.",
    },
  ];

  return (
    <section id="revolution" className={styles.section}>
      <div className={styles.backgroundRight}></div>

      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.label}>INTRODUCTION TO PAN DI20</p>
          <h2 className={styles.title}>
            A<span className={styles.revo}>r</span>EVOLUTION
          </h2>
          <p className={styles.subtitle}>In the concept of the pizza base</p>
          <p className={styles.text}>
            Pan di20 redefines the concept of a pizza base in modern gastronomy.<br></br>
            It is not just a supporting element for dishes, <br></br>but a key component
            that enhances every ingredient.
          </p>

          <div className={styles.cardList}>
            {cards.map((card, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrapper}>{card.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardText}>{card.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.footerText}>
            Pan di20 elevates your culinary experience to the next level.
          </p>
        </div>

        <div className={styles.right}>
          <Image
            src="/assets/revolution.png"
            alt="Pan Revolution Dish"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
