import React from "react";
import Navbar from "../components/Navbar";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="bg-white h-[115vh]  ">
      <Navbar />
      <h1 className="text-zinc-900 font-[Gazeta] text-[175px] py-[26vh]  text-center  tracking-[0.3em] ml-16 ">
        PASTA
      </h1>
    </div>
  );
};

export default Hero;
