"use client";
import React, { useEffect, useState } from "react";
import Hero from "./comoponents/Hero";
import Skills from "./comoponents/Skills";
import WorkExperience from "./comoponents/WorkExperience";
import AboutMe from "./comoponents/AboutMe";
import Navbar from "./comoponents/Navbar";
import Contact from "./comoponents/Contact";
import Footer from "./comoponents/Footer";

const page = () => {
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "EN";
    setLanguage(savedLang);
  }, []);


  return (
    <>
      <div className="bg-secondary px-2 sm:px-4 md:px-7 lg:px-10">
        <Navbar language={language} setLanguage={setLanguage} />
        <Hero language={language} />
        <Skills language={language}/>
        <WorkExperience language={language}/>
        <AboutMe language={language}/>
        <Contact language={language}/>
      </div>
      <Footer />
    </>
  );
};

export default page;
