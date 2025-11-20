import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
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
                    WITH <span className="text-gradient">AGENTFORCE</span>
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-actions"
                >
                    <button className="primary-btn">
                        Register Now <ArrowRight size={20} />
                    </button>
                    <Link to="/domains" className="secondary-btn">
                        View Domains
                    </Link>
                </motion.div>

                <motion.div
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
