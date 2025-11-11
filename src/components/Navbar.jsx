import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext.jsx';
import '../styles/navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, changeLanguage } = useLang();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    closeMenu(); // Close menu when language is changed
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <div className="logo-icon">✨</div>
            <span>FreshNest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-menu">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="nav-actions">
            {/* Language Switcher - Desktop */}
            <div className="language-switcher">
              <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                EN
              </button>
              <span className="lang-divider">|</span>
              <button
                className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('ru')}
              >
                RU
              </button>
            </div>

            {/* CTA Button */}
            <Link to="/booking" className="nav-cta">
              {t('nav.bookNow')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="mobile-language-switcher">
              <button
                className={`mobile-lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                English
              </button>
              <button
                className={`mobile-lang-btn ${language === 'ru' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('ru')}
              >
                Русский
              </button>
            </div>
            
            {/* Mobile CTA */}
            <div className="mobile-actions">
              <Link to="/booking" className="mobile-cta" onClick={closeMenu}>
                {t('nav.bookNow')}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}