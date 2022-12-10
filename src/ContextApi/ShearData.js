import React, { createContext, useState } from 'react';
export const OutSideData = createContext()
const ShearData = ({children}) => {
    const [downloadResume,setDownloadResume] = useState(false);
    const shear ={
        downloadResume,
        setDownloadResume,
    }
    return (
        <OutSideData.Provider value={shear}>
            {children}
        </OutSideData.Provider>
    );
};

export default ShearData;