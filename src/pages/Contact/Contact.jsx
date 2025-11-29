import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Contact.module.css";
// Component Imports
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success popup
    setShowPopup(true);
    
    // Navigate after a short delay to allow user to see the popup
    setTimeout(() => {
      setShowPopup(false);
      navigate("/Error");
    }, 2000);
  };

  const handleErrorLink = (e) => {
    e.preventDefault();
    navigate("/Error");
  };

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Plot+No+42,+OMR+IT+Expressway,+Sholinganallur,+Chennai,+Tamil+Nadu+600119",
      "_blank"
    );
  };

  return (
    <>
      <Header />
      
      {/* Outer Container with Fade Animation */}
      <div className={Style.contactWrapper}>
        <div className={Style.container}>
          
          {/* Top Section: Intro */}
          <div className={Style.introSection}>
            <h1 className={Style.mainTitle}>Let’s <span className={Style.highlight}>Connect</span></h1>
            <p className={Style.subText}>
              I am currently available for <strong>Remote, On-site, Part-time, and Full-time</strong> opportunities. 
              Let's collaborate to build scalable, AI-driven web solutions that transform your business.
            </p>
          </div>

          <div className={Style.contentGrid}>
            
            {/* Left Column: Contact Info & Socials */}
            <div className={Style.infoColumn}>
              
              <div className={Style.infoCard}>
                <div className={Style.iconBox}>
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className={Style.cardDetails}>
                  <h3>Call Me</h3>
                  <p className={Style.cardLabel}>Monday to Friday 10:00 - 20:00</p>
                  <a className={Style.cardLink}>+91 98765 43210</a>
                </div>
              </div>

              <div className={Style.infoCard}>
                <div className={Style.iconBox}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className={Style.cardDetails}>
                  <h3>Email Me</h3>
                  <p className={Style.cardLabel}>For project inquiries & hiring.</p>
                  <a className={Style.cardLink}>henry.dev@example.com</a>
                </div>
              </div>

              <div className={Style.infoCard} onClick={handleMapClick} style={{cursor: 'pointer'}}>
                <div className={Style.iconBox}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className={Style.cardDetails}>
                  <h3>Visit Location</h3>
                  <p className={Style.cardLabel}>Plot No 42, OMR IT Expressway</p>
                  <address className={Style.cardAddress}>
                    Sholinganallur, Chennai,<br />
                    Tamil Nadu 600119
                  </address>
                </div>
              </div>

              {/* Social Media Section */}
              <div className={Style.socialSection}>
                <h3>Follow My Work</h3>
                <div className={Style.socialIcons}>
                  <button onClick={handleErrorLink} aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </button>
                  <button onClick={handleErrorLink} aria-label="GitHub">
                    <i className="fa-brands fa-github"></i>
                  </button>
                  <button onClick={handleErrorLink} aria-label="Twitter">
                    <i className="fa-brands fa-x-twitter"></i>
                  </button>
                  <button onClick={handleErrorLink} aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </button>
                  <button onClick={handleErrorLink} aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Form & Map */}
            <div className={Style.rightColumn}>
              
              {/* Contact Form */}
              <div className={Style.formBox}>
                <div className={Style.formHeader}>
                  <h2>Got Ideas? <span className={Style.highlight}>I've got the skills</span></h2>
                  <p>Tell me about your project needs and timeline.</p>
                </div>

                <form className={Style.contactForm} onSubmit={handleSubmit} id="contactForm">
                  <div className={Style.inputGroup}>
                    <label htmlFor="fullName">NAME <span className={Style.required}>*</span></label>
                    <input type="text" id="fullName" name="fullName" placeholder="Your Name" required autoComplete="name" />
                  </div>

                  <div className={Style.inputGroup}>
                    <label htmlFor="email">EMAIL <span className={Style.required}>*</span></label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required autoComplete="email" />
                  </div>

                  <div className={Style.inputGroup}>
                    <label htmlFor="subject">SUBJECT <span className={Style.required}>*</span></label>
                    <input type="text" id="subject" name="subject" placeholder="Hiring / Project / Query" required autoComplete="off" />
                  </div>

                  <div className={Style.inputGroup}>
                    <label htmlFor="message">MESSAGE <span className={Style.required}>*</span></label>
                    <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required></textarea>
                  </div>

                  <div className={Style.termsGroup}>
                    <input type="checkbox" id="terms" name="terms" required />
                    <label htmlFor="terms">
                      I agree to the <button type="button" className={Style.termBtn} onClick={handleErrorLink}>Terms & Conditions</button>
                    </label>
                  </div>

                  <button type="submit" className={Style.submitBtn}>
                    Send Message
                  </button>
                </form>

                <div className={Style.formFooter}>
                  <p>All rights reserved by Henry Martin.</p>
                </div>
              </div>

              {/* Map Embed */}
              <div className={Style.mapContainer}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.595606967664!2d80.2256783!3d12.9015467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b7d6b38466b%3A0x676999238383921!2sSholinganallur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Henry Martin Location"
                ></iframe>
              </div>

            </div>
          </div>
        </div>

        {/* Success Popup Modal */}
        {showPopup && (
          <div className={Style.popupOverlay}>
            <div className={Style.popupContent}>
              <div className={Style.popupIcon}>
                <i className="fa-solid fa-check"></i>
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you shortly.</p>
            </div>
          </div>
        )}

      </div>
      <Footer />
    </>
  );
}