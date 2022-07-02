import React, { useRef, useEffect } from "react";
import Frog from "../Dependencies/PHOTO-2022-06-13-11-29-08-removebg-preview-removebg-preview.png";
import FrogHat from "../Dependencies/FrogHat.png";
import Yarn from "../Dependencies/Yarn.png";

import { FaFrog } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { MovingComponent } from "react-moving-text";

gsap.registerPlugin(ScrollTrigger);

const Aboutus = () => {
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      { rotation: 0 },
      {
        rotation: 360,
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  });

  return (
    <div className="w-full  py-8 px-2">
      <div className="max-w-[1240px] mx-auto ">
       
        <div className="flex  justify-center">
          
        <MovingComponent
          type="fadeIn"
          duration="1500ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="none"
        >
          <h1
            
            className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"
          >
            Support a local Business
          </h1>
        </MovingComponent>
        </div>
        <div className="text-center items-center max-w-[1240px] ">

          <p className=' justify-center text-xl pb-8'>
            All our products are made with <u><b>Love</b></u> and <u><b>Care</b></u>. 
          </p>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 mx-auto border-2 border-black/50 justify-center rounded-md bg-gradient-to-b from-green-200 to-green-500 ">
            <div>
            <img className="" src={Frog} />
            </div>
            <div>
            <img className="mx-auto" src={FrogHat}/>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
