import React from "react";
import styles from "./SampleWebsites.module.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/Services/SampleWebsites/1.webp"; 
import img2 from "../../assets/Services/SampleWebsites/2.webp"; 
import img3 from "../../assets/Services/SampleWebsites/3.webp"; 

const SampleWebsites = () => {
  const navigate = useNavigate();

  const websites = [
    { id: 1, title: "FinTech Dashboard", category: "React App", img: img1 },
    { id: 2, title: "Luxury Fashion", category: "E-Commerce", img: img2 },
    { id: 3, title: "Creative Agency", category: "Portfolio", img: img3 },
  ];

  return (
    <section className={styles.sampleSection}>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
           <h2 className={styles.title}>Visual <span className={styles.highlight}>Samples</span></h2>
           <p className={styles.sub}>Check out some of the interface styles available.</p>
        </div>
        
        <div className={styles.grid}>
          {websites.map((site) => (
            <div key={site.id} className={styles.frame}>
              <div className={styles.browserHeader}>
                <div className={styles.dots}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
              </div>
              <div className={styles.imgContainer}>
                <img src={site.img} alt={site.title} className={styles.image} />
                <div className={styles.overlay}>
                  <h3>{site.title}</h3>
                  <span>{site.category}</span>
                  <button onClick={() => navigate("/Error")}>View Demo</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleWebsites;