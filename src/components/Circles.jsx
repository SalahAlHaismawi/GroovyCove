import React from "react";
import Yarn from "../Dependencies/Untitled_design-removebg-preview.png";

const Circles = () => {
  return (
    <div className="w-[100%]  mt-[320px] mb-[320px] grid md:grid-cols-2  justify-items-center mx-auto">
      <div className="text-center align-center my-auto ">
       <h1 className="text-white text-bold text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente debitis veniam quo sed expedita repellat rerum nemo, itaque doloribus possimus?</h1> 
      </div>
      <div className=" border-2 border-white rounded-full w-[300px] h-[300px] md:justify-self-end mr-5 mt-10">
        <img src={Yarn} alt = 'Yarn' />
      </div>
    </div>
  );
};

export default Circles;
