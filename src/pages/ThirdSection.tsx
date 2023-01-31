import React from "react";

interface ThirdSectionProps {}

const ThirdSection: React.FC<ThirdSectionProps> = ({}) => {
  return (
    <div className="min-h-[110vh] pb-32 ">
      <h1 className="md:max-w-[45%] w-[80%] mx-auto pt-28 font-[Gazeta] text-center text-3xl font-medium text-zinc-900">
        Lorem ipsum dolor sit amet . dar Etienne{" "}
        <span className="text-[#827c29]">consectecteur</span> mollitia .
      </h1>
      {/* photos div */}
      <div className="md:flex md:gap-0 grid grid-cols-1 gap-48 w-full md:h-[40%]  justify-center pt-10">
        <div className="md:w-[25%] md:h-full md:mx-0 w-3/4 mx-auto  h-60">
          <div className=" w-full h-full bg-[url('ingredients.jpg')] bg-cover"></div>
          <h1 className="text-center pt-10 text-lg text-zinc-700/90">
            Lorem, ipsum dolor.
          </h1>
        </div>
        <div className="md:w-[25%] md:h-full md:mx-0 w-3/4 mx-auto  h-60 ">
          <div className=" w-full  h-full bg-[url('chef.jpg')] bg-cover"></div>
          <h1 className="text-center pt-10 text-lg text-zinc-700/90">
            Lorem, ipsum dolor.
          </h1>
        </div>
        <div className="md:w-[25%] md:h-full md:mx-0 w-3/4  mx-auto   h-60 ">
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
