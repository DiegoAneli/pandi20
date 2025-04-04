"use client";

import styles from "./RecipeGrid.module.scss";
import RecipeCard from "./RecipeCard";

const recipes = [
  {
    title: "Margherita",
    description: "Burrata, Bebè Rosso, Basil Cream, EVO Oil",
    imageUrl: "/assets/ricetta_margherita.png",
  },
  {
    title: "Vegetarian",
    description: "Zucchine, carote, patate, soia e olio al rosmarino",
    imageUrl: "/assets/ricetta_vegetariana.png",
  },
  {
    title: "Pulled Pork",
    description: "BBQ, pulled pork, cipolla agrodolce, senape",
    imageUrl: "/assets/ricetta_pulledpork.png",
  },
  {
    title: "Tuna & Onion",
    description: "Tonno tataki, cipolla caramellata, gel zenzero",
    imageUrl: "/assets/ricetta_tonno.png",
  }
];

export default function RecipeGrid() {
  return (
    <section className={styles.section} id="recipes">
      <h2 className={styles.title}>Ricette suggerite</h2>
      <div className={styles.grid}>
        {recipes.map((r) => (
          <RecipeCard key={r.title} {...r} />
        ))}
      </div>
    </section>
  );
}
