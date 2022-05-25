import swal from "@sweetalert/with-react";
import axios from "axios";
import React, { useState } from "react";
import "../components/styles/ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/insert-feedback", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        swal("Berhasil", "Terima kasih sudah menghubungi kami", "success");
        resetForm();
      })
      .catch(err => {
        swal("Oops terjadi kesalahan", `${err}`, "error");
        console.log(err);
      });
  };

  const resetForm = () => {
    console.log("submit");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

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
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nama*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nama anda.."
            onChange={e => {
              setName(e.target.value);
            }}
            value={name}
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email anda.."
            onChange={e => setEmail(e.target.value)}
            value={email}
            required
          />

          <label htmlFor="subject">Subjek*</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subjek Pesan.."
            onChange={e => setSubject(e.target.value)}
            value={subject}
            required
          />
          <label htmlFor="message">Pesan*</label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Pesan anda.."
            className="contact-form-message"
            onChange={e => setMessage(e.target.value)}
            value={message}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
