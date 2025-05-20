import React, { useState, useEffect } from 'react';

import sr from '../../utils/scrollReveal';
import db from "../../utils/firebase";
import "./contact.styles.css";

const Contact = props => {

    useEffect(() => {
        sr.reveal('.contact__information',{delay: 200})
        sr.reveal('.contact__input',{interval: 200}); 
    });

    const [message, setMessage] = useState({
        name: "",
        email: "",
        content: ""
    });

    const send = () => {
        db.collection("contacts").add({
            name: message.name,
            email: message.email,
            message: message.content,
            date: new Date()
        }).then(() => {
            // setAlert({
            //     open: true,
            //     message: "Message has been submitted!"
            // });
        }).catch(err => {
            // setAlert({
            //     open: true,
            //     message: err.message
            // });
        });

        setMessage({
            name: "",
            email: "",
            content: ""
        });
    }

    return (
    <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact__container bd-grid">
            <div>
                <div className="contact__information">
                    <i className='bx bx-phone contact__icon'></i>
                    <div>
                        <h3 className="contact__title">Call Me</h3>
                        <span className="contact__subtitle">(+84) 398298854</span>
                    </div>
                </div>
                <div className="contact__information">
                    <i className='bx bx-envelope contact__icon'></i>
                    <div>
                        <h3 className="contact__title">E-mail</h3>
                        <span className="contact__subtitle">duytrinhphan451@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="contact__footer">
    <h3 className="contact__footer-title">Get in Touch</h3>
    <p className="contact__footer-text">
        Want to chat? Just shoot me a message on <a 
        href="https://www.linkedin.com/in/duytrinh-phan-17922b289/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact__footer-link"
        >LinkedIn</a> or send an email to <a 
        href="mailto:duytrinhphan451@gmail.com" 
        className="contact__footer-link"
        >duytrinhphan451@gmail.com</a>. I’ll try my best to get back to you soon. I will ignore all soliciting.
    </p>
</div>

    </section>
);
}

export default Contact;