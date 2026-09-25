import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <main className="home-page">
      <SiteHeader active="about" />
      <section className="inner-hero">
        <p className="eyebrow">Meet the groomer</p>
        <h1>Hi, I’m<br /><span>Zoë Toranzo.</span></h1>
        <p>Professional grooming with patience, personality, and a whole lot of love for dogs.</p>
      </section>

      <section className="section about-page-grid">
        <div className="torn-frame about-large-photo"><img src="/zoe-and-dog.jpg" alt="Zoë Toranzo with her dog"/></div>
        <div className="about-story">
          <p className="eyebrow bone-label">🦴 &nbsp; The Zozo’s Story &nbsp; 🦴</p>
          <h2>A Calm Grooming Experience With Personality</h2>
          <p>I started Zozo’s Pet Grooming because every pup deserves to feel good, look good, and be treated with kindness and patience.</p>
          <p>My goal is to make grooming feel less stressful and more personal. Whether your dog needs a simple bath, a tidy-up, or a full style transformation, every appointment is tailored to the pup in front of me.</p>
          <div className="value-grid">
            <div><b>♡</b><strong>Patient & Gentle</strong><span>Comfort comes first.</span></div>
            <div><b>🐾</b><strong>All Breeds Welcome</strong><span>Every coat, size, and personality.</span></div>
            <div><b>☆</b><strong>Style With Personality</strong><span>Fresh looks without losing who they are.</span></div>
          </div>
        </div>
      </section>

      <section className="section team-socials">
        <div className="section-heading">
          <p className="eyebrow bone-label">🦴 &nbsp; Follow the Team &nbsp; 🦴</p>
          <h2>See More Fresh Grooms on Instagram</h2>
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
      <SiteFooter />
    </main>
  );
}
