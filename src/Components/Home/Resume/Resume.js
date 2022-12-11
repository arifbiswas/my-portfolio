import React from 'react';
import { motion  } from "framer-motion"
import resume from './resume.jpg'
import ResumeDownloadButton from './ResumeDownloadButton';
const Resume = () => {
    return (
       <div className='h-[100vh]'>
         <motion.div 
         initial ={{opacity : 0, scale: -0}}
         animate={{opacity : 1, scale : 1}}
         transition={{duration : 0.4}}
         className='flex justify-center py-5'>
           <ResumeDownloadButton></ResumeDownloadButton>
           </motion.div>
         <motion.div
          initial ={{opacity : 0, scale: -0}}
          animate={{opacity : 1, scale : 1}}
          transition={{duration : 0.4}}
         className=''>
            <img className='mx-auto rounded-md' src={resume} alt="" />
        </motion.div>
       </div>
    );
};

export default Resume;