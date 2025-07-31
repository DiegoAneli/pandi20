"use client";

import styles from "./ProductFeaturesSection.module.scss";
import Image from "next/image";
import { Clock3, Wheat, Pizza, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProductFeaturesSection() {
  const { t } = useTranslation();

  return (
    <section id="product" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.title}>{t("product.title")}</h2>

          <div className={styles.features}>
            <div className={styles.item}>
              <Clock3 className={styles.icon} />
              <div>
                <h3>{t("product.feature1.title")}</h3>
                <p>{t("product.feature1.text")}</p>
              </div>
            </div>
            <div className={styles.item}>
              <Wheat className={styles.icon} />
              <div>
                <h3>{t("product.feature2.title")}</h3>
                <p>{t("product.feature2.text")}</p>
              </div>
            </div>
            <div className={styles.item}>
              <Pizza className={styles.icon} />
              <div>
                <h3>{t("product.feature3.title")}</h3>
                <p>{t("product.feature3.text")}</p>
              </div>
            </div>
            <div className={styles.item}>
              <Leaf className={styles.icon} />
              <div>
                <h3>{t("product.feature4.title")}</h3>
                <p>{t("product.feature4.text")}</p>
              </div>
            </div>
          </div>

          <div className={styles.availability}>
            <h4>{t("product.availability.title")}</h4>
            <p>{t("product.availability.frozen")}</p>
            <p>{t("product.availability.fresh")}</p>
          </div>

          <div className={styles.prepare}>
            <h4>{t("product.prepare.title")}</h4>
            <p>{t("product.prepare.text")}</p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/product.png"
              alt="Pizza product"
              width={600}
              height={600}
              className={styles.image}
              priority
            />
            <div className={styles.imageOverlay} />
          </div>
        </div>
      </div>
    </section>
  );
}
