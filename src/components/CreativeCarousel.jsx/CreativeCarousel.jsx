import React from "react";
import styles from "./CreativeCarousel.module.css";
// Replace with project images
import img1 from "../../assets/HomePage2/CreativeCarousel/1.webp";
import img2 from "../../assets/HomePage2/CreativeCarousel/2.webp";
import img3 from "../../assets/HomePage2/CreativeCarousel/3.webp";
import img4 from "../../assets/HomePage2/CreativeCarousel/4.webp";

const CreativeCarousel = () => {
  const slides = [
    { id: 1, title: "FinTech UI", img: img1 },
    { id: 2, title: "AI Portal", img: img2 },
    { id: 3, title: "E-Shop", img: img3 },
    { id: 4, title: "Crypto", img: img4 }, 
  ];

  return (
    <section className={styles.carouselSection}>
      <div className={styles.header}>
        <h2>Selected <span className={styles.highlight}>Works</span></h2>
      </div>
      
      <div className={styles.scrollContainer}>
        <div className={styles.track}>
          {slides.map((slide) => (
            <div key={slide.id} className={styles.skewCard}>
              <img src={slide.img} alt={slide.title} />
              <div className={styles.cardContent}>
                <h3>{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeCarousel;