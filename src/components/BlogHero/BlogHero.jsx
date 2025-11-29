import React from "react";
import styles from "./BlogHero.module.css";

const BlogHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.label}>
            <span className={styles.line}></span>
            <span>Insights & Updates</span>
            <span className={styles.line}></span>
          </div>
          
          <h1 className={styles.title}>
            Latest <span className={styles.highlight}>Blog</span>
          </h1>
          
          <p className={styles.description}>
            Our happy customers give us impactful and positive feedback on our 
            services, customer support, and the technical expertise we bring to every project.
            Explore our latest thoughts on technology and design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;