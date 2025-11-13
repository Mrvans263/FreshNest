import React from "react";
import { useLang } from "../context/LanguageContext.jsx";
import "../styles/contact.css";

export default function Contact() {
  const { t } = useLang();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Contact form submitted");
  };

  return (
    <section className="container page contact-page">
      <h1>{t("contact.title")}</h1>

      {/* Quick Action Contact Buttons */}
      <div className="contact-actions">
        <a
          href="https://wa.me/79990000000"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp"
        >
          💬 {t("contact.whatsapp")}
        </a>

        <a
          href="https://t.me/yourTelegramUsername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn telegram"
        >
          📱 {t("contact.telegram")}
        </a>

        <a href="tel:+79990000000" className="contact-btn phone">
          📞 {t("contact.call")}
        </a>

        <a href="mailto:cleaning@example.com" className="contact-btn email">
          ✉️ {t("contact.email")}
        </a>
      </div>

      {/* Contact Form */}
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="grid-2">
          <label>
            {t("booking.name")}
            <input required />
          </label>
          <label>
            {t("booking.email")}
            <input type="email" required />
          </label>
        </div>

        <label>
          {t("contact.message")}
          <textarea rows="4" required />
        </label>

        <button className="btn-primary" type="submit">
          {t("contact.send")}
        </button>
      </form>
    </section>
  );
}