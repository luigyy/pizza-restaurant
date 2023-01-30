import React from "react";
import Navbar from "../components/Navbar";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="bg-white h-[110vh]  ">
      <Navbar />
      <img
        src="fork.png"
        alt=""
        className="md:absolute md:w-[500px] md:right-[32%] max-w-[500px] w-3/4 "
      />
      <h1 className="md:text-zinc-900 md:font-[Gazeta] md:font-bold md:text-[175px] md:py-[26vh]  md:text-center md:tracking-[0.4em]  ">
        PASTA
      </h1>
    </div>
  );
};

export default Hero;
