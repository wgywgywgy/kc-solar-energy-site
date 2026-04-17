"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useLang, useSharedCopy } from "@/components/lang-provider";
import { LanguageSwitcher } from "@/components/language-switcher";

function isActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const { lang } = useLang();
  const content = useSharedCopy();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[rgba(255,255,255,0.9)] backdrop-blur-xl">
      <div className="border-b border-[color:var(--border)] bg-[rgba(245,248,252,0.86)]">
        <div className="container-shell flex items-center justify-between gap-4 py-2 text-[0.76rem] text-[color:var(--foreground-muted)]">
          <div className="hidden sm:block">{content.brandSubtitle}</div>
          <div className="truncate">{content.footerAddress}</div>
        </div>
      </div>

      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,#2b5690,#102846)] text-sm font-black tracking-[0.16em] text-white">
            KC
          </div>
          <div>
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[color:var(--foreground-muted)]">
              {content.brandTitle}
            </div>
            <div className="text-sm font-medium text-[color:var(--foreground)]">{content.brandSubtitle}</div>
          </div>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <nav className="flex items-center rounded-full border border-[color:var(--border)] bg-white/85 px-3 py-2 shadow-[0_14px_30px_rgba(12,35,64,0.08)]">
            {content.navigation.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]"
                      : "text-[color:var(--foreground-muted)] hover:text-[color:var(--foreground)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <LanguageSwitcher label={content.switcherLabel} />

          <Link href="/contact" className="btn-primary">
            {content.headerCta}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-white text-xl text-[color:var(--foreground)] shadow-[0_14px_28px_rgba(12,35,64,0.08)] lg:hidden"
          aria-label={open ? (lang === "zh" ? "关闭菜单" : "Close menu") : lang === "zh" ? "打开菜单" : "Open menu"}
          aria-expanded={open}
        >
          <span aria-hidden="true">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-[color:var(--border)] bg-[rgba(255,255,255,0.96)] lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-4">
            <div className="mb-2 flex justify-start">
              <LanguageSwitcher label={content.switcherLabel} />
            </div>
            {content.navigation.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]"
                      : "bg-white text-[color:var(--foreground-muted)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-primary mt-2">
              {content.headerCta}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
