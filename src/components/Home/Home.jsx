// src/components/Home/Home.js
import React from 'react';
import './Home.css';
import Typewriter from 'react-typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import homeIllustration from '../../assets/developer_male-removebg-preview.png'; 
// You can add an illustration SVG/PNG in assets and import it here
// import homeIllustration from '../../assets/home-main.svg';


const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content container">
        <Fade direction="left" triggerOnce>
          <div className="home-text">
            <h1>
              Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
            </h1>
            <h1>
              I'M <strong className="purple">Hridey Sharma</strong>
            </h1>
            <div className="home-typewriter">
              <Typewriter
                options={{
                  strings: [
                    'Software Trainee',
                    'Java Developer',
                    'React.js Developer',
                    'Vue.js Developer',
                    'Problem Solver',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce>
          <div className="home-image">
            <img src={homeIllustration} alt="Male Developer Illustration" className="home-main-img" /> 
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Home;