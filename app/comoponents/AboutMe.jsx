import React from "react";
import {  AboutMe_Data_DE, AboutMe_Data_EN } from "../utils/data";

const AboutMe = ({language}) => {
  const AboutMe_Data = language === "EN" ? AboutMe_Data_EN : AboutMe_Data_DE;

  return (
    <section className="max-w-screen-xl px-6 mx-auto py-10 md:py-24" id="about">
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center md:text-left pb-10 md:pb-14">
        {language === "EN" ? "About Me" : "Über mich"}
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <img
          className="w-full h-80 object-cover rounded-lg mb-4 md:mb-0"
          src="/123.jpg"
          alt="profile pic"
        />

        <div className="col-span-2 bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-blue-800/40 p-6">
          <p className="text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6">
            {AboutMe_Data.introduction} {AboutMe_Data.background}{" "}
            {AboutMe_Data.interests}
          </p>

          <br />

          <p className="text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6">
            {AboutMe_Data.skills} {AboutMe_Data.careerGoals}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <InfoCard
          count={AboutMe_Data.stats.YearsOfExperience}
          lable={language === "EN" ? "Years of Experience" : "Jahre Erfahrung"}
        />
        <InfoCard
          count={AboutMe_Data.stats.NumberOfProjects}
          lable={
            language === "EN"
              ? "Projects Completed Successfully"
              : "Projekte erfolgreich abgeschlossen"
          }
        />
        <InfoCard
          count={AboutMe_Data.stats.CertificatesEarned}
          lable={
            language === "EN" ? "Certifications Earned" : "Zertifikate erhalten"
          }
        />
      </div>
    </section>
  );
};

const InfoCard = ({ lable, count }) => {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 px-4 md:px-6 py-3">
      <h6 className="text-primary text-xl md:text-2xl font-semibold">{count}</h6>
      <span className="text-blue-300 text-xs mmd:text-sm font-normal">{lable}</span>
    </div>
  );
};

export default AboutMe;
