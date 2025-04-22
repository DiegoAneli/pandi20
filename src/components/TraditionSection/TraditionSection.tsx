import styles from "./TraditionSection.module.scss";

export default function TraditionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.label}>PREMIUM QUALITY FROM ITALY</p>
          <h2 className={styles.title}>TRADITION MEET MODERNITY</h2>
          <p className={styles.subtitle}>Our commitment to excellence:</p>

          <div className={styles.list}>
            <div className={styles.item}>
              <h3>01. MADE IN ITALY :</h3>
              <p>
                Strictly compliant with FSSC 22000 certifications, ensuring the
                highest standards of food safety and quality.
              </p>
            </div>
            <div className={styles.item}>
              <h3>02. Craftsmanship and Technology:</h3>
              <p>
                A perfect balance between Italian tradition and cutting-edge
                innovation, delivering superior performance and consistency.
              </p>
            </div>
            <div className={styles.item}>
              <h3>03. Preferred by Best Venue in Italy:</h3>
              <p>
                For unmatched quality and cost-efficiency. Selected by top
                restaurants and pizzerias.
              </p>
            </div>
          </div>

          <p className={styles.footerText}>
            Elevate your menu with the authenticity and reliability of Pan di20
          </p>
        </div>

        <div className={styles.right}>
          <img
            src="/assets/tradition.png"
            alt="Pan preparation"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
