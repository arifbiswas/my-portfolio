import React from 'react';

import resume from './resume.jpg'
import ResumeDownloadButton from './ResumeDownloadButton';
const Resume = () => {
    return (
       <div className='bg-gradient-to-l from-purple-600 via-violet-700 to-violet-700 py-10'>
         <div className='w-full h-full'>
            <img className='mx-auto rounded-md' src={resume} alt="" />
           <div className='flex justify-center my-5'>
           <ResumeDownloadButton></ResumeDownloadButton>
           </div>
        </div>
       </div>
    );
};

export default Resume;