import React from "react";
import Navbar from "../components/Navbar";
import "../Hero.css";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="bg-white md:h-[100vh] h-[80vh] w-full ">
      <Navbar />
      <img
        src="tenedor hojitas.png"
        alt=""
        className="md: child md:w-[500px] md:max-w-[500px] sm:max-w-[350px] max-w-[300px] w-3/4 mx-auto "
      />
      <h1 className="md:text-zinc-900 font-[Gazeta] md:text-[175px] md:py-[26vh]  text-center md:tracking-[0.4em] md:pl-10 py-56 text-8xl sm:text-9xl  ">
        PASTA
      </h1>
    </div>
  );
};

export default Hero;
