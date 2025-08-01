"use client";

import styles from "./ExcellenceSection.module.scss";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ExcellenceSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <h2>
              <span className={styles.highlight}>{t("excellence.title.highlight")}</span>
              {t("excellence.title.rest")}
            </h2>
            <p>
              {t("excellence.paragraph.part1")}
              <span className={styles.italic}>{t("excellence.paragraph.italic")}</span>.
              <br />
              {t("excellence.paragraph.part2")}
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
        src="/assets/borgo2.png"
        alt={t("excellence.imageAlt")}
        fill
        className={styles.bgImage}
        priority
      />
    </section>
  );
}
