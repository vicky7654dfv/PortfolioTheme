import React from "react";
import styles from "./TextMarquee.module.css";

const TextMarquee = () => {
  const items = [
    "AI Dashboard", "•", "FinTech App", "•", "E-Commerce", "•", 
    "Portfolio V2", "•", "Crypto Wallet", "•", "SaaS Platform", "•"
  ];

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.track}>
        <div className={styles.content}>
          {items.map((item, index) => (
            <span key={index} className={styles.item}>{item}</span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className={styles.content}>
          {items.map((item, index) => (
            <span key={`dup-${index}`} className={styles.item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextMarquee;