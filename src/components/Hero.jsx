import React from 'react'
import heroImage from '../assets/cleaning-lady.jpg'
import '../styles/hero.css'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext.jsx'
export default function Hero(){const {t}=useLang();return(<section className="hero" style={{backgroundImage:`url(${heroImage})`}}><div className="overlay"><div className="container hero-content"><h1>{t('hero.title')}</h1><p>{t('hero.subtitle')}</p><div className="hero-buttons"><Link to="/booking" className="btn-primary">{t('hero.ctaBook')}</Link><Link to="/contact" className="btn-secondary">{t('hero.ctaQuote')}</Link></div></div></div></section>)}
