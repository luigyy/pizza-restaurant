import React from "react";

interface FoodGroupProps {
  imgURL: string;
  right?: boolean;
}

const FoodGroup: React.FC<FoodGroupProps> = ({ imgURL, right }) => {
  return (
    <div className="mb-32 ">
      <img
        src={imgURL}
        className={`absolute md:w-1/4 w-1/2  ${
          right ? " md:left-0 -left-12" : "md:right-0 -right-12"
        }`}
        alt=""
      />
      <FoodType right={right} />
      <div className="[&>*:nth-child(1)]:border-t-2">
        <DishComponent right={right} />
        <DishComponent right={right} />
        <DishComponent right={right} />
        <DishComponent right={right} />
      </div>
    </div>
  );
};

//
//
interface FoodTypeProps {
  right?: boolean;
}
const FoodType: React.FC<FoodTypeProps> = ({ right }) => {
  return (
    <div
      className={`flex flex-col w-1/4 md:mx-auto ${
        right ? "ml-auto mr-5" : "mr-auto ml-5"
      } relative justify-center tracking-wide mb-14`}
    >
      <img
        src="https://previews.123rf.com/images/natalyalevish/natalyalevish1801/natalyalevish180100005/93484510-ilustra%C3%A7%C3%A3o-tirada-m%C3%A3o-bonita-do-alimento-de-dedo-do-vetor-bruschetta-em-imagens-detalhadas-do-estilo.jpg"
        className="w-36 mx-auto "
        alt=""
      />
      <h1 className="text-center uppercase text-2xl font-[Gazeta] ">lorem </h1>
    </div>
  );
};

//
interface DishComponentProps {
  right?: boolean;
}

const DishComponent: React.FC<DishComponentProps> = ({ right }) => {
  return (
    <div
      className={`md:w-[30%] w-1/2 md:mx-auto ${
        right ? "ml-auto mr-5" : "ml-5"
      }  py-5 border-b-2  `}
    >
      {/* title and price */}
      <div className="font-[Gazeta] flex justify-between text-2xl text-black/95 ">
        <span>Bruschetta</span>
        <span className="text-sm  text-black/70">$10.00</span>
      </div>
      {/* title and price */}
      {/*  */}
      {/* description  */}
      <div className="pt-2 text-sm text-zinc-800/90 font-display">
        {" "}
        <p className="max-w-[72%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
          placeat.
        </p>
      </div>
      {/* description  */}
    </div>
  );
};

//
interface MenuSectionProps {}

const MenuSection: React.FC<MenuSectionProps> = ({}) => {
  return (
    <div className="sm:pt-16 pt-48">
      <div className="w-full min-h-screen ">
        <FoodGroup imgURL="bruschettaPic.jpg" />
        <FoodGroup imgURL="saladPic.jpg" right={true} />
        <FoodGroup imgURL="pastaPic.jpg" />
        <FoodGroup imgURL="pizzaPic.jpg" right={true} />
      </div>
      <div className="flex justify-center mx-auto">
        <button className="px-4 py-2 bg-[#8f875a] uppercase text-white border-2 text-sm border-[#d1c797]">
          Book a table
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
