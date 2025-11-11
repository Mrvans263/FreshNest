import React, { useEffect, useState } from 'react';
import '../styles/stats.css';
import { useLang } from '../context/LanguageContext.jsx';

function useCounter(target, duration = 900) {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    let startTime = null;
    
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(easeOutQuart * target));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    
    const animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [target, duration]);
  
  return value;
}

export default function Stats() {
  const { t } = useLang();
  const years = useCounter(5, 700);
  const clients = useCounter(1200, 900);
  const homes = useCounter(850, 900);

  return (
    <section className="stats">
      <div className="container stats-grid">
        <div className="stat">
          <div className="num">{years}+</div>
          <div className="label">{t('stats.years')}</div>
        </div>
        <div className="stat">
          <div className="num">{clients}+</div>
          <div className="label">{t('stats.clients')}</div>
        </div>
        <div className="stat">
          <div className="num">{homes}+</div>
          <div className="label">{t('stats.homes')}</div>
        </div>
      </div>
    </section>
  );
}