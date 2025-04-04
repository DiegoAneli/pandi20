import styles from "./ContactSection.module.scss";
import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className={styles.section} id="contatti">
      <h2 className={styles.title}>Contattaci</h2>
      <div className={styles.info}>
        <p><FaEnvelope style={{ display: "inline", marginRight: 8 }} /> info@pandi20.it</p>
        <p><FaPhone style={{ display: "inline", marginRight: 8 }} /> +39 333 123 4567</p>
      </div>
      <div className={styles.links}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ display: "inline", marginRight: 4 }} />
          Seguici su Instagram
        </a>
      </div>
    </section>
  );
}
