import React from "react";
import "./Second.css";
//
interface SecondProps {}

const Second: React.FC<SecondProps> = ({}) => {
  return (
    <div className="h-[80vh] w-full  bg-[#363e25] flex">
      {/* left div  */}
      <div className="h-full w-1/2">
        <h1 className="max-w-[70%] text-3xl font-semibold text-[#f8f7f7]/90 tracking-wide font-[Gazeta] px-20 pt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="px-20  max-w-[70%] pt-6 text-[#f8f7f7]/70   ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          recusandae Lorem ipsum dolor sit amet lore lorem lorem.
        </p>
        <ul className="pl-36 pt-6 list-[circle]">
          <div className="flex gap-6 items-center max-w-[60%]">
            <input
              type="radio"
              checked={true}
              className=" bg-[#363e25] appearance-none w-[14px] h-[14px] rounded-full border outline-none border-white checked:bg-[#8d8a5b]"
            />
            <label className="text-[#f8f7f7]/70">
              Lorem ipsum dolor sit amet.
            </label>
          </div>
          <div className="flex gap-6 items-center max-w-[60%]">
            <input
              type="radio"
              checked={false}
              className=" bg-[#363e25] appearance-none w-[14px] h-[14px] rounded-full border outline-none border-white checked:bg-[#8d8a5b]"
            />
            <label className="text-[#f8f7f7]/70">
              Lorem ipsum dolor sit amet.
            </label>
          </div>
          <div className="flex gap-6 items-center max-w-[60%]">
            <input
              type="radio"
              checked={false}
              className=" bg-[#363e25] appearance-none w-[14px] h-[14px] rounded-full border outline-none border-white checked:bg-[#8d8a5b]"
            />
            <label className="text-[#f8f7f7]/70">
              Lorem ipsum dolor sit amet.
            </label>
          </div>
        </ul>
      </div>
      {/* right div  */}
      <div className="relative h-full w-1/2 ">
        <div className="absolute w-full border-2h-full -top-10">
          <img src="mountain.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Second;
