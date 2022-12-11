import React, { useContext } from "react";
import {
  FaHome,
  FaBuffer,
  FaBlogger,
  FaBoxOpen,
  FaHandshake,
  FaRegFileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactModal from "../Home/Contact/ContactModal";
const SideNav = () => {
  return (
    <div className="fixed top-0 lg:top-[30%] z-50 text-white">
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-2 justify-center rounded-md bg-gradient-to-tr from-teal-400 via-cyan-600 to-sky-900 py-2 my-2">
            <FaBuffer className="w-20 mx-5 h-8 " />
          </div>
        </div>
        <div className="collapse-content transition-all duration-500">
          <Link to="/">
            <div className="flex gap-2 justify-center rounded-md bg-gradient-to-tr from-teal-400 via-cyan-600 to-sky-900 py-2 my-2 ">
              <FaHome className="w-10 h-8 " />
              <span className="text-lg font-bold">Home</span>
            </div>
          </Link>
          <Link to="projects">
            <div className="flex gap-2 justify-center rounded-md bg-gradient-to-tr from-teal-400 via-cyan-600 to-sky-900 py-2 my-2">
              <FaBoxOpen className="w-10 h-8 mb-3" />
              <span className="text-lg font-bold">Projects</span>
            </div>
          </Link>
          {/* <div className="flex gap-2">
            <FaBlogger className="w-10 h-8 mb-3" /> <span className="text-lg font-bold">Blogs</span>
          </div> */}
          <label
            htmlFor="contact-modal"
            className="flex gap-2 justify-center rounded-md bg-gradient-to-tr from-teal-400 via-cyan-600 to-sky-900 py-2 my-2"
          >
            <FaHandshake className="w-10 h-8 mb-3" />
            <span className="text-lg font-bold">Contact</span>
          </label>
          <Link to="/resume">
            <div className="flex gap-2 justify-center rounded-md bg-gradient-to-tr from-teal-400 via-cyan-600 to-sky-900 py-2 my-2">
              <FaRegFileAlt className="w-10 h-8 mb-3" />
              <span className="text-lg font-bold">Resume</span>
            </div>
          </Link>
        </div>
      </div>
      <ContactModal></ContactModal>
    </div>
  );
};

export default SideNav;
