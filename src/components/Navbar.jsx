import { motion } from "motion/react";

import { NavLink } from "react-router-dom";
import { AboutIcon, ContactIcon, HomeIcon, QuoteIcon } from "./IconComponent";
function Navbar() {
  const textStyle = "flex flex-col justify-center items-center text-[1rem] text-black hover:bg-[#b7ff5e] py-1 px-2 rounded-xl transition-colors: duration-300 ease-in-out";
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b bg-white/60 backdrop-blur-md max-[426px]:hidden">
        <nav className="flex justify-between items-center max-w-[84%] mx-auto py-6 px-2">
          <img src="" alt="logo" />
          <ul className="flex gap-8 ">
          <NavLink to="/" className={textStyle}>{HomeIcon}HOME</NavLink>
          <NavLink to="/qoutes" className={textStyle}> {QuoteIcon}QUOTES</NavLink>
          <NavLink to="/favorite" className={textStyle}> {AboutIcon}FAVORITE</NavLink>
          <NavLink to="/contact" className={textStyle}> {ContactIcon}CONTACT</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
