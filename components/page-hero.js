export function PageHero({ eyebrow, title, description, children, visual = null }) {
  const content = (
    <div className="page-hero-copy">
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-5">
        <h1 className="page-title headline-balance max-w-3xl font-semibold">{title}</h1>
        <p className="lead-copy">{description}</p>
      </div>
      {children}
    </div>
  );

  return (
    <section className="page-hero">
      <div className="container-shell">
        <div className="hero-panel surface-card-strong page-hero-shell fine-grid">
          <div className="hero-orb hero-orb-a" />
          <div className="hero-orb hero-orb-b" />
          {visual ? (
            <div className="grid gap-10 xl:grid-cols-[0.96fr_1.04fr] xl:items-center">
              {content}
              <div>{visual}</div>
            </div>
          ) : (
            content
          )}
        </div>
      </div>
    </section>
  );
}
