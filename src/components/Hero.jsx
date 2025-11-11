import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext.jsx';
import heroImage from '../assets/cleaning-lady.jpg';
import '../styles/hero.css';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero">
      {/* Background image with multiple sources for optimal loading */}
      <div className="hero-background">
        <picture>
          {/* Desktop image - same for all sizes since we're using CSS object-position */}
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
       
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}