export default function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <a className="brand footer-brand" href="/" aria-label="Zozo's Pet Grooming home">
        <span className="brand-dog" aria-hidden="true">🐕</span>
        <span className="brand-copy"><strong>ZOZO’S</strong><small>PET GROOMING</small></span>
      </a>
      <a href="tel:+17754692228"><i className="fa-solid fa-phone" aria-hidden="true" /> <b>775-469-2228</b><br /><small>Call for appointments</small></a>
      <a href="https://www.instagram.com/zozo_loki/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" aria-hidden="true" /> <b>@ZOZO_LOKI</b><br /><small>Follow on Instagram</small></a>
      <a href="https://www.facebook.com/profile.php?id=61551451768672" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook" aria-hidden="true" /> <b>Follow</b><br /><small>On Facebook</small></a>
      <span className="footer-bone" aria-hidden="true">🦴</span>
      <p className="scribble">Clean pups.<br />Happier lives. ♡</p>
    </footer>
  );
}
