import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';

const Projects = () => {
    const [projects , setProjects] = useState([]);
    useEffect(()=>{
      fetch("https://my-portfolio-server-arifbiswas.vercel.app/api/v1/projects")
      .then(res=>res.json())
      .then(data=>{
        // console.log(data);
        setProjects(data.data);
      })
      .catch(error =>{
        console.log(error);
      })
    },[])



    return (
        <div  className='py-12 h-[100vh] '>
            <h2 className='text-3xl text-center mb-10 font-extrabold'>My Best Projects</h2>
           <div id='projects' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
                projects.map((project, i) => 
                <Link to={`/singleProjects/${project._id}`}
                key={project._id}
                >
                    <Project project={project} />
                </Link>
                )
            }
           </div>
        </div>
    );
};

export default Projects;