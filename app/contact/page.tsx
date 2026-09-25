import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ContactPage() {
  return (
    <main className="home-page">
      <SiteHeader active="contact" />
      <section className="inner-hero">
        <p className="eyebrow">Ready for a fresh cut?</p>
        <h1>Book, Call,<br /><span>or Say Hi.</span></h1>
        <p>Zozo’s uses Square for appointment booking. Once the live Square booking URL is added, this page will send clients straight into the booking flow.</p>
      </section>

      <section className="section contact-grid">
        <article className="contact-card"><i className="fa-solid fa-phone" aria-hidden="true"/><h3>Call</h3><a href="tel:+17754692228">775-469-2228</a><p>Questions, availability, and appointment help.</p></article>
        <article className="contact-card"><i className="fa-brands fa-instagram" aria-hidden="true"/><h3>Instagram</h3><a target="_blank" rel="noreferrer" href="https://www.instagram.com/zozo_loki/">@zozo_loki</a><p>Recent grooms and behind-the-scenes pups.</p></article>
        <article className="contact-card"><i className="fa-brands fa-facebook" aria-hidden="true"/><h3>Facebook</h3><a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61551451768672">Zozo’s Pet Grooming</a><p>Follow updates and message the business.</p></article>
      </section>
      <section className="section booking-placeholder">
        <p className="eyebrow">Square appointments</p><h2>Online Booking</h2>
        <p>Add Zoë’s Square booking URL here and the green button will take clients directly to available appointments.</p>
        <a className="button button-primary" href="tel:+17754692228">Call to Book for Now</a>
      </section>
      <SiteFooter />
    </main>
  );
}
