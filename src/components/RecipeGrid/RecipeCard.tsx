import styles from "./RecipeGrid.module.scss";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function RecipeCard({ title, description, imageUrl }: Props) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-beige shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-serif text-grafite mb-2">{title}</h3>
        <p className="text-sm text-grafite font-sans">{description}</p>
      </div>
    </motion.div>
  );
}
