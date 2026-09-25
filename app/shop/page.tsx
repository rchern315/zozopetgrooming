import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const products = [
  ["Shampoo","Gentle cleansing shampoo for fresh, clean coats.","$—","fa-pump-soap"],
  ["Detangler","Helps loosen knots and make brushing easier.","$—","fa-spray-can-sparkles"],
  ["Coat Perfume","A finishing spritz for that just-groomed smell.","$—","fa-bottle-droplet"],
  ["Paw Balm","Moisturizing care for dry paw pads.","$—","fa-paw"],
];

export default function ShopPage() {
  return (
    <main className="home-page">
      <SiteHeader active="shop" />
      <section className="inner-hero">
        <p className="eyebrow">Take the good hair day home</p>
        <h1>Zozo’s<br /><span>Shop.</span></h1>
        <p>Grooming favorites for clean coats, soft fur, and fresh-smelling pups.</p>
      </section>
      <section className="section">
        <div className="product-grid">
          {products.map(([name,desc,price,icon]) => (
            <article className="product-card" key={name}>
              <div className="product-image"><i className={"fa-solid "+icon} aria-hidden="true"/></div>
              <p className="eyebrow">Zozo’s pick</p><h3>{name}</h3><p>{desc}</p><strong>{price}</strong>
              <button className="button button-secondary" type="button">Add to Cart</button>
            </article>
          ))}
        </div>
        <div className="pricing-note">Product checkout will be connected to Square so inventory, payments, receipts, and fulfillment stay in Zoë’s existing system.</div>
      </section>
      <SiteFooter />
    </main>
  );
}
