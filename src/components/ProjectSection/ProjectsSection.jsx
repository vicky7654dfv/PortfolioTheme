import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import styles from "./ProjectsSection.module.css";
import project1 from "../../assets/HomePage1/ProjectsSection/1.webp";
import project2 from "../../assets/HomePage1/ProjectsSection/2.webp";
import project3 from "../../assets/HomePage1/ProjectsSection/3.webp";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
const navigate=useNavigate();
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with React, Redux, and Node.js integration.",
      image: project1,
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      features: [
        "Shopping Cart",
        "Payment Gateway",
        "User Authentication",
        "Admin Dashboard",
      ],
      status: "Completed",
    },
    {
      id: 2,
      title: "AI Analytics Dashboard",
      description:
        "Real-time data visualization with AI predictions and automated reporting.",
      image: project2,
      technologies: ["React", "D3.js", "Python", "TensorFlow"],
      features: [
        "Real-time Charts",
        "AI Predictions",
        "Export Reports",
        "Custom Alerts",
      ],
      status: "In Progress",
    },
    {
      id: 3,
      title: "Portfolio Management",
      description:
        "Modern portfolio website with CMS integration and dynamic content management.",
      image: project3,
      technologies: ["Next.js", "Tailwind CSS", "GraphQL", "Strapi"],
      features: [
        "CMS Integration",
        "SEO Optimized",
        "Fast Loading",
        "Mobile First",
      ],
      status: "Completed",
    },
  ];

  return (
    <section
      className={`${styles.projectsSection} ${isVisible ? styles.fadeIn : ""}`}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Featured <span className={styles.highlight}>Projects</span>
          </h2>
          <p className={styles.subtitle}>
            <span className={styles.countWrapper}>
              <CountUp end={50} duration={2} />+
            </span>{" "}
            projects delivered with excellence
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                />
                <div className={styles.statusBadge}>{project.status}</div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.techSection}>
                  <h4 className={styles.sectionLabel}>Technologies Used:</h4>
                  <div className={styles.techTags}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.featureSection}>
                  <h4 className={styles.sectionLabel}>Key Features:</h4>
                  <ul className={styles.featureList}>
                    {project.features.map((feature, index) => (
                      <li key={index} className={styles.featureItem}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.actions}>
                  <button className={styles.btnDemo} onClick={()=>{navigate("/Error")}}>Live Demo</button>
                  <button className={styles.btnCode} onClick={()=>{navigate("/Error")}}>View Code</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Summary */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <CountUp end={50} duration={2.5} className={styles.statNumber} />
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
          <div className={styles.statItem}>
            <CountUp end={35} duration={2} className={styles.statNumber} />
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
          <div className={styles.statItem}>
            <CountUp end={3} duration={1.5} className={styles.statNumber} />
            <span className={styles.statLabel}>Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;