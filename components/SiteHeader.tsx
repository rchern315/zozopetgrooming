export default function SiteHeader({ active = "" }: { active?: string }) {
  const links = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Gallery", "/gallery"],
    ["About", "/about"],
    ["Reviews", "/reviews"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="site-header">
      <a className="brand brand-lockup" href="/" aria-label="Zozo's Pet Grooming home">
        <img className="brand-logo" src="/logo.png" alt="Zozo’s Pet Grooming" />
        <span className="brand-moon" aria-hidden="true">☾</span>
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
