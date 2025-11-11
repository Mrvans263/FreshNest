import React from 'react'
import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Stats from '../components/Stats.jsx'
import { useLang } from '../context/LanguageContext.jsx'
import cleaningWindow from '../assets/cleaning-window.jpeg'
import cleaningSurface from '../assets/cleaning-surface.jpg'
export default function Home(){const {t}=useLang();const services=[{title:t('services.window'),description:' ',image:cleaningWindow},{title:t('services.deep'),description:' ',image:cleaningSurface},{title:t('services.regular'),description:' ',image:cleaningSurface}];return(<><Hero/><section className="container services-section"><h2>{t('services.heading')}</h2><div className="cards-grid">{services.map(s=>(<ServiceCard key={s.title} {...s}/>))}</div></section><Testimonials/><Stats/></>)} 
