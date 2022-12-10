import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects , setProjects] = useState([]);
    useEffect(()=>{
      fetch("data.json")
      .then(res=>res.json())
      .then(data=>{
        // console.log(data);
        setProjects(data);
      })
      .catch(error =>{
        console.log(error);
      })
    },[])
    return (
        <div  className='py-12  bg-gradient-to-r from-orange-200 via-purple-300 to-pink-400 text-gray-700'>
            <h2 className='text-3xl text-center mb-10 font-extrabold'>My Best Projects</h2>
           <div id='projects' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
                projects.map((project, i) => 
                <Project
                project={project}
                key={i}></Project>
                )
            }
           </div>
        </div>
    );
};

export default Projects;