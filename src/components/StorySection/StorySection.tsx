import styles from "./StorySection.module.scss";

export default function StorySection() {
  return (
    <section className={styles.section} id="storia">
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2 className={styles.title}>La nostra storia</h2>
          <p className={styles.description}>
            Pan di20 nasce nel cuore della tradizione gastronomica italiana, a due passi dal celebre Borgo 20.
            La sua unicità sta nell’unire l'artigianalità delle pizze di una volta con la praticità moderna.  
            Un prodotto che supera le aspettative: pronto all’uso, rigenerabile in forno e con infinite possibilità
            di topping, adatto a chef stellati e locali informali.  
            Il risultato? Esperienza autentica, gusto inconfondibile, zero sprechi.
          </p>
        </div>
        <div className={styles.image}>
          <img src="/assets/story-pan-di20.jpg" alt="Borgo 20, la tradizione" />
        </div>
      </div>
    </section>
  );
}
