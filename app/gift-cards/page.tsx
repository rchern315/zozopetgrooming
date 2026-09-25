import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function GiftCardsPage() {
  return (
    <main className="home-page">
      <SiteHeader />
      <section className="inner-hero gift-hero">
        <p className="eyebrow">Give the gift of a fresh pup</p>
        <h1>Zozo’s<br /><span>Gift Cards.</span></h1>
        <p>Perfect for birthdays, holidays, new pet parents, or anyone whose pup deserves a spa day.</p>
      </section>
      <section className="section gift-card-layout">
        <div className="gift-card-art">
          <span>🦴</span><h2>ZOZO’S</h2><strong>PET GROOMING</strong><p>GOOD PUPS<br/>LOOK BETTER HERE.</p><small>Gift Card</small>
        </div>
        <div className="gift-card-copy">
          <p className="eyebrow">Digital + printable</p><h2>Send a Little Pup Pampering</h2>
          <p>Square can handle the actual gift-card purchase and redemption. We’ll connect this button to Zoë’s Square gift-card checkout once the live link is provided.</p>
          <div className="gift-values"><span>$25</span><span>$50</span><span>$75</span><span>$100</span><span>Custom</span></div>
          <a className="button button-primary" href="tel:+17754692228">Call About Gift Cards</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
