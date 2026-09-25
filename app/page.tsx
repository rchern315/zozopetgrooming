import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const services = [
  { icon: "fa-bath", title: "Bath & Brush", text: "A deep clean, blow dry, and full brush out for a fresh, fluffy pup." },
  { icon: "fa-scissors", title: "Full Groom", text: "Complete grooming including bath, haircut, ear cleaning, and nail trim." },
  { icon: "fa-hand-scissors", title: "Nail Trim", text: "Quick, safe, stress-free nail trims to keep your pup comfy and healthy." },
  { icon: "fa-brush", title: "Deshedding", text: "Reduce loose fur and keep your home — and your pup — happier." },
  { icon: "fa-paw", title: "Puppy Intro Groom", text: "A gentle, positive first grooming experience for a lifetime of good groom days." },
];

const gallery = [
  ["Black fluffy pup", "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=88"],
  ["Yorkie style groom", "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=700&q=88"],
  ["White fluffy pup", "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=700&q=88"],
  ["Happy husky", "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=700&q=88"],
  ["Curly doodle", "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=700&q=88"],
  ["Groomed terrier", "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=700&q=88"],
  ["Old English Sheepdog", "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=88"],
];

const reviewPlaceholders = [
  "Verified client review will be featured here.",
  "More happy-pup feedback will be added here.",
  "Client testimonials coming soon.",
];

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader active="home" />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Professional pet grooming with personality</p>
          <h1>Fresh Cuts.<br />Clean Pups.<br /><span>Killer Style.</span></h1>
          <p className="hero-text">At Zozo’s Pet Grooming, grooming is more than just a bath — it’s self care, confidence, and a little bit of attitude. Every pup leaves looking fresh, feeling great, and ready to take on the world.</p>
          <div className="cta-row">
            <a className="button button-primary" href="tel:+17754692228"><i className="fa-solid fa-phone" aria-hidden="true" /> Call to Book</a>
            <a className="button button-secondary" href="/services">View Services <span aria-hidden="true">→</span></a>
          </div>
          <span className="doodle hero-star star-a" aria-hidden="true">✦</span>
          <span className="doodle hero-star star-b" aria-hidden="true">★</span>
          <span className="doodle hero-bone bone-a" aria-hidden="true">🦴</span>
        </div>

        <div className="hero-visual">
          <img className="hero-dog" src="https://images.unsplash.com/photo-1594149929911-78975a43d4f5?auto=format&fit=crop&w=1600&q=92" alt="Happy black and white dog" />
          <div className="coffin-card" aria-hidden="true">
            <span className="tiny-bone">🦴</span>
            <strong>GOOD<br />PUPS<br />LOOK<br /><em>BETTER</em><br />HERE.</strong>
            <span className="moon">☾</span>
          </div>
          <p className="scribble hero-note">Same Pups.<br />More Personality. ♡</p>
          <span className="doodle green-heart gh1" aria-hidden="true">♡</span>
          <span className="doodle green-heart gh2" aria-hidden="true">♡</span>
          <span className="doodle hero-spark hs1" aria-hidden="true">✦</span>
          <span className="doodle hero-spark hs2" aria-hidden="true">★</span>
        </div>
      </section>

      <div className="rough-divider" aria-hidden="true" />

      <section className="section services-preview" aria-labelledby="services-heading">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow bone-label">🦴 &nbsp; Our Services &nbsp; 🦴</p>
            <h2 id="services-heading">Grooming for Every Kind <span>of</span> Good Pup</h2>
          </div>
          <p>From simple clean-ups to full transformations, we offer grooming services tailored to keep your pup healthy, comfortable, and looking their best.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <i className={"fa-solid " + service.icon} aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="mini-bone" aria-hidden="true">🦴</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" aria-labelledby="about-heading">
        <div className="about-photo torn-frame">
          <img src="/zoe-and-dog.jpg" alt="Zoë Toranzo with her dog" />
          <span className="doodle photo-heart ph1" aria-hidden="true">♡</span>
          <span className="doodle photo-heart ph2" aria-hidden="true">♡</span>
        </div>

        <div className="about-copy">
          <p className="eyebrow bone-label">🦴 &nbsp; Meet the Groomer &nbsp; 🦴</p>
          <h2 id="about-heading">Hi, I’m <span>Zoë Toranzo!</span></h2>
          <p>I started Zozo’s Pet Grooming because I believe every pup deserves to feel good, look good, and be treated with kindness, patience, and a little bit of personality. Grooming isn’t just my job — it’s my passion.</p>
          <p>I specialize in creating a calm, positive experience for every pup, whether they’re here for a simple bath or a full style glow-up. All breeds, all personalities, always welcome!</p>
          <div className="about-points">
            <span><b>♡</b> Patient<br />&amp; Gentle</span>
            <span><b>🐾</b> All Breeds<br />Welcome</span>
            <span><b>☆</b> Style<br />With Personality</span>
          </div>
        </div>

        <div className="about-side">
          <div className="coffin-photo">
            <img src="/zoe-and-dog.jpg" alt="" />
            <span className="doodle coffin-heart" aria-hidden="true">♡</span>
          </div>
          <p className="scribble side-note">Clean<br />Pups<br />Happier<br />Pups<br />Kinder<br />World ♡</p>
          <span className="doodle side-star" aria-hidden="true">★</span>
        </div>
      </section>

      <section className="section gallery-preview" aria-labelledby="gallery-heading">
        <div className="section-heading gallery-title-row">
          <div>
            <p className="eyebrow bone-label">🦴 &nbsp; Gallery Highlights &nbsp; 🦴</p>
            <h2 id="gallery-heading">Real Pups. Real Results.</h2>
          </div>
          <p>Take a look at some of our favorite groomed pups. Each pup is unique, and we love helping them look and feel their best.</p>
          <a className="button button-secondary compact" href="/gallery">View Full Gallery →</a>
        </div>
        <div className="gallery-row">
          {gallery.map(([alt, src]) => (
            <div className="gallery-card" key={alt}>
              <img src={src} alt={alt} />
              <span aria-hidden="true">♡</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section reviews-preview" aria-labelledby="reviews-heading">
        <div className="section-heading reviews-title-row">
          <div>
            <p className="eyebrow bone-label">🦴 &nbsp; What Pet Parents Are Saying &nbsp; 🦴</p>
            <h2 id="reviews-heading">Happy Pups. Happier Humans.</h2>
          </div>
          <a className="button button-secondary compact" href="/reviews">Read Reviews →</a>
        </div>
        <div className="review-grid">
          {reviewPlaceholders.map((quote, i) => (
            <blockquote className="review-card" key={quote}>
              <div className="stars" aria-hidden="true">★★★★★</div>
              <p>{quote}</p>
              <footer>— Zozo’s client feedback</footer>
              <span className="doodle review-heart" aria-hidden="true">♡</span>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="social-strip" aria-label="Instagram preview">
        <div className="social-photos left-social">
          {gallery.slice(3,6).map(([alt,src], i) => <img key={alt} className={"tilt-" + i} src={src} alt="" />)}
        </div>
        <div className="social-center">
          <p>Follow our pups on Instagram</p>
          <a href="https://www.instagram.com/zozo_loki/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" aria-hidden="true" /> @ZOZO_LOKI</a>
          <small>Grooms • Good Pups • Behind the Scenes • More</small>
        </div>
        <div className="social-photos right-social">
          {gallery.slice(0,3).map(([alt,src], i) => <img key={alt} className={"tilt-" + i} src={src} alt="" />)}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
