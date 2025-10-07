import React from "react";

const MobileNavbar = ({ isOpen, setIsMenuOpen, language }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-secondary">
        <div className="ui-circle -ml-20 -mt-10" />

        <ul>
          <li className="mb-5">
            <a
              href=""
              className="menu-item"
              onClick={() => handleScroll("hero")}
            >
              {language === "EN" ? "Home" : "Startseite"}
            </a>
          </li>
          <li className="mb-5">
            <a
              href=""
              className="menu-item"
              onClick={() => handleScroll("skills")}
            >
              {language === "EN" ? "Skills" : "Fähigkeiten"}
            </a>
          </li>
          <li className="mb-5">
            <a
              href=""
              className="menu-item"
              onClick={() => handleScroll("experience")}
            >
              {language === "EN" ? "Work Experience" : "Berufserfahrung"}
            </a>
          </li>
          <li className="mb-5">
            <a
              href=""
              className="menu-item"
              onClick={() => handleScroll("about")}
            >
              {language === "EN" ? "About Me" : "Über mich"}
            </a>
          </li>
        </ul>

        <button
          className="h-10 bg-navbg text-white text-xs ms:text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block"
          onClick={() => handleScroll("contact")}
        >
          {language === "EN" ? "Contact Me" : "Kontakt"}
        </button>
      </div>
      <div
        onClick={() => setIsMenuOpen(false)}
        className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"
      ></div>
    </div>
  );
};

export default MobileNavbar;
