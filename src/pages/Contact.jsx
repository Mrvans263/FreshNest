import React from "react";
import { useLang } from "../context/LanguageContext.jsx";
import "../styles/contact.css";

export default function Contact() {
  const { t } = useLang();

  return (
    <section className="container page contact-page">
      <h1>{t("contact.title")}</h1>

      <h2 className="contact-subtitle">{t("contact.connect")}</h2>

      {/* Contact Buttons */}
      <div className="contact-actions">

        {/* WhatsApp */}
        <a
          href="https://wa.me/79990000000"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp"
        >
          💬 {t("contact.whatsapp")} — {t("contact.whatsapp_msg")}
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/yourTelegramName"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn telegram"
        >
          📱 {t("contact.telegram")} — {t("contact.telegram_msg")}
        </a>

        {/* Phone */}
        <a href="tel:+79990000000" className="contact-btn phone">
          📞 {t("contact.phone")} — {t("contact.call")}
        </a>

        {/* Email */}
        <a href="mailto:cleaning@example.com" className="contact-btn email">
          ✉️ {t("contact.email")} — {t("contact.email_msg")}
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn instagram"
        >
          📸 {t("contact.instagram")}
        </a>

        {/* VK */}
        <a
          href="https://vk.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn vk"
        >
          🔵 {t("contact.vk")}
        </a>

        {/* Yandex Maps */}
        <a
          href="https://yandex.ru/maps/?um=constructor%3Aexample"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn maps"
        >
          📍 {t("contact.maps")}
        </a>

        {/* 2GIS */}
        <a
          href="https://2gis.ru/moscow/example"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn gis"
        >
          🗺️ {t("contact.gis")}
        </a>
      </div>

      {/* Contact Form */}
      <form className="form" onSubmit={(e) => e.preventDefault()}>
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/79990000000"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

    </section>
  );
}
