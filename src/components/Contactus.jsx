import React from "react";

import Typed from "react-typed";

import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    
    FaTwitterSquare,
    FaTiktok,
    
  } from "react-icons/fa";

const Contactus = () => {
  return (
    <div>
      <div className="bg-gray-300 w-full h-[80px] grid grid-cols-2 mt-[100px]">
            <div className="flex">
          <h2 className="  md:text-4xl  lg:text-4xl text-xl my-auto text-bolder justify-self-start ">
             contact us on
          </h2>
          <Typed id='footer'
              className="md:text-4xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 text-black my-auto font-cour"
              strings={["Instagram","Tiktok"]}
              typeSpeed={120}
              backSpeed={80}
              loop
            />

            </div>
            

        
        <div className="flex justify-self-end my-auto">
          <FaInstagram className="mr-10"size={70}/>
          <FaTiktok className="mr-10" size={70} />

          </div>
       
      </div>
    </div>
  );
};

export default Contactus;
