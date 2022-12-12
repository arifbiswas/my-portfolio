import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShearData, { OutSideData } from '../../../ContextApi/ShearData';
import LoadingPage from '../../LoadingPage/LoadingPage';
import Project from './Project';

const Projects = () => {
    const [projects , setProjects] = useState([]);
    const {loading , setLoading} = useContext(OutSideData);
    useEffect(()=>{
      setLoading(true)
      fetch("https://my-portfolio-server-arifbiswas.vercel.app/api/v1/projects")
      .then(res=>res.json())
      .then(data=>{
        // console.log(data);
        setProjects(data.data);
        setLoading(false)
      })
      .catch(error =>{
        console.log(error);
        setLoading(false)
      })
    },[])

    if(loading){
      return <LoadingPage></LoadingPage>
    }

    return (
        <div  className='py-12 h-[100%] '>
            <h2 className='text-3xl text-center mb-10 font-extrabold text-white'>My Best Projects</h2>
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