import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="nav-logo">Adishakti Digital</div>

      <nav>
        <div className="nav-list">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>  
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
