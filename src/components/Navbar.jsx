import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLang } from "../context/LanguageContext.jsx";
import "../styles/navbar.css";
import ruFlag from "../assets/flags/ru.svg";
import gbFlag from "../assets/flags/gb.svg";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <Link to="/" className="brand">
          FreshNest
        </Link>

        {/* Burger button */}
        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={open ? "show" : ""} onClick={() => setOpen(false)}>
          <NavLink to="/" end>{t("nav.home")}</NavLink>
          <NavLink to="/about">{t("nav.about")}</NavLink>
          <NavLink to="/booking">{t("nav.booking")}</NavLink>
          <NavLink to="/contact">{t("nav.contact")}</NavLink>
        </nav>

        <div className="nav-actions">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
          >
            <img src={lang === "ru" ? gbFlag : ruFlag} alt="lang" />
          </button>
          <Link to="/booking" className="btn-primary small-btn">
            {t("nav.bookNow")}
          </Link>
        </div>
      </div>
    </header>
  );
}
