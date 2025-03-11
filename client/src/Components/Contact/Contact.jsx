import React, { useRef, useState } from 'react';
import './Contact.css'
import phone_icon from '../../assets/phone_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import github_icon from '../../assets/github_icon.png'
import pattern_image from '../../assets/pattern_image.png'
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [resultStatus, setResultStatus] = useState('none');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());

        try {
            // Route to contact API route
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Send JSON data
                body: JSON.stringify(data),
            });
            
            const result = await response.json();
            if (response.ok) {
                setStatus('Message sent successfully!');
                setResultStatus('success');
                form.current.reset();
            } else {
                setStatus('Failed to send message. Please email me directly.');
                setResultStatus('fail');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please email me directly.');
            setResultStatus('fail');
        }
    };
    
  return (
    <div id='contact' className="contact-body">
        <motion.div className="contact-title" initial = {{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.7, ease: "easeOut" }}>
            <h1> Contact Me</h1>
            <img src={pattern_image} alt=""></img>
        </motion.div>
        

        <motion.div className="contact-container" initial = {{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.7, ease: "easeOut" }}>
            <div className="contact-info">
                <h4>
                    Contact Information
                </h4>
                <p>Fill out the form, and I will get back to you.</p>
                <div className="icon-text">
                    <img src={phone_icon} alt="" width="20px" height="20px"/>
                    <span>Fill out the form for my phone number</span>
                </div>
                <div className="icon-text">
                    <img className="icon-image" src={mail_icon} alt="" width="20px" height="20px"/>
                    <span>venkat.subra[at]princeton.edu</span>
                </div>
                <div className="social-media">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/venkat-subramanian5" className="icon-circle">
                        <img src={linkedin_icon} alt=""/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/venkatsubra01" className="icon-circle">
                        <img src={github_icon} alt=""/>
                    </a>
                </div>
            </div>
            <form ref={form} onSubmit={handleSubmit}>
                <div className="col">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="first_name" required/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="last_name" required/>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" name="email" required/>
                    </div>
                    <div className="form-group">
                        <label>Phone #</label>
                        <input type="tel" name="phone"/>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group solo">
                        <label>Message</label>
                        <textarea name="message" rows="14" wrap="soft" required></textarea> 
                    </div>
                </div>
                <div className="col">
                    <div className="form-group solo">
                        <button className="primary" type="submit">Send Message</button>

                    </div>
                </div>
                <div className={resultStatus}>
                    <p>{status}</p>
                </div>
            </form>
        </motion.div>
    </div>
  )
}

export default Contact