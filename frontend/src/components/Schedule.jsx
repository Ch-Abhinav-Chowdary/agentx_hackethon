import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import './Schedule.css';

const scheduleData = [
    {
        title: "Bootcamp Phase",
        date: "Dec 27 - 29, 2025",
        events: [
            { time: "Dec 27", title: "Agentforce Workshop", desc: "Introduction to Autonomous Agents" },
            { time: "Dec 28", title: "Ideation & Mentoring", desc: "Refining ideas with industry experts" },
            { time: "Dec 29", title: "Team Formation", desc: "Finalizing teams and project scope" }
        ]
    },
    {
        title: "Hackathon Day 1",
        date: "Jan 2, 2026",
        events: [
            { time: "09:00 AM", title: "Opening Ceremony", desc: "Keynote & Challenge Reveal" },
            { time: "11:00 AM", title: "Hacking Begins", desc: "Start building your agents" },
            { time: "04:00 PM", title: "Mentorship Round 1", desc: "Technical guidance session" },
            { time: "08:00 PM", title: "Dinner & Networking", desc: "Fuel up and connect" }
        ]
    },
    {
        title: "Hackathon Day 2",
        date: "Jan 3, 2026",
        events: [
            { time: "09:00 AM", title: "Breakfast", desc: "Morning energy boost" },
            { time: "12:00 PM", title: "Submission Deadline", desc: "Code freeze & project submission" },
            { time: "02:00 PM", title: "Pitching Round", desc: "Presenting to the judges" },
            { time: "05:00 PM", title: "Closing Ceremony", desc: "Winners announcement & prizes" }
        ]
    }
];

const Schedule = () => {
    return (
        <section className="schedule-section">
            <div className="schedule-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="section-title text-center"
                >
                    EVENT <span className="text-gradient">TIMELINE</span>
                </motion.h2>

                <div className="timeline">
                    {scheduleData.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="timeline-phase"
                        >
                            <div className="phase-header">
                                <h3>{phase.title}</h3>
                                <span className="phase-date"><Calendar size={16} /> {phase.date}</span>
                            </div>

                            <div className="phase-events">
                                {phase.events.map((event, i) => (
                                    <div key={i} className="event-card glass">
                                        <div className="event-time">
                                            <Clock size={14} /> {event.time}
                                        </div>
                                        <div className="event-content">
                                            <h4>{event.title}</h4>
                                            <p>{event.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;
