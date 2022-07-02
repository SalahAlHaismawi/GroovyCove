import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid-col-2 w-full ">

    <div className="flex justify-between items-center max-w-full mx-auto py-1 px-2   text-white bg-[#2f4858]">
      
        <h2 className="w-full text-3xl font-bold text-[#FFFFA7]">
          Groovy Grove
        </h2>
        <div className="left-100">
          <FaInstagram size={30} />
        </div>
        <h1></h1>
    
    </div>
    <div className="flex justify-between items-center max-w-full mx-auto py-1 px-2   text-white bg-black/80">
      
      <h2 className="w-full text-l font-bold text-white">
        Powered by <b>Salah AlHaismawi</b>
      </h2>
      <div className="">
        <FaGithubSquare size={30} />
      </div>
      <h1></h1>
  
  </div>
    </div>

    
    
  );
};

export default Footer;
