"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import MobileNavbar from "./MobileNavbar";


const Navbar = ({language, setLanguage}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleLanguage = () => {
    const newLang = language === "EN" ? "DE" : "EN";
    setLanguage(newLang); // حدث state في Page
    localStorage.setItem("language", newLang); // خزّن في localStorage
  };


  return (
    <>
      {isMenuOpen && (
        <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} language={language}/>
      )}
      <div className="w-screen hidden md:flex items-center justify-center py-4 fixed top-0 z-10">
        <nav className="max-w-screen bg-navbg rounded-lg shadow-sky-600/10 mx-auto py-3 px-6">
          <ul className="flex items-center gap-14">
            <li>
              <Link to="hero" smooth spy offset={-80} className="menu-item">
                {language === "EN" ? "Home" : "Startseite"}
              </Link>
            </li>
            <li>
              <Link to="skills" smooth spy offset={-80} className="menu-item">
                {language === "EN" ? "Skills" : "Fähigkeiten"}
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth
                spy
                offset={-80}
                className="menu-item"
              >
                {language === "EN" ? "Work Experience" : "Berufserfahrung"}
              </Link>
            </li>
            <li>
              <Link to="about" smooth spy offset={-80} className="menu-item">
                {language === "EN" ? "About Me" : "Über mich"}
              </Link>
            </li>
            <li>
              <Link to="contact" smooth spy offset={-80} className="menu-item">
                {language === "EN" ? "Contact" : "Kontakt"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-2 p-4 fixed top-0 right-0 z-50">
        <button
          onClick={toggleLanguage}
          className="w-11 h-11 text-2xl text-sky-300 bg-navbg border cursor-pointer border-sky-900/80 backdrop-blur-lg flex items-center justify-center rounded z-50 ml-auto"
        >
          {language}
        </button>
        <button
          onClick={toggleMenu}
          className="w-11 h-11 text-2xl text-sky-300 bg-navbg border cursor-pointer border-sky-900/80 backdrop-blur-lg flex items-center justify-center rounded md:hidden z-50 ml-auto"
        >
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
