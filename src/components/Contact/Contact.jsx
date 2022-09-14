import React, { useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsMessenger, BsTelegram } from 'react-icons/bs';

import emailjs from '@emailjs/browser';

import './Contact.css';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3f3d2yq', 'template_5sng78u', form.current, 'N6a7_MHNjj9AuVnKg').then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            },
        );

        e.target.reset();
        alert('Message Sent!')
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>bhuynhcongkhoa@gmail.com</h5>
                        <a href="mailto:bhuynhcongkhoa@gmail.com" target="_blank">
                            Send an email
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsMessenger className="contact__option-icon" />
                        <h4>Facebook Messenger</h4>
                        <h5>Khoa Huỳnh</h5>
                        <a href="https://m.me/inferno333/" target="_blank">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsTelegram className="contact__option-icon" />
                        <h4>Telegram</h4>
                        <h5>+84 793 710 737</h5>
                        <a href="https://t.me/badumpow" target="_blank">
                            Send an message
                        </a>
                    </article>
                </div>
                {/* ENd OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Your Full name" required></input>
                    <input type="email" placeholder="Your Email" required></input>
                    <textarea type="message" rows={7} placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
