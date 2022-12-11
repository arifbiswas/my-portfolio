import React, { useContext } from "react";
import { OutSideData } from "../../../ContextApi/ShearData";
import resume from './resume.pdf'
const ResumeDownloadButton = () => {
 
  return (
    <div>
        <a className="btn btn-secondary" href={resume}>Download Resume</a>
    </div>
  );
};

export default ResumeDownloadButton;
