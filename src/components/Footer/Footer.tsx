"use client";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Pandi20 · All rights reserved – Developed by{" "}
        <a
          href="https://diegoaneli.it"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          diegoaneli.it
        </a>
      </p>
    </footer>
  );
}
