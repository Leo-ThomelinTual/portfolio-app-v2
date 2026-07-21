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
import Temp from "../../Utils/Buttons/Temp";
import Link from "next/link";

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
    <section className="relative mt-20 flex h-max w-full flex-col justify-center gap-30 md:mt-0 md:h-screen">
      <article ref={titleContainer} className="mx-auto flex flex-col uppercase">
        <div className="flex w-full flex-col px-5 md:px-0">
          <h3 className="title text-2xl font-extrabold md:text-4xl">
            👋 Léo Thomelin-Tual
          </h3>
          <Link
            href="https://www.google.fr/maps/place/72450+Lombron/@48.0854535,0.3899714,14z/data=!4m6!3m5!1s0x47e25f513c879633:0x40d37521e0ac730!8m2!3d48.080236!4d0.416376!16s%2Fm%2F03qk_cf?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
            className="flex w-full items-center gap-3 text-sm hover:underline md:w-max md:text-base"
          >
            <Icon
              className="shrink-0"
              icon="material-symbols:location-on-outline-rounded"
            />
            Basé à Sarthe/Lombron - Mobile Pays de la loire
          </Link>
        </div>
        <div className="flex flex-col self-center text-center text-xs font-extrabold select-none sm:text-lg md:text-start md:text-xl lg:text-base">
          <h2 className="titleWiggle titleFrontend title text-[4em] text-(--color-primary) lg:text-[10em] xl:text-[15em]">
            Je suis
          </h2>
          <h2 className="titleWiggle title text-[4em]/[2rem] lg:text-[8em]/[2rem] xl:text-[15em]/[3rem]">
            Développeur
          </h2>
        </div>
      </article>

      <article className="flex w-full flex-wrap justify-center gap-10 md:mt-20">
        <p className="mx-5 rounded-md border-2 border-(--color-border) bg-(--color-background) p-3 text-xs md:w-1/2 md:p-5 md:text-justify md:text-lg">
          &gt; <strong>Développeur web & web mobile junior Bac+2</strong>,
          curieux et motivé, avec une forte capacité d`adaptation et un bon
          esprit d`équipe. Autonome et rigoureux, je recherche une alternance ou
          un CDI pour développer mes compétences sur des projets réels.
        </p>
        <div className="flex gap-5 md:flex-col">
          <Temp
            icon="mdi:linkedin"
            href="https://www.linkedin.com/in/leo-thomelintual/"
          >LinkedIn</Temp>
          <Temp
            icon="mdi:github"
            href="https://github.com/Leo-ThomelinTual"
          >Github</Temp>
        </div>
      </article>
    </section>
  );
};

export default WelcomeMessage;
