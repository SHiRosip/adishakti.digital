import "../styles/contact.css";

function Contact() {
  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Let’s Build Something Great Together</p>
      </section>

      {/* MAIN SECTION */}
      <section className="contact-section">

        {/* FORM */}
        <div className="contact-form">
          <h2>Let’s Talk About Your Idea</h2>

          <form>
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Company Name" />
            </div>

            <div className="form-row">
              <input type="tel" placeholder="Mobile No." />
              <input type="email" placeholder="Email Address" />
            </div>

            {/* SELECT SERVICE */}
            <select>
              <option value="">Select Service</option>
              <option>Search Engine Optimization (SEO)</option>
              <option>Pay-Per-Click Advertising (PPC)</option>
              <option>Social Media Marketing (SMM)</option>
              <option>Website Development</option>
              <option>Mobile App Development</option>
              <option>Branding & Graphic Design</option>
              <option>Online Reputation Management (ORM)</option>
              <option>Content Marketing & Copywriting</option>
              <option>Video Marketing & YouTube SEO</option>
            </select>

            <textarea placeholder="Describe your project"></textarea>

            <button type="submit">Submit Now</button>
          </form>
        </div>

        {/* DETAILS */}
        <div className="contact-details">
          <h2>🏢आदिशक्ति.digital</h2>

          <p>📞 +91 8093302712</p>
          <p>📧 info.adishaktigroup@gmail.com</p>
          <p>🌐 www.adishakti.digital</p>
          <p>
            📍 Bhubaneswar, Odisha, India
          </p>

          <div className="business-hours">
            <h4>Business Hours</h4>
            <p>Monday – Saturday: 10:00 AM – 7:00 PM</p>
            <p>Sunday: Closed (Available via email)</p>
          </div>
        </div>

      </section>

      {/* WHY REACH OUT */}
      <section className="contact-why">
        <h2>Why Reach Out to Adishakti.digital?</h2>
        <ul>
          <li>Local team with deep knowledge of the Odisha market</li>
          <li>Full-service digital solutions under one roof</li>
          <li>Fast, friendly, and expert support</li>
          <li>Transparent process and clear communication</li>
          <li>Trusted by clients across industries</li>
        </ul>
      </section>

      {/* FINAL CTA */}
      <section className="contact-cta">
        <h2>Let’s Start Your Digital Success Story</h2>
        <p>
          You’ve got the vision. We’ve got the tools, skills, and passion to
          make it real.
        </p>
        <p className="tagline">
          Adishakti.digital — Empowering Brands, Digitally.
        </p>
      </section>

    </main>
  );
}

export default Contact;
