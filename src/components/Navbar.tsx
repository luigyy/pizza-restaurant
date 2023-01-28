import React from "react";
import "./Navbar.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="w-full flex justify-center pt-6 text-sm uppercase font-semibold  text-zinc-900 tracking-tighter text-opacity-70   items-center font-[Gazeta]">
      <div className="flex justify around gap-10">
        <span className="text-decoration-gradient">
          <p className=" ">Welcome</p>
        </span>
        <span>
          <p>About us</p>
        </span>
        <span>
          <p>Menu</p>
        </span>
      </div>
      <div className="mx-24 text-2xl tracking-tighter">YourLogo</div>
      <div className="flex justify around gap-10">
        <span>
          <p>Story</p>
        </span>
        <span>
          <p>Contact</p>
        </span>
        <span>
          <p>Buy now</p>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
