import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLang } from "../context/LanguageContext.jsx";
import "../styles/navbar.css";
import ruFlag from "../assets/flags/ru.svg";
import gbFlag from "../assets/flags/gb.svg";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside, on escape key, or on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <Link to="/" className="brand" onClick={handleNavClick}>
          🏠 FreshNest
        </Link>

        {/* Burger button */}
        <button
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile backdrop */}
        <div 
          className={`nav-backdrop ${isOpen ? "show" : ""}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Navigation menu */}
        <nav className={isOpen ? "show" : ""}>
          <div className="mobile-nav-content">
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
            
            {/* Mobile-only actions inside menu */}
            <div className="mobile-actions">
              <button
                className="lang-toggle mobile-lang"
                onClick={() => {
                  setLang(lang === "ru" ? "en" : "ru");
                  handleNavClick();
                }}
              >
                <img src={lang === "ru" ? gbFlag : ruFlag} alt="language" />
                <span>{lang === "ru" ? "English" : "Русский"}</span>
              </button>
              <Link 
                to="/booking" 
                className="btn-primary small-btn mobile-book"
                onClick={handleNavClick}
              >
                {t("nav.bookNow")}
              </Link>
            </div>
          </div>
        </nav>

        {/* Desktop actions - hidden on mobile */}
        <div className="nav-actions">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
            aria-label={lang === "ru" ? "Switch to English" : "Переключить на русский"}
          >
            <img src={lang === "ru" ? gbFlag : ruFlag} alt="language" />
            <span className="lang-text">{lang === "ru" ? "EN" : "RU"}</span>
          </button>
          <Link to="/booking" className="btn-primary small-btn">
            {t("nav.bookNow")}
          </Link>
        </div>
      </div>
    </header>
  );
}