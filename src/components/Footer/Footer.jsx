import React from "react";
import Style from "./Footer.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/Header/logo.webp"; 

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Unified handler for all navigation links
  const handleQuickLinkClick = (e, path) => {
    e.preventDefault();
    
    // If already on the page, just scroll to top
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // Navigate to the new page
      navigate(path);
      
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  const handleErrorLink = (e) => {
    e.preventDefault();
    navigate("/Error");
  };

  return (
    <>
      <div className={Style.footerWrap}>
        {/* Box 1: Brand Info */}
        <div className={Style.box}>
          <div className={Style.logoContainer}>
            <img src={logo} alt="Henry Martin Logo" className={Style.logoImg} />
             <span className={Style.brandName}>Henry Martin</span>
          </div>
          <p>
            Crafting immersive web experiences with modern frontend technologies. 
            From pixel-perfect designs to scalable AI integration, I build the 
            digital future, one line of code at a time.
          </p>
          <button 
            className={Style.aboutBtn}
            onClick={(e) => handleQuickLinkClick(e, "/Contact")}
          >
            Let's Talk <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* Box 2: Quick Links */}
        <div className={Style.box}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a
                href="/About"
                onClick={(e) => handleQuickLinkClick(e, "/About")}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="/Services"
                onClick={(e) => handleQuickLinkClick(e, "/Services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/Dashboard"
                onClick={(e) => handleQuickLinkClick(e, "/Dashboard")}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/Pricing"
                onClick={(e) => handleQuickLinkClick(e, "/Pricing")}
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Box 3: More About Me */}
        <div className={Style.box}>
          <h4>More About Me</h4>
          <ul>
            <li>
              <a
                href="/Contact"
                onClick={(e) => handleQuickLinkClick(e, "/Contact")}
                className={Style.categoryLink}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/Resume"
                onClick={(e) => handleQuickLinkClick(e, "/Resume")}
                className={Style.categoryLink}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="/Blog"
                onClick={(e) => handleQuickLinkClick(e, "/Blog")}
                className={Style.categoryLink}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/HomePage2"
                onClick={(e) => handleQuickLinkClick(e, "/HomePage2")}
                className={Style.categoryLink}
              >
                Home 2
              </a>
            </li>
          </ul>
        </div>

        {/* Box 4: Location */}
        <div className={Style.box}>
          <h4>Location</h4>
          <ul className={Style.contactInfo}>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>
                Plot No 42, OMR IT Expressway, Sholinganallur, 
                Chennai, Tamil Nadu 600119
              </span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              +91 98765 43210
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              henry.dev@example.com
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              Mon - Fri: 10:00 AM - 08:00 PM
            </li>
          </ul>
        </div>

        {/* Box 5: Connect With Me */}
        <div className={Style.box}>
          <h4>Connect With Me</h4>
          <p>
            Join my network. Follow for frontend tips, AI coding insights, 
            and updates on my latest projects.
          </p>
          <div className={Style.media}>
            <a
              href="/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={Style.bottomFooter}>
        <hr />
        <p>
          © 2025 Henry Martin. All rights reserved. 
          Designed with React & Passion.
        </p>
      </div>
    </>
  );
}