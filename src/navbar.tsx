import React, { useState } from "react";
import Logo from "./assets/images/image 64.png";
import HamBurgerIcon from "./assets/images/hamburgerIcon.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container mx-auto flex items-center justify-between p-4">
      <div className="flex items-center">
        <img src={Logo} className="mr-2" alt="Logo" />
        <p className="text-lg font-bold">Livestock</p>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="flex items-center justify-center p-2"
        >
         <img src={HamBurgerIcon} alt="" />
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-[#101213] font-size-[18px] hover:text-[#101213]">
          How it works
        </a>
        <a href="#" className="text-[#101213] font-size-[18px] hover:text-[#101213]">
          About
        </a>
        <a href="#" className="text-[#101213] font-size-[18px] hover:text-[#101213]">
          Contact us
        </a>
      </div>

      <button className="hidden md:block px-8 py-2 rounded-lg bg-black text-white font-size-[18px] font-medium">
        Download the App
      </button>

      {isMobileMenuOpen && (
        <div className="z-20 md:hidden absolute top-20 right-4 bg-white shadow-md rounded-md p-4">
          <a
            href="#"
            className="block mb-4 text-[#101213] font-size-[18px] hover:text-[#101213]"            onClick={toggleMobileMenu}
          >
            How it works
          </a>
          <a
            href="#"
            className="block mb-4 text-[#101213] font-size-[18px] hover:text-[#101213]"            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a
            href="#"
className="block mb-4 text-[#101213] font-size-[18px] hover:text-[#101213]"            onClick={toggleMobileMenu}
          >
            Contact us
          </a>
          <button
            className="px-4 py-2 rounded-lg bg-black text-white"
            onClick={toggleMobileMenu}
          >
            Download the App
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
