export default function SiteHeader({ active = "" }: { active?: string }) {
  const links = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Gallery", "/gallery"],
    ["About", "/about"],
    ["Reviews", "/reviews"],
    ["Shop", "/shop"],
    ["Contact", "/contact"],
  ];
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Zozo's Pet Grooming home">
        <span className="brand-dog" aria-hidden="true">🐕</span>
        <span className="brand-copy"><strong>ZOZO’S</strong><small>PET GROOMING</small></span>
        <span className="doodle brand-star" aria-hidden="true">✦</span>
        <span className="doodle brand-moon" aria-hidden="true">☾</span>
      </a>
      <nav aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} className={active === label.toLowerCase() ? "active" : ""} href={href}>{label}</a>
        ))}
      </nav>
      <a className="button button-primary header-cta" href="tel:+17754692228">
        <i className="fa-solid fa-phone" aria-hidden="true" /> Call to Book
      </a>
    </header>
  );
}
