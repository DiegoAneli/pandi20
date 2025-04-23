import styles from "./ContactSection.module.scss";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className={styles.section} id="contatti">
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.info}>
        <p><FaEnvelope style={{ display: "inline", marginRight: 8 }} /> info@pandi20.it</p>
        <p><FaPhone style={{ display: "inline", marginRight: 8 }} /> +39 333 123 4567</p>
      </div>
    </section>
  );
}
