import React from "react";
import styles from "./Skills.module.css";
// You can import icons here or use SVGs directly. I will use text/css for simplicity.

const Skills = () => {
  const skillsData = [
    { name: "React JS", level: "Advanced", color: "#61DAFB" },
    { name: "Tailwind CSS", level: "Advanced", color: "#38B2AC" },
    { name: "JavaScript", level: "Expert", color: "#F7DF1E" },
    { name: "AI Integration", level: "Intermediate", color: "#a855f7" },
    { name: "HTML5 / CSS3", level: "Expert", color: "#E34F26" },
    { name: "Bootstrap", level: "Advanced", color: "#7952B3" },
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
              <div className={styles.iconBox} style={{ backgroundColor: skill.color }}></div>
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