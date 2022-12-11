import React from 'react';
import { motion , } from "framer-motion"
import { useLoaderData } from 'react-router-dom';
import { FaFirefoxBrowser, FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
const SingleProjects = () => {
  const data = useLoaderData();
  // console.log(data);
  const {_id,picture,describe,title} = data.data;
    return (
      <div className="h-[100vh]">
         <motion.div
             initial ={{opacity : 0, y : -100}}
             animate={{opacity : 1, y : 0}}
             transition={{duration : 0.5}}
          >
            <h1 className="text-4xl lg:text-8xl text-center font-semibold text-white py-5">Project Detail</h1>
          </motion.div>
      <motion.div
         initial ={{opacity : 0, y : -100}}
        animate={{opacity : 1, y : 0}}
        transition={{duration : 0.3}}

      className="flex flex-col lg:flex-row relative py-10">
        <motion.img
         initial ={{opacity : 0, y : -100}}
         animate={{opacity : 1, y : 0}}
         transition={{duration : 0.4}}
          className="z-20 w-32 mx-auto lg:w-[30%]"
          src={picture}
          alt=""
        />
        <div className=" z-20  w-full lg:w-[70%] px-5 flex flex-col justify-center">
       
          <motion.div
             initial ={{opacity : 0, y : -100}}
             animate={{opacity : 1, y : 0}}
             transition={{duration : 0.6}}
          >
            <h2 className="text-3xl text-center text-white">{title}</h2>
            <p className="text-xl text-justify text-white">{describe}
</p>
          </motion.div>
          
        <div className="flex justify-center gap-5 mt-5">
        <button
        className="btn btn-ghost bg-black text-lg flex justify-center lg:text-2xl text-white  w-[30%] my-5"><FaGithub></FaGithub><span className="ml-5">Github</span></button>
          <button

          className="btn btn-ghost bg-blue-500 text-white text-lg flex justify-center lg:text-2xl w-[30%] my-5"><FaLinkedin></FaLinkedin><span className="ml-5">LikedIn</span></button>
          <button 
          className="btn btn-ghost bg-red-700 text-white text-lg flex justify-center lg:text-2xl w-[30%] my-5"><FaFirefoxBrowser></FaFirefoxBrowser><span className="ml-5">Live Link</span></button>
        </div>
        </div>
        <div
        // initial ={{opacity : 0, y : -100}}
        // animate={{opacity : 1, y : 0}}
        className='w-[100%] h-[100%] absolute top-0 bg-black opacity-50 z-0'/>
      </motion.div>
    </div>
    );
};

export default SingleProjects;