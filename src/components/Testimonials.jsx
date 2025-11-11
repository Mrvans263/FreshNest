import React from 'react'
import '../styles/testimonials.css'
import { useLang } from '../context/LanguageContext.jsx'
export default function Testimonials(){const {t}=useLang();const data=[{name:t('testimonials.n1'),text:t('testimonials.t1')},{name:t('testimonials.n2'),text:t('testimonials.t2')},{name:t('testimonials.n3'),text:t('testimonials.t3')}];return(<section className="testimonials"><div className="container"><h2>{t('testimonials.heading')}</h2><div className="testimonials-grid">{data.map((it,i)=>(<blockquote key={i} className="testimonial"><p>“{it.text}”</p><footer>— {it.name}</footer></blockquote>))}</div></div></section>)}
