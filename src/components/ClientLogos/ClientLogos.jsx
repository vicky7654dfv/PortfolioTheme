import React from "react";
import styles from "./ClientLogos.module.css";

const ClientLogos = () => {
  // Placeholder names for logos
  const clients = ["Google", "Spotify", "Airbnb", "Stripe", "Netflix", "Shopify", "Slack", "Amazon"];

  return (
    <section className={styles.clientSection}>
      <div className={styles.container}>
        <h4 className={styles.label}>Trusted By International Giants</h4>
        <div className={styles.logoGrid}>
          {clients.map((client, index) => (
            <div key={index} className={styles.logoBox}>
              <span className={styles.logoText}>{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;