import React from 'react';
import './Contact.css';
import { contacts } from '../../data';

const Contact = () => {
  return (
    <section id="contact">
      <div className="bg_image"></div>
      <div className='overlay'></div>
      <div className="container ">
        <div className="column ">
          
          {contacts.map((contact, index) => (
            <div className="contact_info" key={index}>
              <div className="icon_container">{contact.icon}</div>
              <div className="details">
                <p className="text_muted">{contact.name}</p>
                <h3 className="value">{contact.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* === Contact Form Column === */}
        <div className="column form_container">
          <div className="form_top">
            <h3 className="sub_title g-text">Keep In Touch</h3>
            <p>
              Feel free to drop us a message below — we’ll get back to you as soon as possible.
            </p>
          </div>

          <form className="form_middle">
            <div className="row">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                className="control"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                className="control"
                required
              />
            </div>

            <div className="row">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className="control"
                required
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                className="control"
              />
            </div>

            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
              className="control"
              required
            ></textarea>

            <div className="form_bottom">
              <button type="submit" className="btn btn_primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
