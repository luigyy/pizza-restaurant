import React from "react";

interface FifthSectionProps {}

const FifthSection: React.FC<FifthSectionProps> = ({}) => {
  return (
    <div className=" ">
      {/* title  */}
      <div className="w-full h-[50vh]">
        <h1 className="md:w-1/2 w-2/3 mx-auto text-center pt-24 text-zinc-800/95 text-5xl font-medium font-[Gazeta]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          quas.
        </h1>
      </div>
      {/* title  */}
    </div>
  );
};

export default FifthSection;
