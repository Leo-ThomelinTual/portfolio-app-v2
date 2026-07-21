"use client";
import Secondary from "../../Utils/Buttons/Secondary";
import { Icon } from "@iconify/react";
import FooterBox from "./FooterBox";
import { useState } from "react";

const Footer = () => {
  const [emailShow, isEmailShow] = useState<boolean>(false);

  return (
    <footer
      id="contact"
      className="flex w-full flex-col px-5 py-20 pt-50 md:px-0"
    >
      <section className="flex w-full flex-wrap gap-2 text-center md:justify-center lg:gap-x-4 lg:gap-y-5">
        <FooterBox title="Liens utile" titleIcon="mdi:link">
          <Secondary href="/pdf/CV-Léo_Thomelin--Tual.pdf">
            <Icon fontSize={24} icon="material-symbols:download-rounded" />
            Télécharger CV
          </Secondary>
        </FooterBox>
        <FooterBox title="Mes réseaux pro" titleIcon="">
          <Secondary href="https://github.com/Leo-ThomelinTual">
            <Icon fontSize={24} icon="mdi:github" />
            Github
          </Secondary>
          <Secondary href="https://www.linkedin.com/in/leo-thomelintual/">
            <Icon fontSize={24} icon="mdi:linkedin" />
            Linkedin
          </Secondary>
        </FooterBox>
        <FooterBox title="Me contacter" titleIcon="mdi:contacts">
          <Secondary onClick={() => isEmailShow(!emailShow)} href="">
            {!emailShow ? (
              <Icon fontSize={24} icon="mdi:show" />
            ) : (
              <Icon fontSize={24} icon="mdi:hide" />
            )}
            {emailShow ? (
              <p>leo.thomelintual@gmail.com</p>
            ) : (
              "Afficher mon email"
            )}
          </Secondary>
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
