import React from "react";

interface ReservationFormProps {}

const ReservationForm: React.FC<ReservationFormProps> = ({}) => {
  return (
    <div className="border border-[#8d8a5b]/80 md:w-[70%] w-[90%] mt-20 mx-auto md:h-80 h-80 px-16">
      <h1 className="font-[Gazeta] text-center text-3xl pt-10">
        Make a Reserve
      </h1>

      <div className="flex gap-10 justify-center font-display pt-5 ">
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

      <div className="flex gap-10 justify-center font-display pt-8 ">
        <input
          type="text"
          value="2 people"
          className="w-1/3 border-b-2 border-zinc-300/90 px-1 text-zinc-700 "
        />
        <input
          type="text"
          value="10/10/2002"
          className="w-1/3 border-b-2 border-zinc-300/90 px-1 text-zinc-700"
        />
        <input
          type="text"
          value="07:00 p.m."
          className="w-1/3 border-b-2 border-zinc-300/90 px-1 text-zinc-700"
        />
      </div>
      <div className="flex justify-center mx-auto pt-16 items-center">
        <button className=" bg-[#8e875d] uppercase text-white py-2 px-7  text-sm border-2 border-[#c0b281] ">
          Book a table
        </button>
      </div>
    </div>
  );
};

export default ReservationForm;
