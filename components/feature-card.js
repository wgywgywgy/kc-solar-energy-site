import Link from "next/link";

import { IconSymbol } from "@/components/icon-symbol";

export function FeatureCard({
  icon = "workflow",
  eyebrow,
  title,
  description,
  items = [],
  href,
  cta,
  tone = "default"
}) {
  const toneClass = tone === "soft" ? "feature-card-soft" : tone === "accent" ? "feature-card-accent" : "";

  return (
    <article className={`panel-card panel-card-lg feature-card ${toneClass}`.trim()}>
      <div className="feature-card-head">
        <div className="icon-frame">
          <IconSymbol name={icon} />
        </div>
        {eyebrow ? <span className="chip chip-secondary">{eyebrow}</span> : null}
      </div>

      <div className="panel-stack">
        <h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3>
        <p className="body-copy">{description}</p>

        {items.length ? (
          <div className="grid gap-3">
            {items.map((item) => (
              <div key={item} className="detail-pill">
                {item}
              </div>
            ))}
          </div>
        ) : null}

        {href && cta ? (
          <Link href={href} className="feature-link">
            {cta}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
