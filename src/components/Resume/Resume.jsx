// src/components/Resume/Resume.jsx
import React from 'react';
import './Resume.css'; // Ensure this CSS file exists and path is correct
import { FaDownload } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const Resume = () => {
  // For Vite, access files in the /public folder with a root-relative path
  // Ensure resume.pdf is directly inside your project's /public folder
  const resumeUrl = '/resume.pdf';

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <Fade direction="down" triggerOnce>
          <h2>My <span className="purple">Resume</span></h2>
          <p>Download my resume or view it directly below.</p>
        </Fade>
        
        <Fade direction="up" triggerOnce delay={100}>
          <a href={resumeUrl} download="Hridey_Sharma_Resume.pdf" className="btn resume-button">
            <FaDownload /> Download CV
          </a>
        </Fade>

        {/* --- PDF Viewer Starts Here --- */}
        <Fade direction="up" triggerOnce delay={200}>
          <div className="resume-viewer">
            <iframe
              // Adding #toolbar=0&navpanes=0 tries to hide default PDF viewer controls for a cleaner look
              // This works in most modern browsers.
              // You can also try #view=fitH to fit horizontally, or #view=fitV to fit vertically
              src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`} // Added scrollbar=0
              title="Hridey Sharma Resume" // Important for accessibility
              width="100%" // The .resume-viewer class will control max-width
              height="750px" // Adjust this height as needed for your resume's length
              style={{ border: '1px solid var(--border-color)', borderRadius: '8px' }} // Optional styling
            >
              {/* Fallback content for browsers that don't support inline PDFs */}
              <p>
                Your browser does not support viewing PDFs directly.
                Please <a href={resumeUrl} download="Hridey_Sharma_Resume.pdf">download the PDF</a> to view it.
              </p>
            </iframe>
          </div>
        </Fade>
        {/* --- PDF Viewer Ends Here --- */}

      </div>
    </section>
  );
};

export default Resume;