import React from 'react';

const Project = ({project}) => {
  const {title,describe,picture}=project;
    return (
     <div className='h-[100%]'>
          <div className='flex justify-center text-gray-700 '>
         <div className="card w-96 transition-all duration-500  glass">
            <div className='absolute p-5 text-white'>
            <h2 className="card-title">{title}</h2>
          <p>{describe.slice(0,100)}</p>
            </div>
        <img className='h-[400px]' src={picture} alt="car!"/>
      </div>
       </div>
     </div>
    );
};

export default Project;