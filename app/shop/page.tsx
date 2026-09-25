import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const products = [
  ["Shampoo","Gentle cleansing shampoo for fresh, clean coats.","fa-pump-soap"],
  ["Detangler","Helps loosen knots and make brushing easier.","fa-spray-can-sparkles"],
  ["Coat Perfume","A finishing spritz for that just-groomed smell.","fa-bottle-droplet"],
  ["Paw Balm","Moisturizing care for dry paw pads.","fa-paw"],
];

export default function ShopPage() {
  return (
    <main className="home-page">
      <SiteHeader />
      <section className="inner-hero shop-hero">
        <p className="eyebrow">Take the good hair day home</p>
        <h1>Zozo’s<br /><span>Shop.</span></h1>
        <p>Grooming favorites for clean coats, soft fur, and fresh-smelling pups. Online purchasing is coming soon.</p>
      </section>
      <section className="section">
        <div className="product-grid">
          {products.map(([name,desc,icon]) => (
            <article className="product-card" key={name}>
              <div className="product-image"><i className={"fa-solid "+icon} aria-hidden="true"/></div>
              <p className="eyebrow">Zozo’s pick</p>
              <h3>{name}</h3>
              <p>{desc}</p>
              <span className="coming-soon-pill">Coming Soon</span>
              <a className="button button-secondary" href="tel:+17754692228">Ask About It</a>
            </article>
          ))}
        </div>
      </section>
      <section className="section centered-cta">
        <p className="eyebrow">Want something specific?</p>
        <h2>Ask Zoë What She Recommends</h2>
        <a className="button button-primary" href="tel:+17754692228">Call Zozo’s</a>
      </section>
      <SiteFooter />
    </main>
  );
}
