import React, { useState } from "react";

import "../css/contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to a server).
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <h1>JK Travel</h1>
        </div>
      </header>

      <main className="contact-main">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns, please feel free to reach out
          to us using the form below!
        </p>

        <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
          />

          <button type="submit">Submit</button>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 Trip.com | All rights reserved</p>
      </footer>
    </div>
  );
};

export default ContactUs;
