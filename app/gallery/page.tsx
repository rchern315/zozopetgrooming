import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const dogs = [
  ["Black fluffy pup","https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=88"],
  ["Yorkie","https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=900&q=88"],
  ["White fluffy pup","https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=900&q=88"],
  ["Husky","https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=900&q=88"],
  ["Curly doodle","https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=900&q=88"],
  ["Terrier","https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=88"],
  ["Old English Sheepdog","https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=88"],
  ["Happy pup","https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=88"],
  ["Fluffy dog","https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?auto=format&fit=crop&w=900&q=88"],
  ["Groomed pup","https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=88"],
  ["Sweet pup","https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=88"],
  ["Curly pup","https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=88"],
];

export default function GalleryPage() {
  return (
    <main className="home-page">
      <SiteHeader active="gallery" />
      <section className="inner-hero gallery-hero">
        <p className="eyebrow">Fresh cuts gallery</p>
        <h1>Real Pups.<br /><span>Real Personality.</span></h1>
        <p>A growing collection of Zozo’s groomed pups, clean-ups, fresh cuts, and full glow-ups.</p>
      </section>

      <section className="section">
        <div className="filter-row" aria-label="Gallery categories">
          {["All","Full Grooms","Puppies","Deshedding","Small Dogs","Big Dogs","Seasonal Styles"].map(x => <span key={x}>{x}</span>)}
        </div>
        <div className="masonry-grid">
          {dogs.map(([alt,src],i) => <figure className={"masonry-card m-"+(i%4)} key={alt}><img src={src} alt={alt}/><figcaption>♡ Zozo’s fresh groom</figcaption></figure>)}
        </div>
      </section>

      <section className="section social-callout">
        <div><p className="eyebrow">More pups, more personality</p><h2>Follow @ZOZO_LOKI</h2><p>See recent grooms, behind-the-scenes moments, and fresh client photos.</p></div>
        <div className="cta-row">
          <a className="button button-primary" target="_blank" rel="noreferrer" href="https://www.instagram.com/zozo_loki/">Instagram</a>
          <a className="button button-secondary" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61551451768672">Facebook</a>
        </div>
      </section>

      <section className="section centered-cta">
        <p className="eyebrow">Seen something you love?</p><h2>Book a Similar Style</h2>
        <a className="button button-primary" href="tel:+17754692228">Call to Book</a>
      </section>
      <SiteFooter />
    </main>
  );
}
