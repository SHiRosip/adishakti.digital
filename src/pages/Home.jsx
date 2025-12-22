import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import "../styles/home.css";
import seo from "../assets/icons/globe.svg"
import website from "../assets/icons/laptop-minimal-check.svg"
import content from "../assets/icons/speech.svg"

function Home() {
  return (
    <>
      <Hero />

      {/* SEO INTRO SECTION */}
      <section className="home-section seo-intro">
        <div className="welcom-title">
          <h1>Welcome to Adishakti Digital</h1>
          <h2>Best Digital Marketing Agency in Bhubaneswar</h2>
        </div>
        <div className="line"></div>
        <div className="welcome-content">
          <p>
            Looking for the best digital marketing company in Bhubaneswar,
            Odisha? <br />
            <br />
            आदिशक्ति.digital is where innovation meets impact. We are a
            full-service digital marketing agency based in Bhubaneswar,
            committed to helping businesses grow online with data-driven
            strategies, cutting-edge design, and powerful technologies. Whether
            you are a startup, small business, or a growing enterprise — our
            team delivers end-to-end solutions to enhance your digital presence
            and drive real results.
          </p>
        </div>
      </section>

      {/* MOTIVE SECTION */}
      <section className="home-section motive">
        <div className="moto-content">
          <h1>Our Motive</h1>
          <h2>Creating Digital Excellence with Purpose</h2>
          <p>
            At आदिशक्ति.digital, we believe in combining creativity, technology,
            and strategy to help businesses succeed in a competitive online
            space. Our motive is to make digital marketing accessible,
            affordable, and effective for all. We aim to deliver measurable
            results — more traffic, more leads, more conversions — through
            ethical practices and transparent execution.
          </p>
        </div>
        <div className="moto-img"></div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="home-section services-overview">
        <h1>Our Services – Complete Digital Solutions Under One Roof</h1>
        <h3>
          We provide a wide range of services to help businesses succeed in the
          digital age:
        </h3>
        <div className="cards">
          <div className="card card-1">
            <div className="img">
            <img src={seo} alt="icon" />
            </div>
            <h2>Digital Marketing & Advertising</h2>

            <ul>
              <li>Search Engine Optimization (SEO)</li>
              <li>Pay-Per-Click (PPC) Advertising</li>
              <li>Social Media Marketing (SMM)</li>
              <li>Online Reputation Management (ORM)</li>
              <li>Conversion Rate Optimization(CRO)</li>
              <li>Content Marketing & Copywriting</li>
              <li>Video Marketing & YouTube SEO</li>
              <li>Mobile Marketing & SMS Campaigns</li>
              <li>Influencer & Affiliate Marketing</li>
            </ul>
          </div>
          <div className="card card-2">
            <div className="img">
            <img src={content} alt="icon" />
            </div>
            <h2>Customer Engagement & Automation</h2>

            <ul>
              <li>Digital Customer Service & Chatbots</li>
              <li>
                Online Reputation Management (ORM) (also listed above – can
                appear in both if needed)
              </li>
              <li>Content Creation & Engagement Tools</li>
            </ul>
          </div>
          <div className="card card-3">
            <div className="img">
              <img src={website} alt="icon" />
            </div>
            <h2> Web, App & Creative Development</h2>

            <ul>
              <li>React-Based Website Devlopment</li>
              <li>Branding & Graphic Design</li>
              <li>App Store Optimization (ASO)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="home-section why-us">
        <h2>Why Choose आदिशक्ति.digital?</h2>
        <ul>
          <li>
            Bhubaneswar-based experts with national and global project
            experience
          </li>
          <li>
            Customized digital marketing strategies for every business type
          </li>
          <li>
            SEO-optimized websites and campaigns that bring you on top of Google
            search results
          </li>
          <li>
            End-to-end solutions: design, development, marketing, hosting &
            support
          </li>
          <li>Transparent pricing and dedicated client support</li>
          <li>Quick turnaround time with zero compromise on quality</li>
        </ul>

        <div className="why-us-content">
          <p>
            We don’t just do digital — we live it. Our team constantly explores
            the latest trends in SEO, PPC, content marketing, social media, and
            development to deliver what truly works.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-section final-cta">
        <h2>Let’s Build Your Digital Future Together</h2>
        <p>
          Join hands with आदिशक्ति.digital, the trusted name in digital
          marketing from Bhubaneswar, Odisha. Let’s work together to create a
          strong online presence for your business and turn your goals into
          reality. 📞 Contact us today for a free consultation and let’s get
          started on your digital journey!
        </p>
        <a href="/contact" className="cta-btn">
          Contact Us
        </a>
      </section>
    </>
  );
}

export default Home;
