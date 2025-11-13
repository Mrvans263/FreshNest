import React from "react";
import { useLang } from "../context/LanguageContext.jsx";
import "../styles/contact.css";

export default function Contact() {
  const { t } = useLang();

  return (
    <section className="contact-page container page">

      {/* HEADER */}
      <div className="contact-header">
        <h1>{t("contact.title")}</h1>
        <p className="contact-subtext">
          {t("contact.connect")}
        </p>
      </div>

      {/* SECTION: MESSENGERS */}
      <div className="contact-block">
        <h2>{t("contact.messengers")}</h2>
        <div className="contact-grid">
          
          <a href="https://wa.me/79990000000" target="_blank"
             className="contact-item wa">
            <div className="icon">💬</div>
            <div className="text">
              <h3>{t("contact.whatsapp")}</h3>
              <p>{t("contact.whatsapp_msg")}</p>
            </div>
          </a>

          <a href="https://t.me/yourTelegramName" target="_blank"
             className="contact-item tg">
            <div className="icon">📱</div>
            <div className="text">
              <h3>{t("contact.telegram")}</h3>
              <p>{t("contact.telegram_msg")}</p>
            </div>
          </a>

        </div>
      </div>

      {/* SECTION: DIRECT CONTACT */}
      <div className="contact-block">
        <h2>{t("contact.direct")}</h2>
        <div className="contact-grid">

          <a href="tel:+79990000000" className="contact-item phone">
            <div className="icon">📞</div>
            <div className="text">
              <h3>{t("contact.phone")}</h3>
              <p>{t("contact.call")}</p>
            </div>
          </a>

          <a href="mailto:cleaning@example.com" className="contact-item email">
            <div className="icon">✉️</div>
            <div className="text">
              <h3>{t("contact.email")}</h3>
              <p>{t("contact.email_msg")}</p>
            </div>
          </a>

        </div>
      </div>

      {/* SECTION: SOCIALS */}
      <div className="contact-block">
        <h2>{t("contact.socials")}</h2>
        <div className="contact-grid">

          <a href="https://instagram.com/" target="_blank"
             className="contact-item ig">
            <div className="icon">📸</div>
            <div className="text">
              <h3>{t("contact.instagram")}</h3>
              <p>@your_profile</p>
            </div>
          </a>

          <a href="https://vk.com/" target="_blank"
             className="contact-item vk">
            <div className="icon">🔵</div>
            <div className="text">
              <h3>{t("contact.vk")}</h3>
              <p>vk.com/your_page</p>
            </div>
          </a>

          <a href="https://yandex.ru/maps" target="_blank"
             className="contact-item maps">
            <div className="icon">📍</div>
            <div className="text">
              <h3>{t("contact.maps")}</h3>
              <p>{t("contact.maps_desc")}</p>
            </div>
          </a>

          <a href="https://2gis.ru" target="_blank"
             className="contact-item gis">
            <div className="icon">🗺️</div>
            <div className="text">
              <h3>{t("contact.gis")}</h3>
              <p>{t("contact.gis_desc")}</p>
            </div>
          </a>

        </div>
      </div>

      {/* OPTIONAL FORM */}
      <div className="contact-form-block">
        <h2>{t("contact.form")}</h2>
        <p className="optional-note">{t("contact.optional")}</p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="grid-2">
            <label>
              {t("booking.name")}
              <input required />
            </label>
            <label>
              {t("booking.email")} {t("contact.optional")}
              <input type="email" />
            </label>
          </div>

          <label>
            {t("contact.message")}
            <textarea rows="4" />
          </label>

          <button className="btn-primary" type="submit">
            {t("contact.send")}
          </button>
        </form>
      </div>

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/79990000000"
         className="floating-wa"
         target="_blank">
        💬
      </a>

    </section>
  );
}
