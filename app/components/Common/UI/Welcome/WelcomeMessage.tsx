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
        y: "20",
        duration: 1,
        stagger: {
          each: 0.3,
        },
        ease: "bounce.out",
      });
      gsap.to(".title", {
        opacity: 1,
        y: "0",
        duration: 3,
        stagger: {
          each: 0.3,
        },
        ease: "bounce.out",
      });

      gsap.to(".titleFrontend", {
        delay: 3,
        duration: 3,
        repeatDelay: 10,
        repeat: -1,
        scrambleText: "Frontend",
        ease: "power1.in",
      });

      CustomWiggle.create("titleWiggle", { wiggles: 1 });
      gsap.to(".titleWiggle", {
        duration: 3.25,
        y: 40,
        ease: "titleWiggle",
        repeat: -1,
        stagger: {
          each: 0.3,
        },
      });
    },
    { scope: titleContainer },
  );

  return (
    <section className="relative flex h-screen w-full flex-col justify-center gap-30">
      <article ref={titleContainer} className="mx-auto flex flex-col uppercase">
        <div className="flex w-full flex-col px-10 md:px-0">
          <h3 className="title text-3xl font-extrabold md:text-4xl">
            👋 Léo Thomelin-Tual
          </h3>
          <p className="flex items-center gap-3">
            <Icon
              className="shrink-0"
              icon="material-symbols:location-on-outline-rounded"
            />
            Basé à Sarthe/Lombron - Mobile Pays de la loire / Ouvert au
            télétravail
          </p>
        </div>
        <div className="relative flex w-max flex-col self-center font-extrabold">
          <h2 className="titleWiggle titleFrontend title text-[4em] text-(--color-primary) lg:text-[10em] xl:text-[15em]">
            Je suis
          </h2>
          <h2 className="titleWiggle title text-[4em]/[2rem] lg:text-[8em]/[2rem] xl:text-[15em]/[3rem]">
            Développeur
          </h2>
          <h3 className="title titleWiggle self-end text-[2.5em]/[2rem] text-(--color-secondary) lg:text-[4em]/[5rem] xl:text-[5rem]/[8rem]">
            Junior
          </h3>
        </div>
      </article>

      <article className="xs:w-1/3 mx-10 flex flex-col gap-2 self-center text-justify md:w-2/3">
        <p className="font-medium">
          &gt; <strong>Développeur web/mobile junior Bac+2</strong>, curieux et
          motivé, avec une forte capacité d`adaptation et un bon esprit
          d`équipe. Autonome et rigoureux, je recherche une alternance ou un CDI
          pour développer mes compétences sur des projets réels.
        </p>
        <p></p>
      </article>
    </section>
  );
};

export default WelcomeMessage;
