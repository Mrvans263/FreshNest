import React, { useState, useEffect, useRef } from "react";
import "../styles/about.css";
import { useLang } from "../context/LanguageContext.jsx";

const slides = [
  { key: "f1", image: "/assets/slide1.jpg" },
  { key: "f2", image: "/assets/slide2.jpg" },
  { key: "f3", image: "/assets/slide3.jpg" },
  { key: "f4", image: "/assets/slide4.jpg" },
  { key: "f5", image: "/assets/slide5.jpg" },
  { key: "f6", image: "/assets/slide6.jpg" },
];

export default function About() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Touch gestures
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) diff > 0 ? prevSlide() : nextSlide();
  };

  return (
    <section className="about container">
      <div className="about-header">
        <h1>{t("about.title")}</h1>
        <p className="about-intro">{t("about.intro")}</p>
      </div>

      {/* ====== SLIDER ====== */}
      <div
        className="about-slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((s, i) => (
          <div
            key={s.key}
            className={`slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <div className="slide-overlay">
              <h3>{t(`about.${s.key}`)}</h3>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button className="arrow left" onClick={prevSlide}>
          ‹
        </button>
        <button className="arrow right" onClick={nextSlide}>
          ›
        </button>

        {/* Dots */}
        <div className="dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>

      {/* ====== Body ====== */}
      <div className="about-body">
        <h2>{t("about.subtitle")}</h2>
        <p>{t("about.text1")}</p>
        <p>{t("about.text2")}</p>
        <p>{t("about.text3")}</p>
      </div>

      <div className="cta-box">
        <h3>{t("about.ctaTitle")}</h3>
        <p>{t("about.ctaText")}</p>
        <a href="/booking" className="btn-primary">
          {t("about.ctaButton")}
        </a>
      </div>
    </section>
  );
}
