import React from "react";
import styles from "./Skills.module.css";

// Importing Images (Assumed paths based on your previous structure)
import reactImg from "../../assets/HomePage1/Skills/1.webp";
import tailwindImg from "../../assets/HomePage1/Skills/2.webp";
import jsImg from "../../assets/HomePage1/Skills/3.webp";
import aiImg from "../../assets/HomePage1/Skills/4.webp";
import htmlImg from "../../assets/HomePage1/Skills/5.webp";
import bootstrapImg from "../../assets/HomePage1/Skills/6.webp";

const Skills = () => {
  const skillsData = [
    { name: "React JS", level: "Advanced", color: "#61DAFB", image: reactImg },
    { name: "Tailwind CSS", level: "Advanced", color: "#38B2AC", image: tailwindImg },
    { name: "JavaScript", level: "Expert", color: "#F7DF1E", image: jsImg },
    { name: "AI Integration", level: "Intermediate", color: "#a855f7", image: aiImg },
    { name: "HTML5 / CSS3", level: "Expert", color: "#E34F26", image: htmlImg },
    { name: "Bootstrap", level: "Advanced", color: "#7952B3", image: bootstrapImg },
  ];

  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Technical <span className={styles.highlight}>Expertise</span></h2>
        <div className={styles.grid}>
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ "--hover-color": skill.color }}
            >
              <div className={styles.iconBox}>
                <img src={skill.image} alt={skill.name} className={styles.skillImage} />
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <p className={styles.skillLevel}>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;