export default function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <a className="brand brand-lockup footer-brand" href="/" aria-label="Zozo's Pet Grooming home">
        <img className="brand-logo footer-logo" src="/logo.png" alt="Zozo’s Pet Grooming" />
      </a>
      <a href="tel:+17754692228"><i className="fa-solid fa-phone" aria-hidden="true" /> <b>775-469-2228</b><br /><small>Call for appointments</small></a>
      <a href="https://www.instagram.com/zozo_loki/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" aria-hidden="true" /> <b>@ZOZO_LOKI</b><br /><small>Follow on Instagram</small></a>
      <a href="https://www.facebook.com/profile.php?id=61551451768672" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook" aria-hidden="true" /> <b>Follow</b><br /><small>On Facebook</small></a>
      <a href="/shop"><i className="fa-solid fa-bag-shopping" aria-hidden="true" /> <b>Shop</b><br /><small>Grooming favorites</small></a>
      <p className="scribble footer-slogan">Clean pups.<br />Happier lives. ♡</p>
    </footer>
  );
}
