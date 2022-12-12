import React from 'react';

const LoadingPage = () => {
    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
        </div>
    );
};

export default LoadingPage;