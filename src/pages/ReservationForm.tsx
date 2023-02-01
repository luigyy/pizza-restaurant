import React from "react";

interface ReservationFormProps {}

const ReservationForm: React.FC<ReservationFormProps> = ({}) => {
  return (
    <div className="border border-[#8d8a5b]/80 md:w-[70%] w-[90%] mt-32 md:mt-20 mx-auto md:h-80 h-80 md:px-16  px-8">
      <h1 className="font-[Gazeta] text-center text-3xl pt-10">
        Make a Reserve
      </h1>

      <div className="flex md:gap-10 gap-5 justify-center font-display md:pt-5 pt-7">
        <input
          type="text"
          value="Your name"
          className="w-1/2 border-b-2 border-zinc-300/90 px-1 text-zinc-700"
        />
        <input
          type="text"
          value="Your name"
          className="w-1/2 border-b-2 border-zinc-300/90 px-1 text-zinc-700"
        />
      </div>

      <div className="flex flex-wrap md:flex-nowrap  gap-10 md:justify-center justify-around font-display pt-8 ">
        <input
          type="text"
          value="2 people"
          className="md:w-1/3 w-[40%]  border-b-2 border-zinc-300/90 px-1 text-zinc-700 "
        />
        <input
          type="text"
          value="10/10/2002"
          className="md:w-1/3 w-[40%]  border-b-2 border-zinc-300/90 px-1 text-zinc-700"
        />
        <input
          type="text"
          value="07:00 p.m."
          className="md:w-1/3 w-[40%]  border-b-2 border-zinc-300/90 px-1 text-zinc-700"
        />
      </div>
      <div
        className="flex justify-center mx-auto md:pt-16 pt-28
       items-center"
      >
        <button className=" bg-[#8e875d] uppercase text-white py-2 px-7 text-sm border-2 border-[#c0b281] ">
          Book a table
        </button>
      </div>
    </div>
  );
};

export default ReservationForm;
