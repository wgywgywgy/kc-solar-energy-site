import Link from "next/link";

export function CtaBanner({
  eyebrow = "Project Engagement",
  title = "Build a cleaner, more resilient energy roadmap with KC Solar Energy.",
  description = "We support photovoltaic and energy storage inquiries with clear communication, practical product alignment, and responsive business follow-up.",
  primaryHref = "/contact",
  primaryLabel = "Talk to Our Team",
  secondaryHref = "/solutions",
  secondaryLabel = "Explore Solutions"
}) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="cta-shell overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#15355f_0%,#0f2747_100%)] px-6 py-10 text-white shadow-[0_24px_90px_rgba(15,39,71,0.2)] md:px-10 md:py-12">
          <div className="cta-orb cta-orb-a" />
          <div className="cta-orb cta-orb-b" />
          <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <span className="eyebrow border-white/15 bg-white/10 text-white">{eyebrow}</span>
              <h2 className="section-title headline-balance max-w-2xl font-semibold">{title}</h2>
              <p className="max-w-xl text-base leading-8 text-white/80">{description}</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link href={primaryHref} className="btn-ghost w-full md:w-auto">
                {primaryLabel}
              </Link>
              {secondaryHref && secondaryLabel ? (
                <Link
                  href={secondaryHref}
                  className="btn-secondary w-full border-white/15 bg-white text-[color:var(--foreground)] md:w-auto"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
