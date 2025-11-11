import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLang } from '../context/LanguageContext.jsx'
import '../styles/navbar.css'
import ruFlag from '../assets/flags/ru.svg'
import gbFlag from '../assets/flags/gb.svg'
export default function Navbar(){const {lang,setLang,t}=useLang();return(<header className="navbar"><div className="container nav-inner"><Link to="/" className="brand">FreshNest</Link><nav><NavLink to="/" end>{t('nav.home')}</NavLink><NavLink to="/about">{t('nav.about')}</NavLink><NavLink to="/booking">{t('nav.booking')}</NavLink><NavLink to="/contact">{t('nav.contact')}</NavLink></nav><div className="nav-actions"><button className="btn-primary"><Link to="/booking" style={{color:'#fff',textDecoration:'none'}}>{t('nav.bookNow')}</Link></button><button className="lang-toggle" aria-label="switch language" onClick={()=>setLang(lang==='ru'?'en':'ru')}><img src={lang==='ru'?gbFlag:ruFlag} alt={lang==='ru'?'English':'Русский'}/></button></div></div></header>)}
