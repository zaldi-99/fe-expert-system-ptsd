import React from "react";
import "../components/styles/ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form-container">
      <div className="contact-form-text">
        <div className="contact-form-title">
          <h1>Hubungi Kami</h1>
        </div>
        <div className="contact-form-desc">
          <p>Silakan sampaikan pesan anda melalui form</p>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <label htmlFor="name">Nama*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nama anda.."
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email anda.."
            required
          />

          <label htmlFor="subject">Subjek*</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subjek Pesan.."
            required
          />
          <label htmlFor="message">Pesan*</label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Pesan anda.."
            className="contact-form-message"
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
