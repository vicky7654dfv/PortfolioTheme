import React, { useState, useEffect } from 'react';
import styles from "./Loader.module.css";
import logo from "../../assets/Header/logo.webp"; 

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.loaderWrap} ${!isVisible ? styles.fadeOut : ''}`}>
      <div className={styles.logoContainer}>
        <img 
          src={logo} 
          alt="Henry Martin Loading..." 
          className={styles.logo}
        />
        {/* Optional: A subtle glow ring behind the logo */}
        <div className={styles.glowRing}></div>
      </div>
    </div>
  );
}