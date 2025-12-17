import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h2 className="hero-subtitle">आदिशक्ति</h2>
        <h1 className="hero-title">DIGITAL</h1>

        <p className="hero-description">
          आदिशक्ति.digital is a Bhubaneswar-based digital marketing company
          offering expert services in website development, mobile app
          development, social media marketing, SEO, and creative design. Build
          your brand online with us today.
        </p>

        <div className="hero-buttons">
          <a href="/services" className="btn-primary">
            Explore
          </a>
          <a href="/contact" className="btn-secondary">
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
