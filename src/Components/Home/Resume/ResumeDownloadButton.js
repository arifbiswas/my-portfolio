import React, { useContext } from "react";
import { OutSideData } from "../../../ContextApi/ShearData";
import resume from './resume.pdf'
const ResumeDownloadButton = () => {
  const { downloadResume, setDownloadResume } = useContext(OutSideData);
    // if(downloadResume){
    //     return <img src={resume} alt="" />
    // }
  return (
    <div>
       
      <button 
       onClick={() =>{
        setDownloadResume(!downloadResume)
       }}
      className="btn btn-secondary">Download Resume</button>
      {
        downloadResume &&  <>
        <img src={resume} alt="" />
        {
            setDownloadResume(false)
        }
        </>
      }
    </div>
  );
};

export default ResumeDownloadButton;
