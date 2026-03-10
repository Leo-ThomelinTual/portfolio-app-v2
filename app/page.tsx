"use client";
import WelcomeMessage from "./components/Common/UI/Welcome/WelcomeMessage";
import AboutMe from "./components/Common/UI/AboutMe/AboutMe";
import Skills from "./components/Common/UI/Skills/Skills";
import ProjectCard from "./components/Common/UI/ProjectCard/ProjectCard";
import { Analytics } from "@vercel/analytics/next";
import Filter from "./components/Common/Utils/Filter/Filter";
import { useState } from "react";
import ProjectTable from "./components/Common/UI/ProjectCard/ProjectTable";

export default function Home() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // TODO for github api add percentage to Tags and fetch the percentage of used framework/code language
  // TODO add color to filter
  // TODO change WORKING ON place
  // TODO add animation to Skills components

  // ! FIXME Responsive text weird on phone
  return (
    <main>
      <Analytics />
      <WelcomeMessage />
      <section className="flex flex-col gap-50">
        <div id="aboutme" />
        <AboutMe>
          Je m`appelle Léo et j`ai commencé à m`intéresser au développement web
          quand j`étais au lycée. J`ai donc appris avec des cours en ligne et en
          libre accès, ce qui m`a permis d`acquérir les bases du développement
          web. Après le lycée, je me suis tourné vers une formation en
          développement web et web mobile, qui m`a permis d`obtenir un diplôme
          bac+2, et quelques nuits blanches à rattraper.
        </AboutMe>

        <Skills
          tags={[
            "TailwindCSS",
            "NextJS",
            "NuxtJS",
            "Bootstrap",
            "CSS",
            "HTML",
            "Docker",
            "Figma",
            "Git",
            "Github",
            "Javascript",
            "MySQL",
            "PHP",
            "React",
            "Symfony",
            "Typescript",
            "VueJS",
          ]}
        />

        {/* TODO Make a components for grouping filter and project card */}

        <div
          id="Projects"
          className="flex flex-col gap-10 self-center lg:w-3/4"
        >
          <h2 className="flex self-center text-3xl font-bold uppercase">
            - Mes projects -
          </h2>

          <Filter activeTag={activeTag} setActiveTag={setActiveTag} />

          <div className="flex flex-wrap justify-center gap-5">
            {ProjectTable.filter(
              (project) => !activeTag || project.tags.includes(activeTag),
            ).map((project) => (
              <ProjectCard
                key={project.Name}
                projectName={project.Name}
                projectDescription={project.Description}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                websiteLink={project.websiteLink}
                githubLink={project.githubLink}
                isWorkingOn={project.isWorkingOn}
                dateStart={project.dateStart}
                dateEnd={project.dateEnd}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
