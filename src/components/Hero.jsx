import React, { useRef } from "react";
import Typed from "react-typed";
import { FaFrog } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import Froggo from "../components/Froggo.json";
import { Center, HStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <div className="">
      <div className="text-white">
        <div className="max-w-[800px] mt-[-95px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <div className="w-full flex flex-col justify-center ">
        <Player
          className="object-center"
          autoplay
          loop
          src={Froggo}
        ></Player>
      </div>
          <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6">
            Your Amazing ideas brought to life
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-4xl sm:text-2xl text-2xl font-bold py-4 ">
              {" "}
              Love every Stitch.
            </p>
            <Typed
              className="md:text-4xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 text-[#FFFFA7]"
              strings={["Groovy Cove"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
         <div className="pb-15"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
