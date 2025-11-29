import React from "react";
import styles from "./ProcessFlow.module.css";

const ProcessFlow = () => {
  const steps = [
    {
      icon: "🔍",
      title: "Discovery & Strategy",
      desc: "Understanding your brand goals and target audience to build a solid roadmap."
    },
    {
      icon: "🎨",
      title: "Design & Prototype",
      desc: "Creating wireframes and high-fidelity mockups to visualize the user journey."
    },
    {
      icon: "💻",
      title: "Development",
      desc: "Writing clean, efficient React code integrated with modern AI tools."
    },
    {
      icon: "🚀",
      title: "Launch & Support",
      desc: "Deploying the site and ensuring it runs smoothly with ongoing maintenance."
    }
  ];

  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <h2 className={styles.header}>My Core <span className={styles.highlight}>Process</span></h2>
        
        <div className={styles.stepsWrapper}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepItem}>
              <div className={styles.iconBox}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              {index !== steps.length - 1 && <div className={styles.connector}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;