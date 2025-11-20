import React from 'react';
import Schedule from '../components/Schedule';
import { motion } from 'framer-motion';

const SchedulePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <Schedule />
        </motion.div>
    );
};

export default SchedulePage;
