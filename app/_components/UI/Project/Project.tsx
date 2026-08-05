"use client";
import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Filter from "../../Utils/Filter/Filter";
import ProjectTable from "../../../_data/ProjectData";

const Project = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  return (
    <section id="Projects" className="flex flex-col w-full gap-10 self-center">
      <h2 className="flex self-center text-3xl font-bold uppercase">
        - Mes projects -
      </h2>

      <article className="grid 2xl:grid-cols-6 grid-cols-1 gap-5 2xl:gap-0">

      <Filter
        className="px-5 col-span-1"
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />

      <div className="flex flex-wrap xl:col-span-5 self-center gap-5">
        {ProjectTable.filter(
          (project) => !activeTag || project.tags.includes(activeTag),
        ).map((project, index) => (
          <ProjectCard
            key={index}
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
      </article>
    </section>
  );
};

export default Project;
