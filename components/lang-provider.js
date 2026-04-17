"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { defaultLang, isSupportedLang, sharedCopy } from "@/lib/i18n";

const LangContext = createContext({
  lang: defaultLang,
  setLang: () => {}
});

function getCookieLang() {
  if (typeof document === "undefined") {
    return null;
  }

  const match = document.cookie.match(/(?:^|;\s*)kc_lang=(en|zh)(?:;|$)/);
  return match?.[1] ?? null;
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    const storedLang = typeof window !== "undefined" ? window.localStorage.getItem("kc_lang") : null;
    const cookieLang = getCookieLang();
    const nextLang = [cookieLang, storedLang].find((value) => isSupportedLang(value)) ?? defaultLang;

    setLang(nextLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.cookie = `kc_lang=${lang}; path=/; max-age=31536000; samesite=lax`;
    window.localStorage.setItem("kc_lang", lang);
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function useSharedCopy() {
  const { lang } = useLang();
  return sharedCopy[lang];
}
