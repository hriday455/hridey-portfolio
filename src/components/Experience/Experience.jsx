// src/components/Experience/Experience.js
import React from 'react';
import './Experience.css';
import { Fade } from 'react-awesome-reveal';

const experiences = [
  {
    id: 1,
    title: "Software Trainee",
    company: "Data Engine",
    duration: "Present",
    points: [
      "Expanding knowledge in software development and DevOps practices.",
      "Refining skills in Java, SQL, and Web Technologies.",
      "Learning about Docker and its real-world applications.",
      "Actively involved in a team project—an ERP system built using Vue.js and containerized with Docker (in progress)."
    ]
  },
  {
    id: 2,
    title: "Internship",
    company: "Test Yantra",
    duration: "Mar 2024 - Sep 2024 (Selected via Campus Placement)",
    points: [
      "Further strengthened understanding of corporate work culture.",
      "Enhanced technical skills in Java, SQL, and Web Technologies (HTML, CSS, JavaScript).",
      "Built a solid foundation in both backend and frontend development."
    ]
  },
  {
    id: 3,
    title: "Internship",
    company: "SudoFire Technologies",
    duration: "Jan 2024 – Mar 2024",
    points: [
      "Gained hands-on experience with Django and its practical implementation.",
      "Actively contributed to a team project titled 'Parking Assistance'.",
      "Enhanced backend development skills and deepened understanding of web frameworks.",
      "Exposed to corporate work culture, improving teamwork and communication abilities."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <Fade direction="down" triggerOnce>
          <h2>My Work <span className="purple">Experience</span></h2>
        </Fade>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <Fade key={exp.id} direction={index % 2 === 0 ? "left" : "right"} triggerOnce delay={index * 100}>
              <div className="experience-card">
                <h3>{exp.title} at <span className="purple">{exp.company}</span></h3>
                <p className="experience-duration">{exp.duration}</p>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;