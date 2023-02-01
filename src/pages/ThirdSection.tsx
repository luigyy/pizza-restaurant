import React from "react";

interface ThirdSectionProps {}

const ThirdSection: React.FC<ThirdSectionProps> = ({}) => {
  return (
    <div className="md:h-[110vh] h-[180vh] md:mb-0 mb-96 ">
      <h1 className="max-w-[45%] mx-auto pt-28 font-[Gazeta] text-center text-4xl font-medium text-zinc-900">
        Lorem ipsum dolor sit amet . dar Etienne{" "}
        <span className="text-[#827c29]">consectecteur</span> mollitia .
      </h1>
      {/* photos div */}
      <div className="flex md:flex-row flex-col md:gap-0 gap-32 w-full md:h-[40%] h-full justify-center pt-10">
        <div className="md:w-[25%] w-1/2 md:mx-0 mx-auto   h-full ">
          <div className=" w-full h-full bg-[url('ingredients.jpg')] bg-cover bg-center"></div>
          <h1 className="text-center pt-10 text-lg text-zinc-700/90">
            Lorem, ipsum dolor.
          </h1>
        </div>
        <div className="md:w-[25%] w-1/2 md:mx-0 mx-auto  h-full  ">
          <div className=" w-full h-full bg-[url('chef.jpg')] bg-cover bg-center"></div>
          <h1 className="text-center pt-10 text-lg text-zinc-700/90">
            Lorem, ipsum dolor.
          </h1>
        </div>
        <div className="md:w-[25%] w-1/2 md:mx-0 mx-auto  h-full ">
          <div className=" w-full h-full bg-[url('pizza-oven.jpg')] bg-cover bg-center"></div>
          <h1 className="text-center pt-10 text-lg text-zinc-700/90">
            Lorem, ipsum dolor.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
