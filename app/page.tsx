import WelcomeMessage from "./_components/UI/Welcome/WelcomeMessage";
import Skills from "./_components/UI/Skills/Skills";
import Project from "./_components/UI/Project/Project";
import { Icon } from "@iconify/react";
import ButtonPrimary from "./_components/Utils/Buttons/ButtonPrimary";
import AboutMe from "./_components/UI/AboutMe/AboutMe";
import Tags, { getIconFromTag } from "./_components/Utils/Tags/Tags";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-100">
      <WelcomeMessage />
      <section className="relative grid grid-cols-2 gap-5 md:gap-10 px-1 md:px-100">
        <div id="AboutMe" className="absolute -top-100" />

        <AboutMe className="col-span-2 flex flex-col gap-2">
          <h2 className="uppercase flex items-center gap-2 text-xl font-bold"><Icon icon="mdi:golf-course" />Mon parcour</h2>
          <p className="text-xs md:text-lg md:text-justify">
            J'ai commencé à m'intéresser au développement web quand j'étais au lycée avec le site OpenClassrooms grâce auquel j'ai codé <Link href="/">mon premier site web</Link> en HTML et CSS. Par la suite, j'ai fait une formation développeur web & web mobile pour en apprendre plus sur le developpement frontend avec HTML/CSS, VueJS et Bootstrap et le backend avec PHP, MySQL et Symfony.
          </p>
        </AboutMe>

        <AboutMe className="col-span-2 md:col-span-1 flex flex-col gap-1">
          <h2 className="uppercase text-xl flex items-center gap-2 font-bold"><Icon icon="mdi:certificate" />Mes diplômes</h2>
          <p className="text-xs md:text-lg md:text-justify">
            Développeur web et web mobile Niveau 5 (BAC+2)
          </p>

          <h2 className="uppercase text-xl flex items-center gap-2 font-bold"><Icon icon="mdi:bike" />Mobilité et Déplacement</h2>
          <Link className="text-xs md:text-lg md:text-justify flex items-center gap-2 text-(--color-secondary)" href="https://www.google.fr/maps/place/Pays+de+la+Loire/@47.415417,-1.513685,9z/data=!3m1!4b1!4m6!3m5!1s0x48051738aa090541:0xcf962b0bd81c47b6!8m2!3d47.7632836!4d-0.3299687!16zL20vMDFjNl9m?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D"><Icon icon="mdi:map" />Déplacement : Pays de la Loire </Link>
          <p className="text-xs md:text-lg md:text-justify">Moyens : Vélo / Bus / Car / Train</p>
        </AboutMe>

        <AboutMe className="flex gap-2 flex-col col-span-2 md:col-span-1">
          <h2 className="uppercase text-xl flex items-center gap-2 font-bold"><Icon icon="mdi:work" />Mes objectifs</h2>
          <p className="text-xs md:text-lg md:text-justify">
            Apprendre ou mise à niveau de ce(s) langage(s) :
          </p>
          <div className="flex gap-2">
          <Tags name="PHP" icon={getIconFromTag("PHP")} />
          <Tags name="Symfony" icon={getIconFromTag("Symfony")} />
          <Tags name="Angular" icon={getIconFromTag("Angular")} />
          </div>

          <p className="text-xs md:text-lg md:text-justify">BAC+3 Concepteur developpeur d'application en alternance.</p>
        </AboutMe>

        <article className="col-span-2 p-3 w-full flex flex-col items-center gap-10">
          <h2 className="uppercase flex items-center gap-2 text-xl font-bold"><Icon icon="mdi:smartphone" />Réseaux que j'utilise</h2>

          <article className="flex gap-5 w-full justify-center">
            <ButtonPrimary
              icon="mdi:linkedin"
              iconPosition="left"
              href="https://www.linkedin.com/in/leo-thomelintual/"
            >LinkedIn</ButtonPrimary>
            <ButtonPrimary
              icon="mdi:github"
              iconPosition="left"
              href="https://github.com/Leo-ThomelinTual"
            >Github</ButtonPrimary>
          </article>
        </article>
      </section>

      <Skills
        tags={[
          "HTML",
          "CSS",
          "Git",
          "React",
          "VueJS",
          "TailwindCSS",
          "NextJS",
          "NuxtJS",
          "NodeJS",
          "ExpressJS",
          "Bootstrap",
          "Docker",
          "Figma",
          "Github",
          "Javascript",
          "MySQL",
          "Typescript",
        ]}
      />

      <Project />
    </main>
  );
}
