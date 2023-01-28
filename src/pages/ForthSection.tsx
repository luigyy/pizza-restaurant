import React from "react";

interface ForthSectionProps {}

const ForthSection: React.FC<ForthSectionProps> = ({}) => {
  return (
    <div className="h-[110vh]  flex">
      {/* left div  */}
      <div className="w-1/2 h-full pl-20 pt-24 pr-14">
        <h1 className="w-[50%]  text-3xl font-[Gazeta] font-medium text-zinc-900 ">
          Lorem ipsum dolo site, amet consectetur adipis 2023
        </h1>
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
      <div className=" w-1/2 h-full">
        <img src="utensils.png" className="w-full -rotate-90" alt="" />
      </div>
      {/* right div  */}
    </div>
  );
};

export default ForthSection;
