import React from 'react';

const Project = () => {
    return (
     <div className='h-[100%]'>
          <div className='flex justify-center text-gray-700 '>
         <div className="card w-96 transition-all duration-500  glass">
            <div className='absolute p-5 text-white'>
            <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
            </div>
        <img className='h-[350px]' src="https://placeimg.com/400/225/arch" alt="car!"/>
      </div>
       </div>
     </div>
    );
};

export default Project;