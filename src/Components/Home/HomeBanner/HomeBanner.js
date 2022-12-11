import React from "react";
import { motion  } from "framer-motion"
const HomeBanner = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content h-[100vh] flex-col lg:flex-row-reverse">
          <motion.img
          initial={{opacity : 0, x : 20}}
          animate={{opacity : 1,x : 0}}
          transition={{
            type: "spring",}}

            src="https://i.ibb.co/z2C3htR/1665751542229-removebg.png"
            className="w-full lg:w-[50%] rounded-lg shadow-2xl flex justify-center"
          />

          <div className="w-full lg:w-[50%] ">
            <motion.h1 
            initial={{opacity : 0, x : -20}}
            animate={{opacity : 1,x : 20}}
            exit ={{x : 200}}
            transition={{duration : 0.5}}  
            className="text-6xl lg:text-8xl font-bold text-center text-gray-200 mb-5">Arif Biswas</motion.h1>
            <motion.h2
             initial={{opacity : 0, x : -20}}
             animate={{opacity : 1,x : 20}}
             transition={{duration : 0.6}}
            className="text-3xl lg:text-4xl text-gray-200   font-bold text-center mb-10">Front-End Web Developer</motion.h2>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
