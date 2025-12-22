import "../styles/about.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          The Story Behind <span>Adishakti.digital</span>
        </p>
      </section>

      {/* INTRO */}
      <section className="about-section split">
        <div className="fade-in">
          <h2>About Us – The Story Behind आदिशक्ति.digital</h2>
          <p>
            Welcome to आदिशक्ति.digital — a Bhubaneswar-based digital marketing
            agency driven by creativity, strategy, and purpose. We are more than
            just a team of designers, developers, and marketers — we are digital
            storytellers who help brands evolve, scale, and lead in the online
            world.
          </p>
          <p>
            Founded with a mission to empower businesses in Odisha and across
            India, Adishakti.digital believes in innovation with results.
            Whether it’s building a high-performing website, launching an
            intuitive mobile app, or crafting a result-driven marketing campaign
            — we do it all with a sharp focus on growth and ROI.
          </p>
        </div>

        <div className="fade-in about-image">
          <img
            src="/motion.gif"
            alt="About Adishakti Digital"
          />
        </div>
      </section>

      {/* LOGO MEANING */}
      <section className="about-section split alt-bg">
        <div className="fade-in logo-mean">
          <img src="LOGO.png" alt="Meaning Behind Logo" />
        </div>
        <div className="fade-in">
          <h2>The Meaning Behind Our Name & Logo</h2>
          <p>
            Inspired by “Adishakti”, the supreme feminine energy and force of
            creation, our name reflects power, transformation, and the ability
            to give life to ideas.
          </p>
          <p>
            Our logo symbolizes the perfect union of creativity and technology —
            a spiritual foundation that guides our purpose: to build, uplift,
            and empower digital identities with truth, clarity, and intent.
          </p>
          <p>
            This divine energy keeps us grounded in values while pushing us to
            explore infinite possibilities in the digital universe.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="about-section split">
        <div>
          <h2>Our Vision</h2>
          <p>
            To become the most trusted digital marketing partner for businesses
            in Odisha and beyond — delivering smart, sustainable, and scalable
            solutions that drive real impact in the digital space.
          </p>
        </div>

        <div>
          <h2>Our Mission</h2>
          <p>
            To offer comprehensive digital services under one roof — combining
            the best of technology, design, and marketing — tailored for
            startups, SMEs, and enterprises aiming to thrive online.
          </p>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="about-section">
        <h2>Who We Work With</h2>
        <p>
          We proudly serve clients across industries — from local businesses in
          Bhubaneswar and Odisha to national brands seeking online
          transformation.
        </p>
        <p>
          Whether you’re a solopreneur launching your first website or a growing
          company looking to expand your digital footprint, we’re here to help.
        </p>
      </section>

      {/* WHAT SETS US APART */}
      <section className="about-section alt-bg">
        <h2>What Sets Us Apart</h2>

        <ul className="about-list">
          <li>Bhubaneswar-based experts with national project experience</li>
          <li>Result-oriented strategies backed by data and insights</li>
          <li>In-house team for development, design, and marketing</li>
          <li>Full-cycle services — from brand creation to online promotion</li>
          <li>Transparent communication and timely delivery</li>
          <li>Spiritual roots with a futuristic digital vision</li>
        </ul>
      </section>

      {/* FINAL CTA */}
      <section className="about-cta">
        <h2>Join Our Digital Family</h2>
        <p>
          At आदिशक्ति.digital, we don’t believe in one-size-fits-all. We
          believe in custom solutions built with care, precision, and purpose.
        </p>
        <p>Your growth is our mission. Your brand is our responsibility.</p>

        <a href="/contact" className="cta-btn">
          Let’s Work Together
        </a>
      </section>

    </main>
  );
}

export default About;
