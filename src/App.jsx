// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Projects from './components/Projects/Projects.jsx';
import Resume from './components/Resume/Resume.jsx';
import Footer from './components/Footer/Footer.jsx';
import ParticleBackground from './components/ParticleBackground/ParticleBackground.jsx';

// Import from Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Define animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw", // Start off-screen to the left
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0, // Animate to center
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw", // Animate off-screen to the right
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween", // You can experiment with "spring", "tween", etc.
  ease: "anticipate", // "easeInOut", "circOut", etc.
  duration: 0.6 // Adjust duration as needed
};

function App() {
  const location = useLocation(); // Get current location for AnimatePresence key

  return (
    <div className="App">
      <ParticleBackground />
      <div className="main-content">
        <Navbar />
        {/* AnimatePresence is key for exit animations */}
        {/* We use location.pathname as the key so AnimatePresence knows when the route changes */}
        <AnimatePresence mode="wait"> {/* 'wait' ensures the exiting component finishes its animation before the new one enters */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            } />
            <Route path="/experience" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Experience />
              </motion.div>
            } />
            <Route path="/projects" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Projects />
              </motion.div>
            } />
            <Route path="/resume" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Resume />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}

export default App;