import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, HeartPulse, Landmark, Server, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import './Domains.css';

const domains = [
    {
        id: 'business',
        title: 'Business Automation',
        icon: <Briefcase size={32} />,
        color: 'var(--accent-cyan)',
        description: 'Revolutionize enterprise workflows with autonomous agents.',
        problems: [
            'Automated Customer Support Agent',
            'Intelligent Supply Chain Optimizer',
            'HR Recruitment & Onboarding Bot',
            'Legal Document Analysis System',
            'Market Trend Prediction Engine'
        ]
    },
    {
        id: 'service',
        title: 'Service Automation',
        icon: <Server size={32} />,
        color: 'var(--accent-purple)',
        description: 'Enhance service delivery through intelligent automation.',
        problems: [
            'Predictive Maintenance System',
            'IT Service Desk Auto-Resolver',
            'Field Service Dispatcher Agent',
            'Personalized Concierge Bot',
            'Event Management Coordinator'
        ]
    },
    {
        id: 'finance',
        title: 'Finance',
        icon: <Landmark size={32} />,
        color: '#ffd700',
        description: 'Secure and smart financial solutions for the future.',
        problems: [
            'Fraud Detection & Prevention Agent',
            'Personalized Investment Advisor',
            'Automated Tax Compliance System',
            'Crypto Portfolio Manager',
            'Loan Eligibility Analyzer'
        ]
    },
    {
        id: 'healthcare',
        title: 'Healthcare',
        icon: <HeartPulse size={32} />,
        color: '#ff0055',
        description: 'AI-driven solutions for better patient outcomes.',
        problems: [
            'Symptom Checker & Triage Bot',
            'Patient Monitoring Dashboard',
            'Medical Record Summarizer',
            'Drug Interaction Checker',
            'Mental Health Support Companion'
        ]
    },
    {
        id: 'smartcity',
        title: 'Smart City',
        icon: <Building2 size={32} />,
        color: '#00ff88',
        description: 'Building sustainable and intelligent urban environments.',
        problems: [
            'Traffic Flow Optimization Agent',
            'Waste Management Scheduler',
            'Energy Consumption Optimizer',
            'Public Safety Monitoring System',
            'Smart Parking Assistant'
        ]
    }
];

const DomainCard = ({ domain, index, expandedDomain, toggleDomain }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`domain-card glass ${expandedDomain === domain.id ? 'expanded' : ''}`}
            onClick={() => toggleDomain(domain.id)}
        >
            <div className="domain-header" style={{ '--domain-color': domain.color }}>
                <div className="domain-icon-wrapper" style={{ color: domain.color }}>
                    {domain.icon}
                </div>
                <div className="domain-info">
                    <h3 className="domain-title">{domain.title}</h3>
                    <p className="domain-desc">{domain.description}</p>
                </div>
                <div className="domain-toggle">
                    {expandedDomain === domain.id ? <ChevronUp /> : <ChevronDown />}
                </div>
            </div>

            <AnimatePresence>
                {expandedDomain === domain.id && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="domain-problems"
                        style={{ '--domain-color': domain.color }}
                    >
                        <h4>Problem Statements:</h4>
                        <ul>
                            {domain.problems.map((problem, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    style={{ borderLeftColor: domain.color }}
                                >
                                    {problem}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="domain-glow" style={{ background: domain.color }}></div>
        </motion.div>
    );
};

const Domains = () => {
    const [expandedDomain, setExpandedDomain] = useState(null);

    const toggleDomain = (id) => {
        setExpandedDomain(expandedDomain === id ? null : id);
    };

    return (
        <section id="domains" className="domains-section">
            <div className="domains-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="section-title text-center val"
                >
                    HACKATHON <span className="text-gradient">DOMAINS</span>
                </motion.h2>

                <div className="domains-grid">
                    {domains.map((domain, index) => (
                        <DomainCard
                            key={domain.id}
                            domain={domain}
                            index={index}
                            expandedDomain={expandedDomain}
                            toggleDomain={toggleDomain}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Domains;
