"use client";

import styles from "./ExcellenceSection.module.scss";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

export default function ExcellenceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <h2>
              <span className={styles.highlight}>Pandi20:</span> A Product Born from Excellence
            </h2>
            <p>
              Pan di20 was created at Borgo 20, one of the most renowned restaurants in Parma,
              <span className={styles.italic}> the heart of Italy’s Food Valley</span>.
              <br />
              Developed in a kitchen that celebrates quality, innovation, and tradition, Pan di20
              still nowadays, offers the excellence of Italian craftsmanship to the professional
              foodservice industry.
            </p>

            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/borgo20parma/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBox}
              >
                <Instagram className={styles.icon} />
                <span>@borgo20parma</span>
              </a>
              <a
                href="https://www.facebook.com/Borgo20"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBox}
              >
                <Facebook className={styles.icon} />
                <span>@borgo20</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/assets/borgo.png"
        alt="Borgo 20 background"
        fill
        className={styles.bgImage}
        priority
      />
    </section>
  );
}
