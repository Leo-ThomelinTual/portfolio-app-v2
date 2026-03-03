import Tertiary from "../../Utils/Buttons/Tertiary";
import { Icon } from "@iconify/react";
import FooterBox from "./FooterBox";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex w-full flex-col px-5 py-20 pt-50 md:px-0"
    >
      <section className="flex w-full flex-wrap gap-2 text-center md:justify-center lg:gap-x-4 lg:gap-y-5">
        <FooterBox title="Liens utile" titleIcon="mdi:link">
          <Tertiary href="/pdf/CV-Léo_Thomelin--Tual.pdf">
            <Icon fontSize={24} icon="material-symbols:download-rounded" />
            Télécharger CV
          </Tertiary>
        </FooterBox>
        <FooterBox title="Mes réseaux pro" titleIcon="">
          <Tertiary href="https://github.com/Leo-ThomelinTual">
            <Icon fontSize={24} icon="mdi:github" />
            Github
          </Tertiary>
          <Tertiary href="https://www.facebook.com/profile.php?id=61564035716349">
            <Icon fontSize={24} icon="mdi:facebook" />
            Facebook
          </Tertiary>
          <Tertiary href="https://www.linkedin.com/in/leo-thomelintual/">
            <Icon fontSize={24} icon="mdi:linkedin" />
            Linkedin
          </Tertiary>
        </FooterBox>
        <FooterBox title="Me contacter" titleIcon="mdi:contacts">
          <Tertiary href="mailto:leo.thomelintual@gmail.com">
            <Icon fontSize={24} icon="mdi:email" />
            Email
          </Tertiary>
        </FooterBox>

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
