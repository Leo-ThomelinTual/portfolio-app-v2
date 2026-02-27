import WelcomeMessage from "./components/Common/UI/Welcome/WelcomeMessage";
import AboutMe from "./components/Common/UI/AboutMe/AboutMe";
import Skills from "./components/Common/UI/Skills/Skills";
import ProjectCard from "./components/Common/UI/ProjectCard/ProjectCard";
import { Analytics } from "@vercel/analytics/next";
import TailwindCSS from "./components/Common/Utils/Tags/Tailwindcss";
import Nuxt from "./components/Common/Utils/Tags/Nuxt";
import Next from "./components/Common/Utils/Tags/Next";
import Personnel from "./components/Common/Utils/Tags/Personnel";
import Filter from "./components/Common/Utils/Filter/Filter";
import Typescript from "./components/Common/Utils/Tags/Typescript";
import Symfony from "./components/Common/Utils/Tags/Symfony";

export default function Home() {
  // TODO Create project filter
  return (
    <main>
      <Analytics />
      <WelcomeMessage />
      <section className="flex flex-col gap-50">
        <div id="aboutme" />
        <AboutMe />
        <Skills />
        <div
          id="Projects"
          className="flex flex-col gap-10 self-center lg:w-3/4"
        >
          <h2 className="flex self-center text-3xl font-bold uppercase">
            - Mes projects -
          </h2>

          {/* <Filter /> */}

          <div className="flex flex-wrap justify-center gap-5">
            <ProjectCard
              imageSrc="/img/portfolio-v1.png"
              imageAlt="Image représentant la version 1 de mon portfolio"
              projectName="Portfolio V1"
              href="https://leo-portfolio-v1.vercel.app/"
              projectDescription="La toute première version de mon portfolio."
              dateStart="2024"
              dateEnd="2025"
            >
              <TailwindCSS />
              <Nuxt />
              <Personnel />
            </ProjectCard>
            <ProjectCard
              imageSrc="/img/MyWebGames.png"
              imageAlt="Image représentant mon project"
              projectName="MMOType & Pong"
              href="https://github.com/Leo-ThomelinTual/my-web-games"
              projectDescription="Ce projet regroupe un jeu de pong et un jeu où il faut taper des commandes précises pour récupérer des ressources et bien d'autres fonctionnalités à venir. Je travail actuellement sur ce projet, l'image de preview ci-dessus vient de l'ancienne version avec le Framework Nuxt je suis en train de réécrire le code avec NextJS, Typescript et Symfony pour les données."
              dateStart="2025"
              dateEnd="20xx"
            >
              <TailwindCSS />
              <Typescript />
              <Symfony />
              <Next />
              <Personnel />
            </ProjectCard>
            <ProjectCard
              imageSrc="/img/portfolio-v2.png"
              imageAlt="Image représentant la version 2 de mon portfolio"
              projectName="Portfolio V2 (Actuelle)"
              href="https://leo-portfolio-v2.vercel.app/"
              projectDescription="La version 2 de mon portfolio celui où vous êtes actuellement."
              dateStart="2025"
              dateEnd="20xx"
            >
              <TailwindCSS />
              <Next />
              <Personnel />
            </ProjectCard>
          </div>
        </div>
      </section>
    </main>
  );
}
