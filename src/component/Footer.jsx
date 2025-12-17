import "../styles/footer.css";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* BRAND */}
        <div className="footer-section brand">
          <h2>ADISHAKTI DIGITAL</h2>
          <p>
            Your trusted partner for Digital Marketing and Branding solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* SOCIAL ICONS */}
        <div className="footer-section social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon youtube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Adishakti Digital. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
