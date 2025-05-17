// src/components/ParticleBackground/ParticleBackground.js
import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // You can do something with the container if needed
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent", // Make background transparent so App.css background shows
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: false, // Keep it subtle
                            mode: "repulse",
                        },
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                        push: {
                            quantity: 4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: false, // No lines between particles
                        opacity: 0.1,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: 0.5, // Slower speed for starry effect
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000, // Adjust for more/less stars
                        },
                        value: 100, // Number of particles
                    },
                    opacity: {
                        value: { min: 0.1, max: 0.5 }, // Random opacity
                        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 }, // Random size
                        anim: { enable: true, speed: 2, size_min: 0.3, sync: false }
                    },
                },
                detectRetina: true,
                fullScreen: {
                    enable: true,
                    zIndex: 0 // Send particles to the very back
                }
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0, // Ensure it's behind all other content
            }}
        />
    );
};

export default ParticleBackground;