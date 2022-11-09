import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
let Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs
      .sendForm(
        "service_zsj5dop",
        "template_1qxgzz7",
        form.current,
        "IGbLTbfW0OTgF30vZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jay.domadia@somaiya.edu</h5>
            <a href="mailto:jay.domadia@somaiya.edu">Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>88981 70404</h5>
            <a href="https://api.whatsapp.com/send?phone=918898170404">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
