"use client";

import styles from "./Privacy.module.scss";
import { useTranslation } from "react-i18next";

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.privacy}>
      <h1>{t("privacyPage.title")}</h1>

      <section>
        <h2>{t("privacyPage.sections.ownerTitle")}</h2>
        <p>{t("privacyPage.sections.ownerText")}</p>
      </section>

      <section>
        <h2>{t("privacyPage.sections.dataTitle")}</h2>
        <p>{t("privacyPage.sections.dataText")}</p>
      </section>

      <section>
        <h2>{t("privacyPage.sections.purposeTitle")}</h2>
        <ul>
          {(t("privacyPage.sections.purposeList", { returnObjects: true }) as string[]).map(
            (item, idx) => (
              <li key={idx}>{item}</li>
            )
          )}
        </ul>
        <p>{t("privacyPage.sections.purposeNote")}</p>
      </section>

      <section>
        <h2>{t("privacyPage.sections.cookieTitle")}</h2>
        <p>{t("privacyPage.sections.cookieText")}</p>
      </section>

      <section>
        <h2>{t("privacyPage.sections.rightsTitle")}</h2>
        <ul>
          {(t("privacyPage.sections.rightsList", { returnObjects: true }) as string[]).map(
            (item, idx) => (
              <li key={idx}>{item}</li>
            )
          )}
        </ul>
        <p>{t("privacyPage.sections.rightsNote")}</p>
      </section>

      <section>
        <h2>{t("privacyPage.sections.updateTitle")}</h2>
        <p>{t("privacyPage.sections.updateText")}</p>
      </section>
    </div>
  );
}
