// src/components/About/About.jsx
import React from 'react';
import './About.css';
import { Fade } from 'react-awesome-reveal';

import myPhoto from '../../assets/hridey-photo.jpeg';

import { FaCube, FaPlane, FaJava, FaReact, FaPython, FaNodeJs, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaVuejs, FaGithub, FaFutbol } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiDjango, SiPostman, SiJira } from 'react-icons/si';
// REMOVED: import { DiVisualStudio } from 'react-icons/di'; 


const professionalSkills = [
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Vue.js", icon: <FaVuejs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "SQL", icon: null },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Agile Methodologies", icon: null },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Redux", icon: <SiRedux /> },
];

const tools = [
  { name: "VSCode", icon: null }, // CHANGED: Set icon to null for now
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "JIRA", icon: <SiJira /> },
  { name: "Postman", icon: <SiPostman /> },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <Fade direction="down" triggerOnce>
          <div className="about-intro">
            <h2>LET ME <span className="purple">INTRODUCE</span> MYSELF</h2>
            <p>A passionate problem-solver and technology enthusiast.</p>
            <p>I am fluent in classics like <span className="purple">Java, Javascript, React.js, Vue.js, Python.</span></p>
            <p>I'm passionate about developing innovative <span className="purple">Web Technologies</span> with a keen interest in solving problem statements.</p>
            <p>As a Developer at <span className="purple">Data-Engine</span>, I specialize in Tech Stack: <span className="purple">HTML5/CSS3, Javascript, React.js, Redux, TypeScript, SQL, Node.js, Agile Methodologies, Java, Vue.</span></p>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce delay={200}>
          <div className="about-me-container">
            <div className="about-me-text">
              <h2>KNOW WHO <span className="purple">I'M</span></h2>
              <p>Hi Everyone, I am Hridey Sharma from <span className="purple">Haryana, India.</span></p>
              <p>Currently working at Data Engine as a Software Trainee, and previously completed internships at Test Yantra and SudoFire Technologies.</p>
              <p>I have completed Bachelor of Computer Applications at <span className="purple">Sanskriti University.</span></p>
              <p>Apart from coding, some other activities that I love to do!</p>
              <ul className="hobbies-list">
                <li><FaCube /> Solving Rubik's Cube</li>
                <li><FaFutbol /> Playing Cricket, Football</li>
                <li><FaPlane /> Travelling</li>
              </ul>
            </div>
            <div className="about-me-photo-container">
              <img src={myPhoto} alt="Hridey Sharma" className="about-me-photo" />
            </div>
          </div>
        </Fade>
        
        <Fade direction="up" triggerOnce delay={300}>
          <div className="skills-container">
            <h2 className="skills-title">Professional <span className="purple">Skillset</span></h2>
            <div className="skills-grid">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  {skill.icon && React.cloneElement(skill.icon, { size: "2.5em", className: "skill-icon" })}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce delay={400}>
          <div className="tools-container">
            <h2 className="tools-title"><span className="purple">Tools</span> I Use</h2>
            <div className="skills-grid">
              {tools.map((tool, index) => (
                <div key={index} className="skill-card tool-card">
                  {tool.icon && React.cloneElement(tool.icon, { size: "2.5em", className: "skill-icon" })}
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;