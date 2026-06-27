import React, { useState } from "react";
import "./Contacts.css";

function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message. Try again.");
    }

  } catch (error) {
    alert("Error sending message.");
    console.error(error);
  }
};

  return (
    <section className="contacts-hero">

      <h1 className="fade-in">Contact Me</h1>

      <p className="fade-in delay">
        Feel free to reach out for collaborations, freelance work, or networking opportunities.
      </p>

      <form className="contact-form slide-up" onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contacts;