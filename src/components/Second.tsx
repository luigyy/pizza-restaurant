import React from "react";
import "./Navbar.css";
//
interface SecondProps {}

const Second: React.FC<SecondProps> = ({}) => {
  return (
    <div className="h-[76vh] w-full  bg-[#363e25] flex">
      {/* left div  */}
      <div className="border-2 border-red-500 h-full w-1/2">
        <h1 className="max-w-[70%] text-3xl test text-[#e3e4e2] font-[Gazeta] px-20 py-24">
          True & memorable taste made with love and tradition
        </h1>
      </div>
      {/* right div  */}
      <div className="border-2 border-red-500 h-full w-1/2"></div>
    </div>
  );
};

export default Second;
