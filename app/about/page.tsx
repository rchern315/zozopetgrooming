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
        <div className="torn-frame about-large-photo"><img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=88" alt="Zoë with a dog"/></div>
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
      <SiteFooter />
    </main>
  );
}
