import { motion } from "motion/react";

import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md max-[426px]:hidden">
        <nav className="flex justify-between items-center max-w-[84%] mx-auto py-6 px-2">
          <img src="" alt="logo" />
          <ul className="flex gap-8 text-[1.4rem]">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/qoutes">QUOTES</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
