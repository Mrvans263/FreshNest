import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLang } from "../context/LanguageContext.jsx";
import "../styles/navbar.css";
import ruFlag from "../assets/flags/ru.svg";
import gbFlag from "../assets/flags/gb.svg";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  // Close menu when clicking on a link or backdrop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleNavClick = () => {
    setOpen(false);
  };

  const handleBackdropClick = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <Link to="/" className="brand" onClick={handleNavClick}>
          🏠 FreshNest
        </Link>

        {/* Burger button */}
        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile backdrop */}
        {open && (
          <div 
            className="nav-backdrop show" 
            onClick={handleBackdropClick}
            aria-hidden="true"
          />
        )}

        {/* Navigation */}
        <nav className={open ? "show" : ""}>
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

          {/* Mobile-only actions */}
          <div className="nav-actions-mobile">
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
        </nav>

        {/* Desktop actions */}
        <div className="nav-actions">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
            aria-label={lang === "ru" ? "Switch to English" : "Переключить на русский"}
          >
            <img src={lang === "ru" ? gbFlag : ruFlag} alt="language" />
          </button>
          <Link to="/booking" className="btn-primary small-btn">
            {t("nav.bookNow")}
          </Link>
        </div>
      </div>
    </header>
  );
}