import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      quote: "Henry transformed our outdated site into a modern, high-converting masterpiece.",
      name: "Sarah Jenkins",
      role: "CEO, TechFlow",
      rating: 5
    },
    {
      id: 2,
      quote: "The attention to detail and AI integration gave us a massive competitive edge.",
      name: "Mike Ross",
      role: "Founder, LitFirm",
      rating: 5
    },
    {
      id: 3,
      quote: "Professional, timely, and incredibly skilled. The best developer we've hired.",
      name: "Emily Blunt",
      role: "Director, CreativeX",
      rating: 5
    }
  ];

  return (
    <section className={styles.testSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Our Clients <span className={styles.highlight}>love</span> working with us,<br />
            we are <span className={styles.highlight}>Confident You Will Too!</span>
          </h2>
          <p className={styles.subtitle}>
            Our happy customers give us impactful and positive feedback on our services, customer support & technical expertise.
          </p>
        </div>

        <div className={styles.grid}>
          {reviews.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.stars}>
                {"★".repeat(item.rating)}
              </div>
              <p className={styles.quote}>"{item.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{item.name.charAt(0)}</div>
                <div className={styles.info}>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;