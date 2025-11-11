import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext.jsx';
import heroImage from '../assets/cleaning-lady.jpg';
import heroImageMobile from '../assets/cleaning-lady-mobile.jpg'; // Optional: different crop for mobile
import '../styles/hero.css';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero">
      {/* Background image with multiple sources for optimal loading */}
      <div className="hero-background">
        <picture>
          {/* Mobile-optimized image */}
          <source 
            media="(max-width: 768px)" 
            srcSet={heroImageMobile || heroImage}
          />
          {/* Desktop image */}
          <source 
            media="(min-width: 769px)" 
            srcSet={heroImage}
          />
          {/* Fallback */}
          <img 
            src={heroImage} 
            alt="Professional cleaning service" 
            className="hero-image"
            loading="eager"
          />
        </picture>
      </div>
      
      {/* Gradient overlay */}
      <div className="overlay"></div>
      
      {/* Content */}
      <div className="container hero-content">
        <div className="hero-text">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <div className="hero-buttons">
            <Link to="/booking" className="btn btn-primary">
              {t('hero.ctaBook')}
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              {t('hero.ctaQuote')}
            </Link>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-icon">⭐</span>
            <span>{t('hero.trust.rating')}</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🕒</span>
            <span>{t('hero.trust.availability')}</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🏠</span>
            <span>{t('hero.trust.homes')}</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}