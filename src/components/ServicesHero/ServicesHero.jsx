import React from "react";
import styles from "./ServicesHero.module.css";
import { useNavigate } from "react-router-dom";

const ServicesHero = () => {
  const navigate = useNavigate();

  const serviceList = [
    {
      title: "Web Design & Development",
      desc: "Creating stunning, responsive websites using React and modern CSS. I build digital homes that leave lasting impressions.",
    },
    {
      title: "UI/UX Engineering",
      desc: "Translating complex logic into intuitive user interfaces. I focus on accessibility, flow, and user satisfaction.",
    },
    {
      title: "AI Integration Solutions",
      desc: "Leveraging API-based AI tools to create smart dashboards and predictive analytics features for your web apps.",
    },
    {
      title: "Performance Optimization",
      desc: "Audit and refactor code to ensure lightning-fast load times, SEO ranking, and smooth interactivity.",
    },
  ];

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left: Text Content */}
        <div className={styles.textColumn}>
          <h4 className={styles.subTitle}>What I Do</h4>
          <h1 className={styles.mainTitle}>
            Helping Brands achieve <br />
            digital mastery through <br />
            <span className={styles.highlight}>Creative Code.</span>
          </h1>
          <p className={styles.description}>
            Transforming ideas into digital realities by blending strategic
            insights with innovative design. I help businesses thrive in a
            rapidly evolving digital landscape by building robust, scalable
            frontend architectures.
          </p>
          <button 
            className={styles.ctaBtn} 
            onClick={() => navigate("/Contact")}
          >
            Start a Project
          </button>
        </div>

        {/* Right: Service Grid */}
        <div className={styles.gridColumn}>
          {serviceList.map((item, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <div className={styles.line}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;