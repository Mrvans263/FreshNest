import React from "react";
import PropTypes from "prop-types";
import { useLang } from "../context/LanguageContext.jsx";
import "../styles/contact.css";

// Constants for maintainable configuration
const CONTACT_CONFIG = {
  whatsapp: {
    number: "79990000000",
    url: "https://wa.me/79990000000"
  },
  telegram: {
    username: "yourTelegramUsername", 
    url: "https://t.me/yourTelegramUsername"
  },
  phone: {
    number: "+79990000000"
  },
  email: {
    address: "cleaning@example.com"
  }
};

/**
 * Contact component providing multiple communication channels
 * @component
 * @example
 * return <Contact />
 */
export default function Contact() {
  const { t } = useLang();

  // Handler for form submission with proper validation
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Form submission logic would be implemented here
    console.log("Contact form submitted");
  };

  return (
    <section 
      className="container page contact-page" 
      role="region" 
      aria-labelledby="contact-title"
    >
      <h1 id="contact-title">{t("contact.title")}</h1>

      {/* Quick Action Contact Buttons */}
      <nav 
        className="contact-actions" 
        aria-label="Quick contact options"
      >
        <ContactButton
          href={CONTACT_CONFIG.whatsapp.url}
          platform="whatsapp"
          label={t("contact.whatsapp")}
          icon="💬"
        />
        
        <ContactButton
          href={CONTACT_CONFIG.telegram.url}
          platform="telegram" 
          label={t("contact.telegram")}
          icon="📱"
        />
        
        <ContactButton
          href={`tel:${CONTACT_CONFIG.phone.number}`}
          platform="phone"
          label={t("contact.call")}
          icon="📞"
        />
        
        <ContactButton
          href={`mailto:${CONTACT_CONFIG.email.address}`}
          platform="email"
          label={t("contact.email")}
          icon="✉️"
        />
      </nav>

      {/* Contact Form */}
      <form 
        className="form" 
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className="grid-2">
          <FormField
            label={t("booking.name")}
            type="text"
            required
          />
          <FormField
            label={t("booking.email")}
            type="email"
            required
          />
        </div>

        <FormField
          label={t("contact.message")}
          type="textarea"
          rows={4}
          required
        />

        <button 
          className="btn-primary" 
          type="submit"
        >
          {t("contact.send")}
        </button>
      </form>
    </section>
  );
}

/**
 * Reusable contact button component
 * @param {Object} props - Component props
 * @param {string} props.href - Link URL
 * @param {string} props.platform - Platform type for styling
 * @param {string} props.label - Button text
 * @param {string} props.icon - Emoji icon
 */
const ContactButton = ({ href, platform, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`contact-btn ${platform}`}
    aria-label={`Contact via ${platform}`}
  >
    <span role="img" aria-hidden="true">{icon}</span>
    {label}
  </a>
);

ContactButton.propTypes = {
  href: PropTypes.string.isRequired,
  platform: PropTypes.oneOf(['whatsapp', 'telegram', 'phone', 'email']).isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

/**
 * Reusable form field component
 * @param {Object} props - Component props
 * @param {string} props.label - Field label
 * @param {string} props.type - Input type
 * @param {number} props.rows - Textarea rows (if type is textarea)
 * @param {boolean} props.required - Required field indicator
 */
const FormField = ({ label, type = "text", rows, required = false }) => {
  const inputId = `contact-${label.replace(/\s+/g, '-').toLowerCase()}`;
  
  return (
    <label htmlFor={inputId}>
      {label}
      {required && <span className="required-asterisk" aria-hidden="true">*</span>}
      {type === "textarea" ? (
        <textarea 
          id={inputId}
          rows={rows} 
          required={required}
          aria-required={required}
        />
      ) : (
        <input 
          id={inputId}
          type={type} 
          required={required}
          aria-required={required}
        />
      )}
    </label>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  rows: PropTypes.number,
  required: PropTypes.bool
};