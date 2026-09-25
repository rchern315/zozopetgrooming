import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PackageCards from "@/components/PackageCards";

const services = [
  ["fa-bath","Bath & Brush","Deep clean, blow dry, brush-out, and fresh finish."],
  ["fa-scissors","Full Groom","Bath, haircut/style, ears, nails, and finishing touches."],
  ["fa-hand-scissors","Nail Trim","Quick, safe trims to keep paws comfortable."],
  ["fa-brush","Deshedding","Coat-focused treatment to reduce loose fur and undercoat."],
  ["fa-paw","Puppy Intro Groom","A calm, positive first grooming experience."],
  ["fa-dog","Face, Feet & Fanny","A tidy-up between full grooming appointments."],
  ["fa-tooth","Teeth Brushing","A simple add-on for fresher breath and cleaner teeth."],
  ["fa-soap","Flea Bath","Targeted bath service when flea treatment is needed."],
  ["fa-star","Add-On Styling","Bandanas, bows, finishing spray, and personality."],
];

export default function ServicesPage() {
  return (
    <main className="home-page">
      <SiteHeader active="services" />
      <section className="inner-hero">
        <p className="eyebrow">Professional grooming with personality</p>
        <h1>Services for Every<br /><span>Kind of Pup.</span></h1>
        <p>Personalized grooming built around comfort, coat needs, and style.</p>
        <div className="cta-row">
          <a className="button button-primary" href="tel:+17754692228">Call to Book</a>
          <a className="button button-secondary" href="#packages">View Packages ↓</a>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><p className="eyebrow bone-label">🦴 &nbsp; Grooming Menu &nbsp; 🦴</p><h2>Pick the Service Your Pup Needs</h2></div>
        <div className="service-grid service-grid-3">
          {services.map(([icon,title,text]) => (
            <article className="service-card" key={title}>
              <i className={"fa-solid " + icon} aria-hidden="true" />
              <h3>{title}</h3><p>{text}</p><span className="mini-bone" aria-hidden="true">🦴</span>
            </article>
          ))}
        </div>
        <div className="pricing-note">Final pricing depends on breed, size, coat condition, temperament, and service needs.</div>
      </section>

      <section className="section" id="packages">
        <div className="section-heading"><p className="eyebrow bone-label">🦴 &nbsp; Popular Packages &nbsp; 🦴</p><h2>Our Most-Loved Grooming Packages</h2></div>
        <PackageCards />
      </section>

      <section className="section gift-shop-row">
        <article className="promo-card">
          <p className="eyebrow">Give a fresh start</p><h2>Gift Cards</h2>
          <p>Perfect for birthdays, holidays, new pet parents, or just because.</p>
          <a className="button button-secondary" href="/gift-cards">Buy Gift Cards →</a>
        </article>
        <article className="promo-card">
          <p className="eyebrow">Take the good hair day home</p><h2>Shop Zozo’s Picks</h2>
          <p>Shampoo, detangler, coat perfume, and other grooming favorites.</p>
          <a className="button button-secondary" href="/shop">Shop Products →</a>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
