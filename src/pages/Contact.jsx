import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => {
          setStatus("");
        }, 400);
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Let’s Build Something Great Together</p>
      </section>

      <section className="contact-section">
        <div className="contact-form">
          <h2>Let’s Talk About Your Idea</h2>

          {/* ✅ IMPORTANT */}
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-row">
              <input type="text" name="user_name" placeholder="Name" required />

              <input
                type="text"
                name="company_name"
                placeholder="Company Name"
                required
              />
            </div>

            <div className="form-row">
              <input
                type="tel"
                name="user_phone"
                placeholder="Mobile No."
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
              />
            </div>

            <select name="service" required>
              <option value="">Select Service</option>
              <option value="SEO">Search Engine Optimization (SEO)</option>
              <option value="PPC">Pay-Per-Click Advertising (PPC)</option>
              <option value="SMM">Social Media Marketing (SMM)</option>
              <option value="Web Development">Website Development</option>
              <option value="App Development">Mobile App Development</option>
              <option value="Branding">Branding & Graphic Design</option>
              <option value="ORM">Online Reputation Management (ORM)</option>
              <option value="Content Marketing">Content Marketing</option>
              <option value="Video Marketing">
                Video Marketing & YouTube SEO
              </option>
            </select>

            <textarea
              name="message"
              placeholder="Describe your project"
              required
            ></textarea>

            <div className="submit-row">
              <button type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Submit Now"}
              </button>

              {status === "success" && (
                <span className="form-success">
                  ✅ Message sent successfully!
                </span>
              )}

              {status === "error" && (
                <span className="form-error">
                  ❌ Failed to send. Try again.
                </span>
              )}
            </div>
          </form>
        </div>

        <div className="contact-details">
          <h2>🏢 आदिशक्ति.digital</h2>
          <p>📞 +91 8093302712</p>
          <p>📧 info.adishaktigroup@gmail.com</p>
          <p>🌐 www.adishakti.digital</p>
          <p>📍 Bhubaneswar, Odisha, India</p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
