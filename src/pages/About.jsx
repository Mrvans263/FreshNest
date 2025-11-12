import React from "react";
import "../styles/about.css";
import { useLang } from "../context/LanguageContext.jsx";

export default function About() {
  const { t } = useLang();

  return (
    <section className="about container">
      <div className="about-header">
        <h1>{t("about.title")}</h1>
        <p className="about-intro">{t("about.intro")}</p>
      </div>

      <div className="facts-grid">
        <div className="fact">🧽 {t("about.f1")}</div>
        <div className="fact">🏡 {t("about.f2")}</div>
        <div className="fact">📅 {t("about.f3")}</div>
        <div className="fact">🌿 {t("about.f4")}</div>
        <div className="fact">🧰 {t("about.f5")}</div>
        <div className="fact">🤝 {t("about.f6")}</div>
      </div>

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
