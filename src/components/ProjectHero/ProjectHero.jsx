import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectHero.module.css";
import heroBg from "../../assets/HomePage2/ProjectHero/img.webp"; 

const ProjectHero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.heroSection} style={{ backgroundImage: `url(${heroBg})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subHeading}>Next Generation Frontend</p>
          <h1 className={styles.title}>
            Building Digital <br />
            <span className={styles.highlight}>Masterpieces.</span>
          </h1>
          <p className={styles.description}>
            I craft immersive, high-performance web applications that merge 
            artistic vision with robust engineering. Let's define the future of the web.
          </p>
          <button className={styles.ctaBtn} onClick={() => navigate("/Contact")}>
            Start Collaboration
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;