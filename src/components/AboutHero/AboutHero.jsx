import React from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import styles from "./AboutHero.module.css";
import profileImg from "../../assets/About/AboutHero/imgHero.webp"; 

const AboutHero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.aboutHero}>
      <div className={styles.container}>
        {/* Left: Image & Stats overlay */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <img src={profileImg} alt="Henry Martin" className={styles.profileImg} />
            <div className={styles.floatingStat}>
              <span className={styles.statNumber}>
                <CountUp end={3} duration={2} />+
              </span>
              <span className={styles.statLabel}>Years of Exp.</span>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className={styles.contentCol}>
          <h4 className={styles.subHeading}>I'm Henry Martin</h4>
          <h1 className={styles.mainHeading}>
            Your Web <span className={styles.highlight}>Expert</span>
          </h1>

          <p className={styles.bio}>
            Hello! I’m Henry, a passionate <strong>Frontend Developer</strong> & UI Specialist with over 
            3 years of experience. I started coding in college and now craft pro-level 
            digital solutions. I transform ideas into impactful digital experiences, 
            delivering innovative AI-integrated solutions that elevate brands.
          </p>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Name:</span>
              <span className={styles.value}>Henry Martin</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Nationality:</span>
              <span className={styles.value}>Indian</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Phone:</span>
              <span className={styles.value}>+91 98765 43210</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Email:</span>
              <span className={styles.value}>henry.dev@example.com</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Freelance:</span>
              <span className={styles.valueHighlight}>Available</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Languages:</span>
              <span className={styles.value}>English, Tamil</span>
            </div>
          </div>

          <div className={styles.btnWrapper}>
            <button className={styles.primaryBtn} onClick={() => navigate("/Contact")}>
              Contact Me
            </button>
            <button className={styles.secondaryBtn} onClick={() => navigate("/Error")}>
              Sample Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;