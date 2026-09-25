const services = [
  { icon: "fa-bath", title: "Bath & Brush", text: "A deep clean, blow dry, and full brush out for a fresh, fluffy pup." },
  { icon: "fa-scissors", title: "Full Groom", text: "Complete grooming including bath, haircut, ear cleaning, and nail trim. Customized to your pup!" },
  { icon: "fa-hand-scissors", title: "Nail Trim", text: "Quick, safe, and stress-free nail trims to keep your pup comfy and healthy." },
  { icon: "fa-brush", title: "Deshedding", text: "Reduce loose fur and keep your home (and pup) happier with our deshedding treatments." },
  { icon: "fa-paw", title: "Puppy Intro Groom", text: "A gentle, positive first grooming experience to help your puppy build confidence." },
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

const reviews = [
  { quote: "Zoë is amazing! My pup always looks and feels so good after her appointments. She’s patient, kind, and really knows dogs!", name: "Marisa R." },
  { quote: "The best groomer in Reno! My dog can be anxious, but Zoë makes her feel so comfortable. The results are always perfect!", name: "Tyler M." },
  { quote: "Obsessed with Zozo’s! The attention to detail and the cute styles are unmatched. My pup always leaves so happy!", name: "Jenna L." },
];

function Doodle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={"doodle " + className} aria-hidden="true">{children}</span>;
}

export default function Home() {
  return (
    <main className="home-page">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zozo's Pet Grooming home">
          <span className="brand-dog" aria-hidden="true">🐕</span>
          <span className="brand-copy"><strong>ZOZO’S</strong><small>PET GROOMING</small></span>
          <Doodle className="brand-star">✦</Doodle><Doodle className="brand-moon">☾</Doodle>
        </a>
        <nav aria-label="Primary navigation">
          <a className="active" href="#top">Home</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About</a>
          <a href="/reviews">Reviews</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="button button-primary header-cta" href="tel:+17754692228">
          <i className="fa-solid fa-phone" aria-hidden="true" /> Call to Book
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Professional pet grooming with personality</p>
          <h1>Fresh Cuts.<br />Clean Pups.<br /><span>Killer Style.</span></h1>
          <p className="hero-text">At Zozo’s Pet Grooming, we believe grooming is more than just a bath — it’s self care, confidence, and a little bit of attitude. Every pup leaves looking fresh, feeling great, and ready to take on the world.</p>
          <div className="cta-row">
            <a className="button button-primary" href="tel:+17754692228"><i className="fa-solid fa-phone" aria-hidden="true" /> Call to Book</a>
            <a className="button button-secondary" href="/services">View Services <span aria-hidden="true">→</span></a>
          </div>
          <Doodle className="hero-star star-a">✦</Doodle>
          <Doodle className="hero-star star-b">★</Doodle>
          <Doodle className="hero-bone bone-a">🦴</Doodle>
        </div>

        <div className="hero-visual">
          <img className="hero-dog" src="https://images.unsplash.com/photo-1594149929911-78975a43d4f5?auto=format&fit=crop&w=1200&q=90" alt="Happy black and white dog" />
          <div className="coffin-card" aria-hidden="true">
            <span className="tiny-bone">🦴</span>
            <strong>GOOD<br />PUPS<br />LOOK<br /><em>BETTER</em><br />HERE.</strong>
            <span className="moon">☾</span>
          </div>
          <p className="scribble hero-note">Same<br />Pups.<br />More<br />Personality. ♡</p>
          <Doodle className="green-heart gh1">♡</Doodle>
          <Doodle className="green-heart gh2">♡</Doodle>
          <Doodle className="hero-spark hs1">✦</Doodle>
          <Doodle className="hero-spark hs2">★</Doodle>
        </div>
      </section>

      <div className="rough-divider" aria-hidden="true" />

      <section className="section services-preview" aria-labelledby="services-heading">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow bone-label">🦴 &nbsp; Our Services &nbsp; 🦴</p>
            <h2 id="services-heading">Grooming for Every Kind <span>of</span> Good Pup</h2>
          </div>
          <p>From simple clean-ups to full transformations, we offer a range of grooming services tailored to keep your pup healthy, comfortable, and looking their best.</p>
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

      <section className="section about" id="about" aria-labelledby="about-heading">
        <div className="about-photo torn-frame">
          <img src="/zoe-and-dog.jpg" alt="Zoë Toranzo with her dog" />
          <Doodle className="photo-heart ph1">♡</Doodle>
          <Doodle className="photo-heart ph2">♡</Doodle>
        </div>

        <div className="about-copy">
          <p className="eyebrow bone-label">🦴 &nbsp; Meet the Groomer &nbsp; 🦴</p>
          <h2 id="about-heading">Hi, I’m <span>Zoë Toranzo!</span></h2>
          <p>I started Zozo’s Pet Grooming because I believe every pup deserves to feel good, look good, and be treated with kindness, patience, and a little bit of personality. Grooming isn’t just my job — it’s my passion, and I’m so lucky to get to do what I love.</p>
          <p>I specialize in creating a calm, positive experience for every pup, whether they’re here for a simple bath or a full style glow-up. All breeds, all personalities, always welcome!</p>
          <div className="about-points">
            <span><b>♡</b> Patient<br />&amp; Gentle</span>
            <span><b>🐾</b> All Breeds<br />Welcome</span>
            <span><b>☆</b> Style<br />With Personality</span>
          </div>
        </div>

        <div className="about-side">
          <div className="coffin-photo">
            <img src="/zoe-and-dog.jpg" alt="Zoë Toranzo with her dog" />
            <Doodle className="coffin-heart">♡</Doodle>
          </div>
          <p className="scribble side-note">Clean<br />Pups<br />Happier<br />Pups<br />Kinder<br />World ♡</p>
          <Doodle className="side-star">★</Doodle>
        </div>
      </section>

      <section className="section gallery-preview" aria-labelledby="gallery-heading">
        <div className="section-heading gallery-title-row">
          <div>
            <p className="eyebrow bone-label">🦴 &nbsp; Gallery Highlights &nbsp; 🦴</p>
            <h2 id="gallery-heading">Real Pups. Real Results.</h2>
          </div>
          <p>Take a look at some of our favorite groomed pups! Each pup is unique, and we love helping them look and feel their best.</p>
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
          <div className="rating" aria-label="5.0 average rating"><span>★★★★★</span> <b>5.0</b> Average Rating</div>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <blockquote className="review-card" key={review.name}>
              <p>“{review.quote}”</p>
              <footer><span aria-hidden="true">★★★★★</span> — {review.name}</footer>
              <Doodle className="review-heart">♡</Doodle>
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

      <footer className="footer" id="contact">
        <a className="brand footer-brand" href="#top" aria-label="Back to top">
          <span className="brand-dog" aria-hidden="true">🐕</span>
          <span className="brand-copy"><strong>ZOZO’S</strong><small>PET GROOMING</small></span>
        </a>
        <a href="tel:+17754692228"><i className="fa-solid fa-phone" aria-hidden="true" /> <b>775-469-2228</b><br /><small>Call for appointments</small></a>
        <a href="https://www.instagram.com/zozo_loki/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" aria-hidden="true" /> <b>@ZOZO_LOKI</b><br /><small>Follow on Instagram</small></a>
        <a href="https://www.facebook.com/profile.php?id=61551451768672" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook" aria-hidden="true" /> <b>Follow</b><br /><small>On Facebook</small></a>
        <span className="footer-bone" aria-hidden="true">🦴</span>
        <p className="scribble">Clean pups.<br />Happier lives. ♡</p>
      </footer>
    </main>
  );
}
