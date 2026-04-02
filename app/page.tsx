import WelcomeMessage from "./components/Common/UI/Welcome/WelcomeMessage";
import AboutMe from "./components/Common/UI/AboutMe/AboutMe";
import Skills from "./components/Common/UI/Skills/Skills";
import Project from "./components/Common/UI/Project/Project";

export default function Home() {
  return (
    <main className="flex flex-col gap-70">
      <WelcomeMessage />

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
          "HTML",
          "CSS",
          "Git",
          "PHP",
          "React",
          "VueJS",
          "TailwindCSS",
          "NextJS",
          "NuxtJS",
          "Bootstrap",
          "Docker",
          "Figma",
          "Github",
          "Javascript",
          "MySQL",
          "Symfony",
          "Typescript",
        ]}
      />

      <Project />
    </main>
  );
}
