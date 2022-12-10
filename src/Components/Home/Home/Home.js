import React, { useState } from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import { motion } from "framer-motion"
import Projects from '../Projects/Projects';
import ResumeDownloadButton from '../Resume/ResumeDownloadButton';
const Home = () => {
    
    return (
        <div>
            <motion.div
            >
            <HomeBanner />
            </motion.div>
        </div>
    );
};

export default Home;