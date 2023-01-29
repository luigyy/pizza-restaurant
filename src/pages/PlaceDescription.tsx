import React from "react";

interface PlaceDescriptionProps {}

const PlaceDescription: React.FC<PlaceDescriptionProps> = ({}) => {
  return (
    <div className="min-h-screen pt-32">
      {/* img div  */}
      <div className="h-[100vh] bg-[url('volcano.jpg')] bg-cover bg-center font-[Gazeta] text-white">
        <div className="pt-64 pl-28 text-4xl font-wider">
          <h1>Lorem, ipsum dolor.</h1>
          <h1>Lorem, ipsum dolor.</h1>
          <h1>Lorem, ipsum dolor.</h1>
        </div>
      </div>
      {/* img div  */}

      <div className="pt-10 w-full h-screen relative">
        <div className="w-[27%] font-zinc-800 ml-[30%]">
          <img
            src="pastaPlate.jpg"
            className="absolute w-1/4 left-0 -top-20 "
            alt=""
          />
          <img src="restaurant.jpg" className="w-1/4 right-0 absolute" alt="" />
          <h1 className="text-4xl font-[Gazeta]">Lorem, ipsum dolor.</h1>
          <p className="pt-7 text-sm font-display text-zinc-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            explicabo harum repudiandae aut consectetur dolorum, dolore vero
            aliquid ullam. Excepturi fugiat molestiae perspiciatis nulla dolorum
            veniam. Sed nam quisquam id culpa sequi suscipit, dolore officiis
            harum. Amet temporibus atque inventore!
          </p>
          <p className="pt-7 text-sm font-display text-zinc-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            explicabo harum repudiandae aut consectetur dolorum, dolore vero
            aliquid ullam. Excepturi fugiat molestiae perspiciatis nulla dolorum
            veniam. Sed nam quisquam id culpa sequi suscipit, dolore officiis
            harum. Amet temporibus atque inventore!
          </p>
          <div className="pt-3">
            <input
              checked={true}
              type="radio"
              className="mr-3 appearance-none  w-[14px] h-[14px] rounded-full border outline-none border-[#817f5d] checked:bg-[#dbcc91]"
            />
            <input
              checked={false}
              type="radio"
              className="mr-3 appearance-none  w-[14px] h-[14px] rounded-full border outline-none border-[#817f5d] checked:bg-[#dbcc91]"
            />
            <input
              checked={false}
              type="radio"
              className="mr-3 appearance-none  w-[14px] h-[14px] rounded-full border outline-none border-[#817f5d] checked:bg-[#dbcc91]"
            />
          </div>
        </div>
        <div className="pt-16 pl-36">
          <h1 className="text-3xl font-[Gazeta]">
            <span className="text-[#7b6b20]"> Lorem ipsum</span> dolor sit
            adipisicing{" "}
          </h1>
          <p className="text-display opacity-80 text-2xl">+123453533</p>
          <p className="text-sm font-display opacity-80">
            ...Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceDescription;
