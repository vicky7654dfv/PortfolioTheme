import React from "react";
import styles from "./CoreValues.module.css";

const CoreValues = () => {
  const values = [
    {
      id: 1,
      icon: "💡",
      title: "Innovative Thinking",
      desc: "I don't just code; I create. Thinking outside the box to solve complex problems.",
    },
    {
      id: 2,
      icon: "⚡",
      title: "Fast Performance",
      desc: "Optimized code ensuring lighting fast load times and smooth interactions.",
    },
    {
      id: 3,
      icon: "🤖",
      title: "AI Integrated",
      desc: "Leveraging the power of Artificial Intelligence to build smarter applications.",
    },
    {
      id: 4,
      icon: "📱",
      title: "Mobile First",
      desc: "Responsive designs that look flawless on any device, from phone to desktop.",
    },
  ];

  return (
    <section className={styles.coreSection}>
      <div className={styles.container}>
        <h2 className={styles.header}>My Core <span className={styles.highlight}>Values</span></h2>
        <div className={styles.grid}>
          {values.map((val) => (
            <div key={val.id} className={styles.valueItem}>
              <div className={styles.iconWrapper}>{val.icon}</div>
              <h4 className={styles.title}>{val.title}</h4>
              <p className={styles.desc}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;