import React from "react";
import styles from "./VisionMission.module.css";

const VisionMission = () => {
  return (
    <section className={styles.vmSection}>
      <div className={styles.container}>
        {/* Vision Card */}
        <div className={styles.card}>
          <div className={styles.iconBox}>👁️</div>
          <h3 className={styles.title}>My Vision</h3>
          <p className={styles.text}>
            To become a leading architect of digital innovation in Tamil Nadu and beyond, 
            where code meets creativity. I envision a web where AI and human-centric 
            design coexist to create seamless, intelligent, and beautiful user experiences.
          </p>
        </div>

        {/* Mission Card */}
        <div className={`${styles.card} ${styles.missionCard}`}>
          <div className={styles.iconBox}>🚀</div>
          <h3 className={styles.title}>My Mission</h3>
          <p className={styles.text}>
            To deliver high-quality, scalable frontend solutions that solve real-world problems. 
            I am committed to continuous learning, bridging the gap between complex backend 
            logic and intuitive UI, ensuring every client project is a masterpiece of efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;