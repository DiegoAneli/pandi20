"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function ClientLangSetter() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Imposta dinamicamente il lang nel tag <html>
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return null; // Non rende nulla nel DOM
}
