"use client";
import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic like sending to an API
    console.log("Form submitted", { name, email, phoneNumber, message });
  };
  return (
    <div className="container block ContactForm">
      <h2>Contact Us</h2>
      <p>
        If you have any questions please fill out the form below or call us at:
        <a href="tel:331-385-8356"> (331) 385-8356</a>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="contact-form-item"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          className="contact-form-item"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />
        <input
          className="contact-form-item"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <textarea
          className="contact-form-item"
          rows={8}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        />
        <button type="submit" className="btn btn--accent btn--stretched">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
