import React, { createContext, useState } from 'react';
export const OutSideData = createContext()
const ShearData = ({children}) => {
    const [downloadResume,setDownloadResume] = useState(false);
    const [loading,setLoading] = useState(true);
    const shear ={
        downloadResume,
        setDownloadResume,
        loading,
        setLoading,
    }
    return (
        <OutSideData.Provider value={shear}>
            {children}
        </OutSideData.Provider>
    );
};

export default ShearData;