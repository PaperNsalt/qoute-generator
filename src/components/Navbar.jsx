import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/svg/QouteSparkLogo.svg";
import { AboutIcon, ContactIcon, HomeIcon, QuoteIcon } from "./IconComponent";


const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => setIsOpen(!isOpen);


  const NavItem = ({ to, icon, label, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex flex-col md:flex-row items-center gap-2 text-[1rem] font-medium py-2 px-4 rounded-xl transition-all duration-300 ease-in-out
        ${
          isActive
            ? "bg-[#b7ff5e] text-black shadow-sm"
            : "text-gray-600 hover:bg-gray-100 hover:text-black"
        }`
      }
    >
      <span className="text-xl md:text-lg">{icon}</span>
      <span className="uppercase tracking-wide text-sm md:text-base">{label}</span>
    </NavLink>
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
        <nav className="flex justify-between items-center max-w-[90%] md:max-w-[84%] mx-auto py-4 px-2">
          
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="size-10 md:size-12 hover:scale-105 transition-transform" />
            <p className=" text-xl hidden sm:block tracking-tighter">QuoteSpark</p>
          </NavLink>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <ul className="hidden md:flex gap-4 lg:gap-8 items-center">
            <NavItem to="/" icon={HomeIcon} label="Home" />
            <NavItem to="/qoutes" icon={QuoteIcon} label="Quotes" />
            <NavItem to="/favorite" icon={AboutIcon} label="Favorites" />
            <NavItem to="/contact" icon={ContactIcon} label="Contact" />
          </ul>

          {/* MOBILE HAMBURGER BUTTON (Visible on Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-black block rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-black block rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-black block rounded-full"
              />
            </div>
          </button>
        </nav>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden bg-white border-b border-gray-200"
            >
              <ul className="flex flex-col gap-4 p-6 items-center">
                <NavItem to="/" icon={HomeIcon} label="Home" onClick={toggleMenu} />
                <NavItem to="/qoutes" icon={QuoteIcon} label="Quotes" onClick={toggleMenu} />
                <NavItem to="/favorite" icon={AboutIcon} label="Favorites" onClick={toggleMenu} />
                <NavItem to="/contact" icon={ContactIcon} label="Contact" onClick={toggleMenu} />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Navbar;