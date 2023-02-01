import React from "react";

interface PlaceDescriptionProps {}

const PlaceDescription: React.FC<PlaceDescriptionProps> = ({}) => {
  return (
    <div className=" min-h-screen pt-32 pb-56 md:pb-0">
      {/* img div  */}
      <div className="h-[100vh] bg-[url('volcano.jpg')] bg-cover bg-center font-[Gazeta] text-white">
        <div className="pt-64 md:pl-28 text-center md:text-left text-4xl font-wider">
          <h1>Lorem, ipsum dolor.</h1>
          <h1>Lorem, ipsum dolor.</h1>
          <h1>Lorem, ipsum dolor.</h1>
        </div>
      </div>
      {/* img div  */}

      <div className="pt-10 w-full h-screen relative">
        <div className="md:w-[27%] w-1/2  font-zinc-800 md:ml-[30%] ml-10 pr-10 md:pr-0">
          <img
            src="pastaPlate.jpg"
            className="md:inline hidden absolute w-1/4 left-0 -top-20 "
            alt=""
          />
          <img
            src="restaurant.jpg"
            className="md:w-1/4 w-1/2 md:right-0 -right-10 absolute"
            alt=""
          />
          <div>
            <h1 className="text-4xl font-[Gazeta]">Lorem, ipsum dolor.</h1>
            <p className="pt-7 text-sm font-display text-zinc-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              explicabo harum repudiandae aut consectetur dolorum, dolore vero
              aliquid ullam. Excepturi fugiat molestiae perspiciatis nulla
              dolorum veniam. Sed nam quisquam id culpa sequi suscipit, dolore
              officiis harum. Amet temporibus atque inventore!
            </p>
            <p className="pt-7 text-sm font-display text-zinc-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              explicabo harum repudiandae aut consectetur dolorum, dolore vero
              aliquid ullam. Excepturi fugiat molestiae perspiciatis nulla
              dolorum veniam. Sed nam quisquam id culpa sequi suscipit, dolore
              officiis harum. Amet temporibus atque inventore!
            </p>
          </div>
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
        <div className="pt-16 md:pl-36 px-10">
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
