import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLang } from "../context/LanguageContext.jsx";
import "../styles/navbar.css";
import ruFlag from "../assets/flags/ru.svg";
import gbFlag from "../assets/flags/gb.svg";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside or on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.nav-inner')) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <Link to="/" className="brand" onClick={handleNavClick}>
          🏠 FreshNest
        </Link>

        {/* Burger button - always visible on mobile */}
        <button
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation menu */}
        <nav className={isOpen ? "show" : ""}>
          <NavLink to="/" end onClick={handleNavClick}>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/about" onClick={handleNavClick}>
            {t("nav.about")}
          </NavLink>
          <NavLink to="/booking" onClick={handleNavClick}>
            {t("nav.booking")}
          </NavLink>
          <NavLink to="/contact" onClick={handleNavClick}>
            {t("nav.contact")}
          </NavLink>
        </nav>

        {/* Actions - always visible */}
        <div className="nav-actions">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
            aria-label={lang === "ru" ? "Switch to English" : "Переключить на русский"}
          >
            <img src={lang === "ru" ? gbFlag : ruFlag} alt="language" />
            <span className="lang-text">{lang === "ru" ? "EN" : "RU"}</span>
          </button>
          <Link to="/booking" className="btn-primary small-btn" onClick={handleNavClick}>
            {t("nav.bookNow")}
          </Link>
        </div>
      </div>
    </header>
  );
}