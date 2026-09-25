import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ContactPage() {
  return (
    <main className="home-page">
      <SiteHeader active="contact" />
      <section className="inner-hero contact-hero">
        <p className="eyebrow">Ready for a fresh cut?</p>
        <h1>Call, Connect,<br /><span>or Say Hi.</span></h1>
        <p>Questions about grooming, availability, or which service is right for your pup? Reach out and Zozo’s will help you get started.</p>
        <div className="cta-row">
          <a className="button button-primary" href="tel:+17754692228"><i className="fa-solid fa-phone" aria-hidden="true" /> Call to Book</a>
          <a className="button button-secondary" href="https://www.instagram.com/zozo_loki/" target="_blank" rel="noreferrer">Instagram →</a>
        </div>
      </section>

      <section className="section contact-grid">
        <article className="contact-card"><i className="fa-solid fa-phone" aria-hidden="true"/><h3>Call</h3><a href="tel:+17754692228">775-469-2228</a><p>Questions, availability, and appointment help.</p></article>
        <article className="contact-card"><i className="fa-brands fa-instagram" aria-hidden="true"/><h3>Instagram</h3><a target="_blank" rel="noreferrer" href="https://www.instagram.com/zozo_loki/">@zozo_loki</a><p>Recent grooms, client pups, and behind-the-scenes posts.</p></article>
        <article className="contact-card"><i className="fa-brands fa-facebook" aria-hidden="true"/><h3>Facebook</h3><a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61551451768672">Zozo’s Pet Grooming</a><p>Follow business updates and connect with Zozo’s.</p></article>
      </section>

      <section className="section team-socials">
        <div className="section-heading">
          <p className="eyebrow bone-label">🦴 &nbsp; Follow the Team &nbsp; 🦴</p>
          <h2>More Grooming on Instagram</h2>
        </div>
        <div className="team-social-grid">
          <a className="team-social-card" target="_blank" rel="noreferrer" href="https://www.instagram.com/zozo_loki/">
            <i className="fa-brands fa-instagram" aria-hidden="true" />
            <span><strong>Zoë / Zozo’s</strong><small>@zozo_loki</small></span>
          </a>
          <a className="team-social-card" target="_blank" rel="noreferrer" href="https://www.instagram.com/rachellehopkins1/">
            <i className="fa-brands fa-instagram" aria-hidden="true" />
            <span><strong>Rachelle Hopkins</strong><small>@rachellehopkins1</small></span>
          </a>
        </div>
      </section>

      <section className="section centered-cta contact-final">
        <p className="eyebrow">Good pups look better here</p>
        <h2>Ready for a Fresh Groom?</h2>
        <p>Call Zozo’s to ask about current availability.</p>
        <a className="button button-primary" href="tel:+17754692228">775-469-2228</a>
      </section>
      <SiteFooter />
    </main>
  );
}
