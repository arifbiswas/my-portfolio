import React from 'react';
import { motion  } from "framer-motion"
const Contact = () => {
    return (
        <div className='h-[100vh] flex justify-center flex-col'>
            <motion.div
             initial ={{opacity : 0, y : -100}}
             animate={{opacity : 1, y : 0}}
             transition={{duration : 0.3}}
            className="title">
                <h1 className="text-5xl text-white text-center py-12">
                    Contact Us
                </h1>
            </motion.div>
             <form className='mx-auto w-96 lg:w-[60%]'>
          <motion.input
             initial ={{opacity : 0, x : -100}}
             animate={{opacity : 1, x : 0}}
             transition={{duration : 0.2}}
          type="text" placeholder="Name" className="input bg-white text-gray-700 text-lg input-bordered input-info w-full mb-2" />
          <motion.input
 initial ={{opacity : 0, x : 100}}
 animate={{opacity : 1, x : 0}}
 transition={{duration : 0.2}}
           type="email" placeholder="Email" className="input bg-white text-gray-700 text-lg  input-bordered input-info w-full mb-2" />
          <motion.textarea
           initial ={{opacity : 0, x : -100}}
           animate={{opacity : 1, x : 0}}
           transition={{duration : 0.2}}
          type="text" placeholder="Describe" className="textarea bg-white text-gray-700  text-lg  textarea-bordered textarea-info w-full mb-2" />
          <motion.input
 initial ={{opacity : 0, scale: -10}}
 animate={{opacity : 1, scale : 1}}
 transition={{duration : 0.4}}
           type="submit" value={"Send"} className="btn btn-ghost outline outline-white outline-dotted mt-3 w-full" />
          </form>
        </div>
    );
};

export default Contact;