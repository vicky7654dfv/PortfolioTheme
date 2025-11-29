import React, { useRef } from "react";
import styles from "./ServiceCarousel.module.css";
import { useNavigate } from "react-router-dom";

const ServiceCarousel = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const services = [
    { id: 1, name: "Landing Pages", price: "Dynamic", desc: "High conversion landing pages with scroll animations." },
    { id: 2, name: "React Dashboards", price: "Scalable", desc: "Complex data visualization and admin panels." },
    { id: 3, name: "E-Commerce UI", price: "Secure", desc: "Product grids, carts, and seamless checkout flows." },
    { id: 4, name: "Portfolio Sites", price: "Creative", desc: "Personal branding websites with unique flair." },
    { id: 5, name: "API Integration", price: "Robust", desc: "Connecting your frontend to any backend service." },
  ];

  return (
    <section className={styles.carouselSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Service <span className={styles.highlight}>Packages</span></h2>
          <div className={styles.arrows}>
            <button onClick={() => scroll("left")} className={styles.arrowBtn}>←</button>
            <button onClick={() => scroll("right")} className={styles.arrowBtn}>→</button>
          </div>
        </div>

        <div className={styles.carouselTrack} ref={scrollRef}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.number}>0{service.id}</span>
                <h3 className={styles.cardTitle}>{service.name}</h3>
              </div>
              <p className={styles.cardDesc}>{service.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.tag}>{service.price}</span>
                <button className={styles.addBtn} onClick={() => navigate("/Error")}>📊</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;