import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQ.css';

const faqData = [
    {
        question: "Who can participate in the hackathon?",
        answer: "The hackathon is open to all students, developers, and tech enthusiasts. You can participate individually or as part of a team (up to 4 members)."
    },
    {
        question: "What is the team size limit?",
        answer: "Teams can have a minimum of 1 member (solo) and a maximum of 4 members. You can form teams during the registration period or join the team formation board."
    },
    {
        question: "What are the prizes?",
        answer: "We're offering Rs 1 Lakh+ in total prizes! This includes cash prizes for top 3 teams in each domain, special category awards, and exciting swag for all participants."
    },
    {
        question: "Do I need prior experience with Salesforce Agentforce?",
        answer: "No prior experience is required! We'll provide comprehensive documentation, tutorials, and starter templates. Mentors will also be available throughout the hackathon to help you."
    },
    {
        question: "What should I build?",
        answer: "You can build autonomous agents in any of our 5 domains: Business Automation, Service Automation, Finance, Healthcare, or Smart City. Check the problem statements in each domain for inspiration."
    },
    {
        question: "How will projects be judged?",
        answer: "Projects will be evaluated based on: Innovation & Creativity (30%), Technical Implementation (30%), Impact & Usefulness (25%), and Presentation (15%)."
    },
    {
        question: "Is this hackathon online or offline?",
        answer: "This is a hybrid hackathon. You can participate remotely from anywhere in the world, or join us at our physical venue for an immersive experience."
    },
    {
        question: "What do I need to submit?",
        answer: "You need to submit: 1) Working code (GitHub repository), 2) Demo video (max 5 minutes), 3) Presentation deck, and 4) Documentation explaining your solution."
    }
];

const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`faq-item ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="faq-question">
                <HelpCircle size={20} className="faq-icon" />
                <h3>{faq.question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-toggle"
                >
                    <ChevronDown size={20} />
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="faq-answer"
                    >
                        <p>{faq.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    return (
        <section className="faq-section">
            <div className="faq-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="faq-header"
                >
                    <h2 className="section-title val">
                        FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
                    </h2>
                    <p className="faq-subtitle">
                        Everything you need to know about the hackathon
                    </p>
                </motion.div>

                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
