"use client";

import Link from "next/link";

import { useSharedCopy } from "@/components/lang-provider";

export function SiteFooter() {
  const content = useSharedCopy();

  return (
    <footer className="mt-12 border-t border-[color:var(--border)] bg-[rgba(11,23,40,0.985)] text-white">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.1fr_0.85fr_0.95fr_0.95fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,#2b5690,#102846)] text-sm font-black tracking-[0.16em] text-white">
              KC
            </div>
            <div>
              <div className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/60">
                {content.brandTitle}
              </div>
              <div className="text-sm text-white/80">{content.brandSubtitle}</div>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/70">{content.footerDescription}</p>
          <div className="grid gap-3 text-sm text-white/78">
            <p>
              <span className="font-semibold text-white/92">{content.footerBusinessLabel}: </span>
              {content.footerBusiness}
            </p>
            <p>
              <span className="font-semibold text-white/92">{content.footerAddressLabel}: </span>
              {content.footerAddress}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/55">{content.footerPages}</h3>
          <div className="grid gap-3 text-sm text-white/78">
            {content.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy-policy" className="transition hover:text-white">
              {content.privacyLabel}
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/55">{content.footerContact}</h3>
          <div className="grid gap-3 text-sm text-white/78">
            <p>
              <span className="font-semibold text-white/90">{content.footerEmailLabel}: </span>
              <a href={`mailto:${content.footerEmail}`} className="transition hover:text-white">
                {content.footerEmail}
              </a>
            </p>
            <p>
              <span className="font-semibold text-white/90">{content.footerPhoneLabel}: </span>
              {content.footerPhone}
            </p>
            <p>
              <span className="font-semibold text-white/90">{content.footerAddressLabel}: </span>
              {content.footerAddress}
            </p>
            <Link href="/contact" className="inline-flex pt-2 text-white transition hover:text-[#c9a868]">
              {content.footerLink}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-4 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>{content.brandTitle}</p>
          <Link href="/privacy-policy" className="transition hover:text-white">
            {content.privacyLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
