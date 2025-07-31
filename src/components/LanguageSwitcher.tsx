'use client';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('it')}>🇮🇹 IT</button>
      <button onClick={() => changeLanguage('en')}>🇬🇧 EN</button>
    </div>
  );
}
