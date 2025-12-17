import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsapp.css";

function WhatsAppButton() {
  const phoneNumber = "917008168609"; // <-- replace with admin WhatsApp number
  const message = "Hello Adishakti Digital, I am interested in your services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
