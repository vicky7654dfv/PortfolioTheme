import React from "react";
import styles from "./Banner1.module.css";
import heroImage from "../../assets/HomePage1/Banner1/img.webp";
import cvFile from "../../assets/HomePage1/Banner1/CVTemp.pdf";

const Banner1 = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        {/* Left Side: Content */}
        <div className={styles.contentWrapper}>
          <h3 className={styles.greeting}>
            Hi there! <span className={styles.wave}>👋</span>
          </h3>
          <h1 className={styles.title}>
            Creative Web & <br />
            <span className={styles.highlight}>UI Designer</span>.
          </h1>
          <p className={styles.description}>
            I am a visionary creative designer, known for my ability to turn
            concepts into captivating visual narratives. My deep passion for the
            world of design allows me to craft compelling stories through my
            artistic ingenuity.
          </p>

          <a href={cvFile} download="Henry_Martin_CV" className={styles.cvButton}>
            Download CV
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
          </a>
        </div>

        {/* Right Side: Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageBackgroundBlob}></div>
          <img
            src={heroImage}
            alt="Henry Martin - Creative Designer"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner1;