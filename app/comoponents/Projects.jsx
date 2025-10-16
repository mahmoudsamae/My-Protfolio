import React from "react";
import { Project_Data_EN } from "../utils/data";

const Projects = ({ language }) => {
  const projects = Project_Data_EN
  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20" id={"project"}>
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center mb-8 md:mb-14">
        {language === "EN" ? "Projects" : "Projekte"}
      </h5>
      <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8">
        <div className="grid gridcols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div key={project.id} className="w-full h-100 p-2 sm:p-4 bg-secondary rounded-md flex items-center flex-col justify-between gap-3">
              <img
                src={project.image}
                className="w-full h-[60%] rounded-md"
                alt=""
              />
              <p className="text-center text-sm">{project.description}</p>
              <div className="primary-btn flex items-center justify-center">
                <a href={project.pojectURL}>View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
