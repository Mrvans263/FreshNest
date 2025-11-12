import React,{useState} from 'react'
import { useLang } from '../context/LanguageContext.jsx'
import '../styles/forms.css'
export default function Booking(){const {t}=useLang();const [form,setForm]=useState({name:'',email:'',service:'',date:'',time:''});const [show,setShow]=useState(false);const change=e=>setForm({...form,[e.target.name]:e.target.value});const submit=e=>{e.preventDefault();setShow(true);setForm({name:'',email:'',service:'',date:'',time:''})};return(<section className="container page"><h1>{t('booking.title')}</h1>
<section className="pricing-section">
  <h2>{t("pricing.title")}</h2>

  <div className="pricing-card">
    <h3>{t("pricing.s1_title")}</h3>
    <p>{t("pricing.s1_desc")}</p>
    <ul>
      {t("pricing.s1_prices").map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>

  <div className="pricing-card">
    <h3>{t("pricing.s2_title")}</h3>
    <p>{t("pricing.s2_desc")}</p>
    <ul>
      {t("pricing.s2_prices").map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>

  <div className="pricing-card">
    <h3>{t("pricing.s3_title")}</h3>
    <p>{t("pricing.s3_desc")}</p>
    <ul>
      {t("pricing.s3_prices").map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>

  <div className="pricing-card">
    <h3>{t("pricing.s4_title")}</h3>
    <ul>
      {t("pricing.s4_items").map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
</section>
<p>{t('booking.desc')}</p><form className="form" onSubmit={submit}><div className="grid-2"><label>{t('booking.name')}<input name="name" value={form.name} onChange={change} required/></label><label>{t('booking.email')}<input type="email" name="email" value={form.email} onChange={change} required/></label></div><label>{t('booking.service')}<select name="service" value={form.service} onChange={change}><option value="">{t('services.regular')}</option><option value="window">{t('services.window')}</option><option value="deep">{t('services.deep')}</option></select></label><div className="grid-2"><label>{t('booking.date')}<input type="date" name="date" value={form.date} onChange={change} required/></label><label>{t('booking.time')}<input type="time" name="time" value={form.time} onChange={change} required/></label></div><button className="btn-primary" type="submit">{t('booking.confirm')}</button></form>{show&&(<div className="modal"><div className="modal-content"><h3>{t('booking.confirmed')}</h3><button className="btn-primary" onClick={()=>setShow(false)}>OK</button></div></div>)}</section>)} 
