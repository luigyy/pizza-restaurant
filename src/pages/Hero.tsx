import React from "react";
import Navbar from "../components/Navbar";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="bg-white h-[110vh]  ">
      <Navbar />
      <img src="fork.png" alt="" className="absolute w-[500px] right-[32%] " />
      <h1 className="text-zinc-900 font-[Gazeta] font-bold text-[175px] py-[26vh]  text-center  tracking-[0.4em]  ">
        PASTA
      </h1>
    </div>
  );
};

export default Hero;
