import Image from "next/image";

export function VisualPanel({
  src,
  alt,
  eyebrow,
  title,
  description,
  items = [],
  priority = false
}) {
  return (
    <div className="panel-card panel-card-lg panel-card-soft visual-panel-shell">
      <div className="visual-panel-media">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={980}
          priority={priority}
          className="visual-panel-image"
        />
        <div className="visual-panel-glow" />
      </div>

      <div className="mt-5 panel-stack">
        {eyebrow ? <span className="chip chip-secondary">{eyebrow}</span> : null}
        {title ? <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3> : null}
        {description ? <p className="body-copy">{description}</p> : null}

        {items.length ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-[1.15rem] border border-[color:var(--border)] bg-white px-4 py-3 text-sm font-medium text-[color:var(--foreground-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
