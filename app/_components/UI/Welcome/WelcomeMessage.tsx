"use client";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import {
  gsap,
  ScrollSmoother,
  CustomWiggle,
  CustomEase,
  ScrambleTextPlugin,
} from "gsap/all";
import { useRef } from "react";
import Link from "next/link";
import AboutMe from "../AboutMe/AboutMe";

gsap.registerPlugin(
  useGSAP,
  ScrollSmoother,
  CustomEase,
  CustomWiggle,
  ScrambleTextPlugin,
);

const WelcomeMessage = () => {
  const titleContainer = useRef(null);

  useGSAP(
    () => {
      gsap.from(".title", {
        opacity: 0,
        y: 50,
        duration: 2,
        stagger: {
          each: 0.2,
        },
        ease: "elastic",
      });
      gsap.to(".title", {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: {
          each: 0.2,
        },
        ease: "elastic",
      });

      gsap.to(".togglefb", {
        duration: 4,
        repeat: 0,
        scrambleText: "Frontend",
        ease: "power1",
      })
    },
    { scope: titleContainer },
  );

  return (
    <section id="Home" className="relative flex flex-col w-full justify-center px-5 lg:px-100 md:gap-20 gap-10 h-screen">
      <article ref={titleContainer} className="flex w-full md:gap-20 gap-10 items-center flex-col uppercase">
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-col md:flex-row flex-nowrap md:items-center gap-2">
          {/*<Image className="rounded-full w-max h-30 overflow-hidden" src="/img/profile.png" alt="Photo de profile" width={100} height={100}/>*/}
          <h3 className="text-2xl font-extrabold md:text-4xl">👋Léo Thomelin-Tual
            <p className="text-base text-center text-(--color-muted)">Développeur web Frontend / Backend</p>
          </h3>
          </div>
          <Link
            href="https://www.google.fr/maps/place/72450+Lombron/@48.0854535,0.3899714,14z/data=!4m6!3m5!1s0x47e25f513c879633:0x40d37521e0ac730!8m2!3d48.080236!4d0.416376!16s%2Fm%2F03qk_cf?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
            className="flex w-full items-center gap-2 text-sm hover:underline md:w-max md:text-base"
          >
            <Icon
              className="shrink-0"
              icon="material-symbols:location-on-outline-rounded"
            />
            Basé à Sarthe/Lombron - Mobile Pays de la loire
          <div className="flex gap-1">
            <Icon className="shrink-0" icon="mdi:train" />
            <Icon className="shrink-0" icon="mdi:bus" />
            <Icon className="shrink-0" icon="mdi:bike"/>
          </div>
          </Link>
        </div>

          <h2 className="flex h-max w-full flex-col text-nowrap text-[3em]/[1em] md:text-[5em] select-none font-extrabold lg:text-[7em] xl:text-[10em]">
            <span className="title text-(--color-primary) togglefb text-start"></span>
            <span className="title text-center">Développeur</span>
          </h2>
      </article>

      <section className="w-full">
        <AboutMe>
          <h2 className="uppercase text-xl flex items-center gap-2 font-bold"><Icon icon="mdi:person" />À propos de moi</h2>
          <p className="text-xs md:text-lg md:text-justify">
            Bonjour, je m'appelle Léo et j'ai 21 ans. Je suis développeur web frontend et backend. Polyvalent, passionné et motivé j'aime créer des sites variés et j'aime découvrir et apprendre de nouveau langage de programmation et frameworks.
          </p>
        </AboutMe>

      </section>
        <a className="target text-center w-max self-center p-5 hover:bg-(--background-transparency) hover:shadow-[inset_0px_0px_10px] hover:tracking-widest shadow-white/15 backdrop-blur-xs rounded-full text-base hover:text-lg transition-text ease duration-700" href="#AboutMe">En savoir plus</a>
    </section>
  );
};

export default WelcomeMessage;
