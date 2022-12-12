import React from "react";
import { Link } from "react-router-dom";
import { motion , } from "framer-motion"
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import resume from '../../Components/Home/Resume/resume.pdf'
const About = () => {
  return (
    <div className="h-full lg:h-[100vh]">
         <motion.div
             initial ={{opacity : 0, y : -100}}
             animate={{opacity : 1, y : 0}}
             transition={{duration : 0.5}}
          >
            <h1 className="text-3xl lg:text-8xl text-center text-white p-4 lg:py-5">About</h1>
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
          src="https://i.ibb.co/ZSCFkRm/profile-picture-removebg-preview.png"
          alt=""
        />
        <div className=" z-20  w-full lg:w-[70%] px-5 flex flex-col justify-center">
       
          <motion.div
             initial ={{opacity : 0, y : -100}}
             animate={{opacity : 1, y : 0}}
             transition={{duration : 0.6}}
          >
            <h2 className="text-3xl text-center text-white">Airf Biswas</h2>
            <p className="text-xl text-justify text-white">My name is Arif Biswas, I am a react developer and study a bachelor of business studies. I live in Jatrabari, Dhaka in Bangladesh. My specific skill is react.js node.js express.js MongoDB, javascript(ES6), HTMl5, CSS3, and firebase (authenticate system). And my goal is to make a senior web developer. Starting from a love of programming. Now web development is my programming career I enjoy myself as a web
programmer, so I have a lot of love for programming. And I will decide to learn more programming languages like
python, c++, and all of the things I will gain through my hard work. And I will make a senior web developer.

</p>
          </motion.div>
          
        <div className="flex justify-center gap-5 mb-12">
        <a 
        href="https://github.com/arifbiswas"
        className="btn btn-ghost bg-black text-lg flex justify-center lg:text-2xl text-white  w-[30%] my-5"><FaGithub></FaGithub><span className="ml-5">Github</span></a>
          <a 
          href="https://www.linkedin.com/in/arifbiswas/"

          className="btn btn-ghost bg-blue-500 text-white text-lg flex justify-center lg:text-2xl w-[30%] my-5"><FaLinkedin></FaLinkedin><span className="ml-5">LikedIn</span></a>
          <a 
          href={resume} 
          className="btn btn-ghost bg-red-700 text-white text-lg flex justify-center lg:text-2xl w-[30%] my-5"><FaRegFilePdf></FaRegFilePdf><span className="ml-5">Resume</span></a>
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

export default About;
