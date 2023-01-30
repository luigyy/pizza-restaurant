import React from "react";
import Navbar from "../components/Navbar";
import "../Hero.css";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="bg-white h-[110vh] w-full ">
      <Navbar />
      <img
        src="fork.png"
        alt=""
        className="md: child md:w-[500px] md: max-w-[500px] w-3/4 mx-auto "
      />
      <h1 className="md:text-zinc-900 md:font-[Gazeta] md:font-bold md:text-[175px] md:py-[26vh]  md:text-center md:tracking-[0.4em] md:pl-10  ">
        PASTA
      </h1>
    </div>
  );
};

export default Hero;
