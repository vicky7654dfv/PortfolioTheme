import React from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import styles from "./Resume.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import cvTemp from "../../assets/HomePage1/Banner1/CVTemp.pdf"; 

const Resume = () => {
  const navigate = useNavigate();

  const educationData = [
    {
      id: 1,
      degree: "Master in Computer Applications",
      place: "Anna University, Chennai / 2018 - 2020",
      desc: "Specialized in Full Stack Development and AI algorithms. Graduated with distinction.",
    },
    {
      id: 2,
      degree: "Bachelor in Computer Science",
      place: "Anna University, Chennai / 2014 - 2018",
      desc: "Foundation in Data Structures, OOPs, and Web Technologies. Active Coding Club Lead.",
    },
    {
      id: 3,
      degree: "HSC (State Board)",
      place: "Govt Hr Sec School, Madurai / 2012 - 2014",
      desc: "Completed with 92% marks. Major focus on Mathematics and Computer Science.",
    },
  ];

  const experienceData = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      place: "Tech Solutions (Remote) / 2023 - Present",
      desc: "Leading a team of 5 devs. Architecting scalable React apps with AI integration.",
    },
    {
      id: 2,
      role: "Web Developer",
      place: "Creative Agency, Chennai / 2021 - 2023",
      desc: "Developed 20+ responsive websites for international clients using React & GSAP.",
    },
    {
      id: 3,
      role: "Junior React Developer",
      place: "StartUp Inc, Coimbatore / 2020 - 2021",
      desc: "Collaborated with UI/UX teams to translate Figma designs into pixel-perfect code.",
    },
  ];

  const techSkills = [
    { name: "React / Next.js", percent: 95 },
    { name: "JavaScript (ES6+)", percent: 90 },
    { name: "Tailwind CSS", percent: 98 },
    { name: "AI Integration", percent: 85 },
  ];

  const awards = [
    { year: "2025", title: "Best UI Design", org: "Awwwards Nominee", desc: "For the 'Future Tech' Dashboard project." },
    { year: "2024", title: "Top Developer", org: "Tech Solutions Internal", desc: "Awarded for consistent code quality." },
    { year: "2023", title: "Hackathon Winner", org: "Chennai Dev Fest", desc: "First place in AI-Web integration track." },
    { year: "2022", title: "Star Performer", org: "Creative Agency", desc: "Delivered 5 critical projects ahead of time." },
  ];

  return (
    <>
      <Header />
      
      {/* Outer Container with Gradient and Animation */}
      <main className={styles.resumePageWrapper}>
        <div className={styles.container}>
          
          {/* Page Header */}
          <div className={styles.pageHeader}>
            <div className={styles.titleGroup}>
              <h4 className={styles.subHeading}>My Journey</h4>
              <h2 className={styles.mainHeading}>Resume</h2>
            </div>
            {/* Download PDF Button */}
            <a 
              href={cvTemp} 
              download="Henry_Martin_Resume.pdf" 
              className={styles.downloadBtn}
            >
              Download CV <i className="fa-solid fa-download"></i>
            </a>
          </div>

          <div className={styles.gridContainer}>
            
            {/* Column 1: Education */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>
                <i className="fa-solid fa-graduation-cap"></i> Education
              </h3>
              <div className={styles.timeline}>
                {educationData.map((item) => (
                  <div key={item.id} className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <h4 className={styles.itemTitle}>{item.degree}</h4>
                    <span className={styles.itemPlace}>{item.place}</span>
                    <p className={styles.itemDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Experience */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>
                <i className="fa-solid fa-briefcase"></i> Experience
              </h3>
              <div className={styles.timeline}>
                {experienceData.map((item) => (
                  <div key={item.id} className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <h4 className={styles.itemTitle}>{item.role}</h4>
                    <span className={styles.itemPlace}>{item.place}</span>
                    <p className={styles.itemDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className={styles.skillsWrapper}>
            <div className={styles.skillsGrid}>
              {/* Left: Top Skills Tags */}
              <div className={styles.topSkillsBox}>
                <h3 className={styles.skillHeading}>Top Skills</h3>
                <div className={styles.tagCloud}>
                  <span>Frontend Architecture</span>
                  <span>UI/UX Implementation</span>
                  <span>Performance Optimization</span>
                  <span>API Integration</span>
                  <span>Version Control (Git)</span>
                  <span>Agile Methodology</span>
                </div>
              </div>

              {/* Right: Coding Skills Progress */}
              <div className={styles.codingSkillsBox}>
                <h3 className={styles.skillHeading}>Coding Proficiency</h3>
                <div className={styles.progressList}>
                  {techSkills.map((skill, index) => (
                    <div key={index} className={styles.progressItem}>
                      <div className={styles.progressLabel}>
                        <span>{skill.name}</span>
                        <span>
                          <CountUp end={skill.percent} duration={2} enableScrollSpy />%
                        </span>
                      </div>
                      <div className={styles.progressBarBg}>
                        <div 
                          className={styles.progressBarFill} 
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className={styles.awardsSection}>
            <h3 className={styles.awardsTitle}>Honors & Awards</h3>
            <div className={styles.awardsGrid}>
              {awards.map((award, index) => (
                <div key={index} className={styles.awardCard}>
                  <div className={styles.awardYear}>{award.year}</div>
                  <h4 className={styles.awardName}>{award.title}</h4>
                  <span className={styles.awardOrg}>{award.org}</span>
                  <p className={styles.awardDesc}>{award.desc}</p>
                  <div className={styles.awardIcon}>
                    <i className="fa-solid fa-trophy"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={styles.footerAction}>
             <p>Ready to build something amazing?</p>
             <button className={styles.contactBtn} onClick={() => navigate("/Contact")}>
               Contact Me
             </button>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default Resume;