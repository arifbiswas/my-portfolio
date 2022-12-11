import React from 'react';
import { motion , } from "framer-motion"
const Project = ({project}) => {
  const {title,describe,picture}=project;
    return (
     <motion.div
     initial = {{x: -20,opacity: 0}}
     animate = {{x: 0 ,opacity: 1}}
     transition = {{duration:0.3}}
     whileHover={{scale:1.1}}
     className='h-[100%]'>
          <div className='flex justify-center text-gray-700 '>
         <div className="card w-96 transition-all duration-500  glass">
            {/* <div className='absolute p-5 text-white'>
            <h2 className="card-title">{title}</h2>
          <p>{describe.slice(0,100)}</p>
            </div> */}
        <img className='h-[400px]' src={picture} alt="car!"/>
        <button className='btn btn-ghost text-white'>Detail</button>
      </div>
       </div>
     </motion.div>
    );
};

export default Project;