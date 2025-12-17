import "../styles/services.css";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    const steps = document.querySelectorAll(".step");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );
  
    steps.forEach((step) => observer.observe(step));
  
    return () => observer.disconnect();
  }, []);
  
  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          Complete Digital Solutions Under One Roof – Adishakti Digital,
          Bhubaneswar
        </p>
      </section>

      {/* DIGITAL MARKETING */}
      <section className="services-grid-section">
        <h2 className="service-category">Digital Marketing & Advertising</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Search Engine Optimization (SEO)</h3>
            <p>
              Improve your website rankings on Google and drive organic traffic
              with our result-driven SEO services in Bhubaneswar.
            </p>
          </div>

          <div className="service-card">
            <h3>Pay-Per-Click (PPC) Advertising</h3>
            <p>
              Launch high-converting Google Ads campaigns to generate quality
              leads and measurable ROI.
            </p>
          </div>

          <div className="service-card">
            <h3>Social Media Marketing (SMM)</h3>
            <p>
              Grow your brand visibility and engagement on Instagram, Facebook,
              and LinkedIn with targeted strategies.
            </p>
          </div>

          <div className="service-card">
            <h3>Online Reputation Management (ORM)</h3>
            <p>
              Protect and enhance your brand’s online image across search
              engines and social platforms.
            </p>
          </div>

          <div className="service-card">
            <h3>Conversion Rate Optimization (CRO)</h3>
            <p>
              Turn website visitors into customers with data-driven CRO
              techniques and UX improvements.
            </p>
          </div>

          <div className="service-card">
            <h3>Content Marketing & Copywriting</h3>
            <p>
              High-quality content that builds trust, improves SEO, and converts
              users into loyal customers.
            </p>
          </div>

          <div className="service-card">
            <h3>Video Marketing & YouTube SEO</h3>
            <p>
              Boost reach and engagement with professional video marketing and
              YouTube optimization.
            </p>
          </div>

          <div className="service-card">
            <h3>Mobile Marketing & SMS Campaigns</h3>
            <p>
              Reach your audience instantly with targeted mobile and SMS
              marketing campaigns.
            </p>
          </div>

          <div className="service-card">
            <h3>Influencer & Affiliate Marketing</h3>
            <p>
              Expand your brand reach through trusted influencers and affiliate
              partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* CUSTOMER ENGAGEMENT */}
      <section className="services-grid-section">
        <h2 className="service-category">Customer Engagement & Automation</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Digital Customer Service & Chatbots</h3>
            <p>
              Automate customer interactions with smart chatbots and digital
              customer support solutions.
            </p>
          </div>

          <div className="service-card">
            <h3>Content Creation & Engagement Tools</h3>
            <p>
              Tools and strategies designed to keep your audience engaged and
              connected with your brand.
            </p>
          </div>
        </div>
      </section>

      {/* WEB & APP */}
      <section className="services-grid-section">
        <h2 className="service-category">Web, App & Creative Development</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>React-Based Website Development</h3>
            <p>
              Fast, modern, SEO-friendly websites built using React and the
              latest technologies.
            </p>
          </div>

          <div className="service-card">
            <h3>Branding & Graphic Design</h3>
            <p>
              Logos, banners, creatives, and complete brand identity design for
              businesses.
            </p>
          </div>

          <div className="service-card">
            <h3>App Store Optimization (ASO)</h3>
            <p>
              Improve app visibility and downloads on Google Play Store and
              Apple App Store.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="services-process">
        <h2>How We Work</h2>

        <div className="process-steps">
          <div className="step animate-left">01. Research & Strategy</div>
          <div className="step animate-left">02. Planning & Design</div>
          <div className="step animate-right">03. Execution & Optimization</div>
          <div className="step animate-right">04. Growth & Support</div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Let’s Build Your Digital Future Together</h2>
        <p>
          Partner with Adishakti Digital to grow your business with powerful
          digital marketing solutions.
        </p>
        <a href="/contact" className="cta-btn">
          Get Free Consultation
        </a>
      </section>
    </main>
  );
}

export default Services;
