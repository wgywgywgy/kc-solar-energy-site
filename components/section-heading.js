export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`section-heading-shell ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title headline-balance max-w-3xl font-semibold">{title}</h2>
      {description ? (
        <p className="section-heading-copy lead-copy">{description}</p>
      ) : null}
    </div>
  );
}
