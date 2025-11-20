import React from 'react';
import Domains from '../components/Domains';
import { motion } from 'framer-motion';

const DomainsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <Domains />
        </motion.div>
    );
};

export default DomainsPage;
