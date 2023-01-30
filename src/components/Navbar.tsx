import React from "react";
import "./Navbar.css";
import NavbarModal from "./NavbarModal";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="w-full">
      <div className="hidden md:w-full md:flex md:justify-center md:pt-6 md:text-sm md:uppercase md:font-semibold  md:text-zinc-900 md:tracking-tighter md:text-opacity-70   md:items-center md:font-[Gazeta]">
        <div className="md:flex md:gap-10">
          <span className="md:text-decoration-gradient">
            <p className=" ">Welcome</p>
          </span>
          <span>
            <p>About us</p>
          </span>
          <span>
            <p>Menu</p>
          </span>
        </div>
        <div className="md:mx-24 md:text-2xl md:tracking-tighter">YourLogo</div>
        <div className="md:flex md:gap-10">
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
      {/* for mobile  */}
      <div className="md:hidden flex items-center justify-between text-sm uppercase font-semibold text-zinc-900 tracking-tighter text-opacity-70 ">
        <h1 className="text-3xl font-[Gazeta] absolute left-3 top-5">
          YourLogo
        </h1>
        <button
          className="flex items-center absolute  right-3 top-4"
          onClick={() => setModal(!modal)}
        >
          {/* <p className="text-2xl font-[Gazeta]">Navigation</p> */}
          <AiOutlineMenu className="text-5xl " />
        </button>
        <NavbarModal modal={modal} setModal={setModal} />
      </div>
    </div>
  );
};

export default Navbar;
