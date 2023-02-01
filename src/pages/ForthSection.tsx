import React from "react";

interface ForthSectionProps {}

const ForthSection: React.FC<ForthSectionProps> = ({}) => {
  return (
    <div className="min-h-[110vh]  flex">
      {/* left div  */}
      <div className="md:w-1/2 w-full h-full pl-20 pt-24 pr-14">
        <div className="w-full flex items-center">
          <h1 className="sm:w-[50%]  w-[80%]  text-3xl font-[Gazeta] font-medium text-zinc-900 ">
            Lorem ipsum dolo site, amet consectetur adipis 2023
          </h1>
          <img
            src="utensils.png"
            className="w-1/2 md:hidden hidden sm:inline sm:-rotate-90"
            alt=""
          />
        </div>
        <p className="pt-12 text-zinc-700/95 font-display">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id est
          minima vero quasi placeat inventore blanditiis et, quis at expedita
          laborum velit laboriosam quam similique repudiandae molestiae
          distinctio consequuntur in explicabo repellendus quaerat enim error
          perspiciatis. Neque repellendus asperiores totam!
        </p>
        <p className="pt-8 text-zinc-700/95 font-display">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos libero
          officia, eligendi nobis unde dolores corporis impedit
        </p>
      </div>
      {/* left div  */}
      {/*  */}
      {/*  */}
      {/* right div  */}
      <div className="w-1/2 hidden md:inline h-full py-auto">
        <img
          src="utensils.png"
          className="w-full -rotate-90 max-w-[600px]"
          alt=""
        />
      </div>
      {/* right div  */}
    </div>
  );
};

export default ForthSection;
