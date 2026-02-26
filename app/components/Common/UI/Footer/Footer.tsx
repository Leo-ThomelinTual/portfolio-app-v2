import Tertiary from "../../Utils/Buttons/Tertiary";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex w-full flex-col px-5 pt-50 pb-20 text-center md:gap-5 lg:px-20"
    >
      <section className="flex w-full flex-wrap gap-2 text-center md:justify-center lg:gap-10">
        <article className="flex w-full flex-col gap-3 rounded-md border-2 p-3 md:w-1/3 lg:w-1/4">
          <h2 className="text-bold flex items-center gap-2 self-center text-xl uppercase">
            Lien utile <Icon icon="mdi:link" />
          </h2>
          <div className="flex flex-col items-center gap-3 self-center">
            <Tertiary href="/pdf/CV-Léo_Thomelin--Tual.pdf">
              <Icon fontSize={22} icon="material-symbols:download-rounded" />
              Télécharger CV
            </Tertiary>
          </div>
        </article>
        <article className="flex w-full flex-col gap-3 rounded-md border-2 p-3 md:w-1/3 lg:w-1/4">
          <h2 className="text-bold text-xl uppercase">Mes réseaux pro</h2>
          <div className="flex flex-col items-center gap-3 self-center">
            <Tertiary href="https://github.com/Leo-ThomelinTual">
              <Icon fontSize={22} icon="mdi:github" />
              Github
            </Tertiary>
            <Tertiary href="https://www.facebook.com/profile.php?id=61564035716349">
              <Icon fontSize={22} icon="mdi:facebook" />
              Facebook
            </Tertiary>
            <Tertiary href="https://www.linkedin.com/in/leo-thomelintual/">
              <Icon fontSize={22} icon="mdi:linkedin" />
              Linkedin
            </Tertiary>
          </div>
        </article>
        <article className="flex w-full flex-col gap-3 rounded-md border-2 p-3 md:w-1/3 lg:w-1/4">
          <h2 className="text-bold text-xl uppercase">Me contacter</h2>
          <div className="flex flex-col items-center gap-3 self-center">
            <Tertiary href="mailto:leo.thomelintual@gmail.com">
              <Icon fontSize={22} icon="mdi:email" />
              Email
            </Tertiary>
          </div>
        </article>
        <article className="flex flex-col border-t-2 p-3">
          <p>Crée par / Léo Thomelin-Tual</p>
          <p>
            Site crée avec NextJS et TailwindCSS designer avec Figma codé avec
            visual studio code et hébergé avec vercel.
          </p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
