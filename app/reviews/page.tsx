import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const reviews = [
  ["Zoë is amazing! My pup always looks and feels so good after her appointments. She’s patient, kind, and really knows dogs!","Marisa R."],
  ["The best groomer in Reno! My dog can be anxious, but Zoë makes her feel so comfortable. The results are always perfect!","Tyler M."],
  ["Obsessed with Zozo’s! The attention to detail and the cute styles are unmatched. My pup always leaves so happy!","Jenna L."],
  ["Our dog came home soft, happy, and looking adorable. The whole experience felt personal and calm.","Happy Pet Parent"],
  ["You can tell Zoë genuinely cares about the dogs she works with. We won’t go anywhere else.","Repeat Client"],
  ["Great communication, beautiful groom, and my pup was relaxed when I picked her up.","Local Client"],
];

export default function ReviewsPage() {
  return (
    <main className="home-page">
      <SiteHeader active="reviews" />
      <section className="inner-hero">
        <p className="eyebrow">What pet parents are saying</p>
        <h1>Happy Pups.<br /><span>Happier Humans.</span></h1>
        <div className="big-rating"><span>★★★★★</span><strong>5.0</strong><small>Featured client feedback</small></div>
      </section>
      <section className="section">
        <div className="review-grid review-page-grid">
          {reviews.map(([quote,name]) => (
            <blockquote className="review-card large-review" key={name}>
              <div className="stars">★★★★★</div><p>“{quote}”</p><footer>— {name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
      <section className="section centered-cta">
        <p className="eyebrow">Love your groom?</p><h2>Share the Love</h2>
        <p>We can feature client feedback from Facebook, Google, and direct messages here.</p>
        <div className="cta-row centered">
          <a className="button button-primary" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61551451768672">Visit Facebook</a>
          <a className="button button-secondary" target="_blank" rel="noreferrer" href="https://www.instagram.com/zozo_loki/">Visit Instagram</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
