"use client";
import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Filter from "../../Utils/Filter/Filter";
import ProjectTable from "../ProjectCard/ProjectTable";

const Project = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  return (
    <div id="Projects" className="flex flex-col gap-10 self-center">
      <h2 className="flex self-center text-3xl font-bold uppercase">
        - Mes projects -
      </h2>

      <Filter
        className="px-5 md:w-[70em] md:self-center"
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />

      <div className="flex flex-wrap justify-center gap-5">
        {ProjectTable.filter(
          (project) => !activeTag || project.tags.includes(activeTag),
        ).map((project) => (
          <ProjectCard
            key={project.Name}
            asWebsite={project.asWebsite}
            asGithub={project.asGithub}
            projectName={project.Name}
            projectDescription={project.Description}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            websiteLink={project.websiteLink}
            githubLink={project.githubLink}
            isFinished={project.isFinished}
            isWorkingOn={project.isWorkingOn}
            dateStart={project.dateStart}
            dateEnd={project.dateEnd}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
