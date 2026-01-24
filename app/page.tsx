import Formular from "./components/Onepage/Formular/Formular";
import WelcomeMessage from "./components/Onepage/Welcome/WelcomeMessage";
import AboutMe from "./components/Onepage/AboutMe/AboutMe";
import ProjectShowcase from "./components/Project/ProjectShowcase";
import Map from "./components/Onepage/Map/Map";
import Skills from "./components/Onepage/Skills/Skills";

export default function Home() {
  return (
    <main>
      <WelcomeMessage />
      <section className="flex flex-col gap-50">
        <div id="aboutme" />
        <AboutMe />
        <Skills />
        <div className="flex flex-col gap-3">
          <ProjectShowcase
            title="ProjectTitle"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus repellat adipisci velit suscipit! Provident quidem, eaque corporis, beatae distinctio ab similique assumenda odit repellendus quas omnis vero rem modi odio!"
            imagesrc="/Backyard.png"
            imagealt="Backyard"
            
          />
        </div>
        <Map />
        <Formular />
      </section>
    </main>
  );
}
