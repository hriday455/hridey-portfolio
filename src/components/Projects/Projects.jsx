// src/components/Projects/Projects.jsx
import React from 'react';
import './Projects.css';
import { Fade } from 'react-awesome-reveal';
import { FaGithub, FaExternalLinkAlt, FaCodeBranch, FaStar, FaEnvelope } from 'react-icons/fa'; // Added FaEnvelope

// Import your project images with correct casing to match your filenames
import linkedinCloneImg from '../../assets/linkedin-clone.PNG';
import axelivaCloudImg from '../../assets/axeliva-cloud.PNG';

const projectsData = [
  {
    id: 1,
    title: "LinkedIn Clone",
    image: linkedinCloneImg,
    description: "Built using React JS, Redux, Firebase & Styled-Components. My first project after learning React JS, referencing a YouTube tutorial by 'Clever Programmer'. Added features like post liking and mobile responsiveness.",
    functionality: [
        "Login using Google (Firebase Authentication)",
        "Create a new post",
        "Share photos and videos (React player for videos)",
        "Like posts with real-time updates",
        "Auto authenticate user on refresh",
        "Sign Out functionality",
        "Mobile responsive design"
    ],
    tags: ["React JS", "Redux", "Firebase", "Styled-Components"],
    githubLink: "https://github.com/hriday455/linkedin-clone",
    liveLink: ""
  },
  {
    id: 2,
    title: "Axeliva-Cloud Website",
    image: axelivaCloudImg,
    description: "A responsive and modern website template for educational institutions. Built using HTML, CSS, and JavaScript, it offers a clean layout for schools, colleges, or ERP systems, emphasizing user-friendly navigation and mobile compatibility.",
    functionality: [
        "Responsive design for all devices",
        "Modern UI/UX tailored for educational purposes",
        "User-friendly navigation",
        "Clean and professional layout",
        "Sections for courses, faculty, admissions, etc. (example sections)",
        "Contact form integration (example)"
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/hriday455/Axeliva-Cloud",
    liveLink: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <Fade direction="down" triggerOnce>
          <h2>My <span className="purple">Projects</span></h2>
          <p>Here are a few projects I've worked on.</p>
        </Fade>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <Fade direction="up" triggerOnce key={project.id} delay={project.id * 100} style={{width: '100%'}}>
              <div className="project-card">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-button github-button">
                      <FaCodeBranch /> <FaStar style={{marginLeft: '2px', marginRight: '5px'}} /> GitHub
                    </a>
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button live-button">
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div> {/* End of .projects-grid */}

        {/* --- "More Projects Teaser" Section Starts Here --- */}
        <Fade direction="up" triggerOnce delay={projectsData.length * 100 + 200}>
          <div className="more-projects-teaser">
            <h3>The Innovation Lab is Always Open!</h3>
            <p>
              Beyond these, several exciting new projects are currently brewing in my development environment. 
              I'm constantly exploring new technologies and challenging myself with fresh ideas. 
              Stay tuned for more updates as these creations come to life!
            </p>
            <p className="teaser-contact">
              Curious about what's next or want to collaborate? 
              <a href="mailto:hridays2003@gmail.com" className="teaser-email-link">
                <FaEnvelope style={{ marginRight: '5px', verticalAlign: 'middle' }} /> Reach out!
              </a>
            </p>
          </div>
        </Fade>
        {/* --- "More Projects Teaser" Section Ends Here --- */}

      </div>
    </section>
  );
};

export default Projects;