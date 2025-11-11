import React from 'react'
import { useLang } from '../context/LanguageContext.jsx'
export default function About(){const {t}=useLang();return(<section className="container page"><h1>{t('about.title')}</h1><p>{t('about.text')}</p></section>)}
