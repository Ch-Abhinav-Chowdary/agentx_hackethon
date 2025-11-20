import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                    className="about-content"
                >
                    <h2 className="section-title">
                        THE <span className="text-gradient">MISSION</span>
                    </h2>
                    <p className="about-text">
                        AgentX is not just a hackathon; it's a glimpse into the future of autonomous intelligence.
                        We are gathering the brightest minds to push the boundaries of what AI agents can achieve.
                    </p>
                    <p className="about-text">
                        Over 48 hours, you will have access to cutting-edge models, exclusive APIs, and mentorship
                        from industry leaders. Whether you're building autonomous trading bots, creative assistants,
                        or next-gen security agents, this is your platform.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="about-visual"
                >
                    <div className="hologram-container">
                        <div className="hologram-ring ring-1"></div>
                        <div className="hologram-ring ring-2"></div>
                        <div className="hologram-ring ring-3"></div>
                        <div className="hologram-core"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
