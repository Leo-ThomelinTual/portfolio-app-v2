import ProjectCard from "./components/Project/ProjectCard/ProjectCard";
import Formular from "./components/Onepage/Formular/Formular";
import WelcomeMessage from "./components/Onepage/Welcome/WelcomeMessage";
import AboutMe from "./components/Onepage/AboutMe/AboutMe";
import ProjectShowcase from "./components/Project/ProjectShowcase/ProjectShowcase";
import Map from "./components/Onepage/Map/Map";
import Skills from "./components/Onepage/Skills/Skills";

export default function Home() {
  return (
    <main className="flex flex-col gap-50">
      <WelcomeMessage />
      <AboutMe />
      <Skills />
      <div className="flex flex-row flex-wrap items-center gap-3 px-5 md:justify-between md:px-20">
        <ProjectCard />
        <ProjectShowcase />
      </div>
      <Map />
      <Formular />
    </main>
  );
}
