import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreativeSplit.module.css";
import designImg from "../../assets/About/CreativeSplit/img.webp"; 

const CreativeSplit = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.splitSection}>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
           <img src={designImg} alt="Creative Design" className={styles.image} />
           <div className={styles.overlayText}>VISIONARY</div>
        </div>
        
        <div className={styles.textWrapper}>
           <h2 className={styles.bigText}>
             Designing the <br/> 
             <span className={styles.gradientText}>Future.</span>
           </h2>
           <p className={styles.desc}>
             I don't just follow trends; I aim to set them. By combining rigorous 
             frontend logic with artistic fluidity, I create web solutions that 
             stand the test of time.
           </p>
           <button 
             className={styles.ctaBtn} 
             onClick={() => navigate("/Contact")}
           >
             Start a Project
           </button>
        </div>
      </div>
    </section>
  );
};

export default CreativeSplit;