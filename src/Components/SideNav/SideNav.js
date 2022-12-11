import React, { useContext } from "react";
import {
  FaHome,
  FaBuffer,
  FaBlogger,
  FaBoxOpen,
  FaHandshake,
  FaRegFileAlt,
  FaBook,
  FaBloggerB
} from "react-icons/fa";
import { motion , } from "framer-motion"
import { Link, NavLink } from "react-router-dom";
import ContactModal from "../Home/Contact/ContactModal";
import "./custom-nav.css";
const SideNav = () => {
  return (
    <div className="fixed bottom-0 left-0  lg:fixed  md:left-[20%] lg:left-[40%] lg:bottom-12 z-50">
      <motion.div
      whileHover={{scale : 1.1}}
      className="bg-violet-200 opacity-90 p-2 rounded-md  lg:bg-layer flex  md:flex-row lg:flex-row gap-10">
       <NavLink to="/" 
       className={({isActive})=>isActive?"flex justify-center items-center border-2 border-gray-700":"flex justify-center items-center"}
       >
        <FaHome className="w-full h-16 text-base-200 p-3 hover:p-0 transition-all duration-200" ></FaHome>
       </NavLink>
       <NavLink to="/projects"   className={({isActive})=>isActive?"flex justify-center items-center border-2 border-gray-700":"flex justify-center items-center"}>
        <FaBoxOpen className="w-full h-16 text-base-200 p-3 hover:p-0 transition-all duration-200" ></FaBoxOpen>
       </NavLink>
       <NavLink to="/about"  className={({isActive})=>isActive?"flex justify-center items-center border-2 border-gray-700":"flex justify-center items-center"}>
        <FaBook className="w-full h-16 text-base-200 p-3 hover:p-0 transition-all duration-200" ></FaBook>
       </NavLink>
       <NavLink to="/contact"   className={({isActive})=>isActive?"flex justify-center items-center border-2 border-gray-700":"flex justify-center items-center"}>
        <FaHandshake className="w-full h-16 text-base-200 p-3 hover:p-0 transition-all duration-200" ></FaHandshake>
       </NavLink>
       <NavLink to="/blogs"    className={({isActive})=>isActive?"flex justify-center items-center border-2 border-gray-700":"flex justify-center items-center"}>
        <FaBlogger className="w-full h-16 opacity-100 text-base-200 p-3 hover:p-0 transition-all duration-200" ></FaBlogger>
       </NavLink>
      </motion.div>
    </div>
  );
};

export default SideNav;
