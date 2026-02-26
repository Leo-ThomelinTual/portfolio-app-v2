import WelcomeMessage from "./components/Common/UI/Welcome/WelcomeMessage";
import AboutMe from "./components/Common/UI/AboutMe/AboutMe";
import Skills from "./components/Common/UI/Skills/Skills";
import ProjectCard from "./components/Common/UI/ProjectCard/ProjectCard";
import Tags from "./components/Common/Utils/Tags/Tags";
import { Analytics } from "@vercel/analytics/next";

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

          <div className="flex flex-wrap justify-center gap-5">
            <ProjectCard
              imageSrc="/img/fluxrss.png"
              imageAlt="Image représentant mon project"
              projectName="FluxRSS"
              href="https://github.com/Leo-ThomelinTual/FluxRSS"
              projectDescription="Le but de ce projet est de me construire en flux rss customiser autant par le contenu que par l'interface me permettant d'avoir le contrôle total sur qu'elle information j'ai besoin ou qu'elle contenu priorisé."
              dateStart="2025"
              dateEnd="2026"
            >
              <Tags icon="devicon:tailwindcss">TailwindCSS</Tags>
              <Tags icon="devicon:nuxt">NuxtJS</Tags>
              <Tags icon="material-symbols:account-circle">Personnel</Tags>
            </ProjectCard>
            <ProjectCard
              imageSrc="/img/portfolio-v1.png"
              imageAlt="Image représentant la version 1 de mon portfolio"
              projectName="Portfolio V1"
              href="https://leo-portfoliov1.vercel.app/"
              projectDescription="La toute première version de mon portfolio."
              dateStart="2024"
              dateEnd="2025"
            >
              <Tags icon="devicon:tailwindcss">TailwindCSS</Tags>
              <Tags icon="devicon:nuxt">NuxtJS</Tags>
              <Tags icon="material-symbols:account-circle">Personnel</Tags>
            </ProjectCard>
            <ProjectCard
              imageSrc="/img/portfolio-v2.png"
              imageAlt="Image représentant la version 2 de mon portfolio"
              projectName="Portfolio V2 (Actuelle)"
              href="https://leo-portfoliov2.vercel.app/"
              projectDescription="La version 2 de mon portfolio celui ou vous êtes actuellement."
              dateStart="2025"
              dateEnd="20xx"
            >
              <Tags icon="devicon:tailwindcss">TailwindCSS</Tags>
              <Tags icon="devicon:nextjs">NextJS</Tags>
              <Tags icon="material-symbols:account-circle">Personnel</Tags>
            </ProjectCard>
          </div>
        </div>
      </section>
    </main>
  );
}
