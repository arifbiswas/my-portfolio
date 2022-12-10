import React from 'react';
import Project from './Project';

const Projects = () => {
    return (
        <div  className='py-12  bg-gradient-to-r from-orange-200 via-purple-300 to-pink-400 text-gray-700'>
            <h2 className='text-3xl text-center p-5'>Some Projects</h2>
           <div id='projects' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
                ["air","alu","kijani","","",""].map((projects, i) => 
                <Project key={i}></Project>
                )
            }
           </div>
        </div>
    );
};

export default Projects;