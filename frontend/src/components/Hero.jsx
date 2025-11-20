import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import HackerText from './HackerText';
import './Hero.css';

const Hero = () => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (event) => {
        const rect = cardRef.current.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="glow-sphere sphere-1"></div>
                <div className="glow-sphere sphere-2"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-badge"
                >
                    <span className="pulse-dot"></span>
                    Registration Open for 2025
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-title"
                >
                    BUILD THE FUTURE <br />
                    WITH <HackerText text="AGENTFORCE" className="text-gradient" />
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-subtitle"
                >
                    Join the elite league of developers to build autonomous agents,
                    automate workflows, and revolutionize industries using Salesforce's Agentforce.
                </motion.p>

                <motion.div
                    ref={cardRef}
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                        x.set(0);
                        y.set(0);
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="hero-stats"
                >
                    <div className="stat-item">
                        <Code size={24} className="stat-icon" />
                        <div className="stat-info">
                            <span className="stat-value">Rs 1 Lakh+</span>
                            <span className="stat-label">Prizes</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <Cpu size={24} className="stat-icon" />
                        <div className="stat-info">
                            <span className="stat-value">500+</span>
                            <span className="stat-label">Hackers</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <Globe size={24} className="stat-icon" />
                        <div className="stat-info">
                            <span className="stat-value">Global</span>
                            <span className="stat-label">Participation</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;