import React from "react";

interface FifthSectionProps {}

const FifthSection: React.FC<FifthSectionProps> = ({}) => {
  return (
    <div className="min-h-screen ">
      {/* title  */}
      <div className="w-full h-[50vh] border-2">
        <h1 className="w-1/2 mx-auto text-center pt-28 text-zinc-800/95 text-5xl font-medium font-[Gazeta]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          quas.
        </h1>
      </div>
      {/* title  */}
    </div>
  );
};

export default FifthSection;
