import React from "react";
import CountUp from "react-countup"; // Ensure you install: npm install react-countup
import styles from "./Home1About.module.css";
import profileShape from "../../assets/Header/logo.webp"; 

const Home1About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Text */}
          <div className={styles.textWrapper}>
            <h4 className={styles.subTitle}>About Me</h4>
            <h2 className={styles.title}>
              Turning Complex Logic into <br />
              <span className={styles.highlight}>Simple Designs</span>.
            </h2>
            <p className={styles.description}>
              I am Henry Martin, a passionate Frontend Developer based in
              Tamil Nadu with over 3 years of experience. I specialize in building
              responsive, AI-integrated web applications. Whether working
              remotely or on-site, I bring a problem-solving mindset to every
              project.
            </p>
            
            <div className={styles.softSkills}>
              <span className={styles.skillTag}>Problem Solving</span>
              <span className={styles.skillTag}>Team Collaboration</span>
              <span className={styles.skillTag}>Adaptive Learning</span>
            </div>
          </div>

          {/* Right Stats */}
          <div className={styles.statsWrapper}>
             <div className={styles.statCard}>
                <h3 className={styles.statNumber}>
                  <CountUp end={3} duration={2.5} suffix="+" />
                </h3>
                <p className={styles.statLabel}>Years Experience</p>
             </div>
             <div className={styles.statCard}>
                <h3 className={styles.statNumber}>
                  <CountUp end={25} duration={3} suffix="+" />
                </h3>
                <p className={styles.statLabel}>Projects Completed</p>
             </div>
             <div className={styles.statCard}>
                <h3 className={styles.statNumber}>
                  <CountUp end={100} duration={2} suffix="%" />
                </h3>
                <p className={styles.statLabel}>Client Satisfaction</p>
             </div>
             <div className={styles.statCard}>
                <h3 className={styles.statNumber}>
                  <CountUp end={1200} duration={3} />
                </h3>
                <p className={styles.statLabel}>Hours of Coding</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home1About;