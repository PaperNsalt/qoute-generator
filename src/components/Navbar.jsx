import { motion } from "motion/react";

import { NavLink } from "react-router-dom";
import { AboutIcon, ContactIcon, HomeIcon, QuoteIcon } from "./IconComponent";
function Navbar() {
  const textStyle = "flex gap-1 text-[1rem] text-black hover:bg-[#b7ff5e] py-1 px-2 rounded-lg transition-colors: duration-300 ease-in-out";
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md max-[426px]:hidden">
        <nav className="flex justify-between items-center max-w-[84%] mx-auto py-6 px-2">
          <img src="" alt="logo" />
          <ul className="flex gap-8 ">
          <NavLink to="/" className={textStyle}>{HomeIcon}HOME</NavLink>
          <NavLink to="/qoutes" className={textStyle}> {QuoteIcon}QUOTES</NavLink>
          <NavLink to="/about" className={textStyle}> {AboutIcon}ABOUT</NavLink>
          <NavLink to="/contact" className={textStyle}> {ContactIcon}CONTACT</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
