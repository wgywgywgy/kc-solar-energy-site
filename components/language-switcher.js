"use client";

import { useLang } from "@/components/lang-provider";

export function LanguageSwitcher({ label }) {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--foreground-muted)] xl:inline">
        {label}
      </span>
      <div className="flex rounded-full border border-[color:var(--border)] bg-white p-1 shadow-[0_8px_24px_rgba(15,39,71,0.05)]">
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${
            lang === "en" ? "bg-[color:var(--accent)] text-white" : "text-[color:var(--foreground-muted)]"
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLang("zh")}
          className={`rounded-full px-3 py-2 text-xs font-bold tracking-[0.02em] transition ${
            lang === "zh" ? "bg-[color:var(--accent)] text-white" : "text-[color:var(--foreground-muted)]"
          }`}
        >
          中文
        </button>
      </div>
    </div>
  );
}
