import React from 'react'
import { useLang } from '../context/LanguageContext.jsx'
export default function Contact(){const {t}=useLang();return(<section className="container page"><h1>{t('contact.title')}</h1><form className="form" onSubmit={(e)=>e.preventDefault()}><div className="grid-2"><label>{t('booking.name')}<input required/></label><label>{t('booking.email')}<input type="email" required/></label></div><label>{t('contact.message')}<textarea rows="4" required/></label><button className="btn-primary" type="submit">{t('contact.send')}</button></form></section>)}
