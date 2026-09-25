import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const placeholders = [
  "Verified Facebook and client feedback will be featured here.",
  "This space is ready for a favorite review from a happy pet parent.",
  "Add another verified client testimonial here.",
  "Client review coming soon.",
  "More happy-pup feedback coming soon.",
  "Verified testimonial coming soon.",
];

export default function ReviewsPage() {
  return (
    <main className="home-page">
      <SiteHeader active="reviews" />
      <section className="inner-hero reviews-hero">
        <p className="eyebrow">What pet parents are saying</p>
        <h1>Happy Pups.<br /><span>Happier Humans.</span></h1>
        <p>We’ll feature verified client feedback here so visitors can hear directly from Zozo’s pet parents.</p>
      </section>
      <section className="section">
        <div className="review-grid review-page-grid">
          {placeholders.map((quote,i) => (
            <blockquote className="review-card large-review" key={quote}>
              <div className="stars" aria-hidden="true">★★★★★</div>
              <p>{quote}</p>
              <footer>— Review {i + 1}</footer>
            </blockquote>
          ))}
        </div>
      </section>
      <section className="section centered-cta">
        <p className="eyebrow">Find Zozo’s online</p>
        <h2>Follow the Latest Grooms</h2>
        <div className="cta-row centered">
          <a className="button button-primary" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61551451768672">Facebook</a>
          <a className="button button-secondary" target="_blank" rel="noreferrer" href="https://www.instagram.com/zozo_loki/">Instagram</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
