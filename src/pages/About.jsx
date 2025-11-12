import React, { useState, useEffect } from "react";
import "../styles/about.css";
import { useLang } from "../context/LanguageContext.jsx";

const slides = [
  { key: "f1", image: "/assets/slide1.jpg" },
  { key: "f2", image: "/assets/slide2.jpg" },
  { key: "f3", image: "/assets/slide3.jpg" },
  { key: "f4", image: "/assets/slide4.jpg" },
  { key: "f5", image: "/assets/slide5.jpg" },
  { key: "f6", image: "/assets/slide6.jpg" }
];

export default function About() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about container">
      <div className="about-header">
        <h1>{t("about.title")}</h1>
        <p className="about-intro">{t("about.intro")}</p>
      </div>

      {/* --- Slideshow --- */}
      <div className="about-slider">
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
      </div>

      {/* --- Story text --- */}
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
