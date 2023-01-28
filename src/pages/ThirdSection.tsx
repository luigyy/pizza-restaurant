import React from "react";

interface ThirdSectionProps {}

const ThirdSection: React.FC<ThirdSectionProps> = ({}) => {
  return (
    <div className="h-screen border-2 border-blue-800">
      <h1 className="border-2 border-red-500 max-w-[45%] mx-auto pt-32 font-[Gazeta] text-center text-4xl font-medium text-zinc-900">
        Lorem ipsum dolor sit amet . dar Etienne{" "}
        <span className="text-[#827c29]">consectecteur</span> mollitia .
      </h1>
      {/* photos div */}
      <div className="flex w-full border-8 justify-center">
        <div className="border-8 w-[25%] h-1/2"></div>
        <div className="border-8 w-[25%] h-1/2"></div>
        <div className="border-8 w-[25%] h-1/2"></div>
      </div>
    </div>
  );
};

export default ThirdSection;
