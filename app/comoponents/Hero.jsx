import React from "react";
import { PROFILE_DATA_EN, PROFILE_DATA_DE } from "../utils/data";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineBadge } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = ({ language }) => {
  const {
    name,
    tagline,
    jobTitle,
    yearsOfExperience,
    location,
    email,
    skills,
  } = language === "EN" ? PROFILE_DATA_EN : PROFILE_DATA_DE;
  return (
    <section
      className="max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-26 mg:pt-28 pb-20 px-6 mx-auto"
      id="hero"
    >
      <div className="flex-1 text-center md:text-left a-[1]">
        <span className="text-xs md:text-sm text-blue-200 font-thin">
          {language === "EN" ? "Full Stack Developer" : "Full Stack Entwickler"}
        </span>
        <h2 className="text-3xl mt-3 md:text-5xl md:mt-5">{name} 🖐</h2>

        <p className="w-full text-xs font-light text-neutral-50 leading-5 my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-8">
          {tagline}
        </p>

        <div className="flex items-center justify-center sm:justify-start gap-2">
          <button className="primary-btn">
            <Link to="contact" smooth spy offset={-80}>
              {language === "EN" ? "Contact Me" : "Kontaktieren"}
            </Link>
          </button>
          <button className="primary-btn flex items-center gap-2">
            <a
              href="/Lebenslauf.pdf"
              download="Mahmud-Al-Hussen-Lebenslauf"
            >
              {language === "EN" ? "Download CV" : "Lebenslauf"}
            </a>
            <span>
              <FaDownload />
            </span>
          </button>
        </div>
      </div>

      <div className="flex gap-2 justify-center md:gap-3 lg:gap-5 z-[1]">
        <div className="w-[403px] bg-gradient-to-br from-blue-900 to-state-900 rounded-lg border border-blue-900 p-6">
          <div className="flex items-center justify-center">
            <img src="/profile.jpg" alt="img one" className="hero-img profile" />
          </div>

          <div className="bg-cardbg rounded-md text-center mt-3 p-4">
            <h5 className="text-sm md:texxt-base text-white">{name}</h5>
            <p className="text-slate-500 text-xs md:font-medium mt-1">
              {jobTitle}
            </p>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mt-1">
              <HiOutlineLocationMarker />
              <p className="font-medium">{location}</p>
            </div>
          </div>

          <InfoTitle
            icon={<FiMail size={20} className={"text-sky-400"} />}
            text={email}
          />
          <InfoTitle
            icon={<MdOutlineBadge size={20} className={"text-sky-400"} />}
            text={`${yearsOfExperience} ${
              language === "EN" ? "Years Of Experience" : "Jahre Erfahrung"
            }`}
          />


          <div className="flex items-center gap-2 flex-wrap my-3">
            {skills.map((item) => (
              <div
                key={item}
                className="text-[11px] bg-blue-800/30 rounded md:text-xs px-3 py-1"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="bg-blue-800/30 p-2 rounded">
              <FaGithub className="text-lg md:text-xl" />
            </div>
            <div className="bg-blue-800/30 p-2 rounded">
              <FaLinkedin className="text-lg md:text-xl" />
            </div>
            <div className="bg-blue-800/30 p-2 rounded">
              <FaFacebook className="text-lg md:text-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="ui-circle absolute top-6 md:top-10 -left-10 md:left-0"></div>
    </section>
  );
};

const InfoTitle = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 bg-cardbg p-3 mt-3 rounded-md">
      {icon}
      <p className="text-xs md:text-sm font-normal">{text}</p>
    </div>
  );
};

export default Hero;
