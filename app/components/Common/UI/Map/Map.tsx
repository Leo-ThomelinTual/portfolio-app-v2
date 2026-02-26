"use client";
import Image from "next/image";
import { MapPinHouse } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Map = () => {
  useGSAP(() => {
    gsap.set(".content", {
      opacity: 0,
      y: 20,
    });
    gsap.to(".content", {
      scrollTrigger: {
        trigger: ".content",
        scrub: true,
      },
      duration: 2,
      y: 0,
      opacity: 1,
      ease: "power4",
      stagger: {
        each: 0.2,
      },
    });
  });

  return (
    <section className="group flex w-full flex-wrap justify-center gap-25 px-5 md:px-25">
      <article className="flex h-max w-170 flex-col gap-3 text-center">
        <h2 className="content text-5xl font-extrabold text-nowrap uppercase md:text-6xl">
          Ma mobilités
        </h2>
        <p className="content">
          J`habite proche du Mans et ma capacité de déplacement se situe en Pays
          de la loire grâce au train et bus.
        </p>
      </article>
      <div className="transition-rotate-x ease relative h-120 w-120 duration-500 transform-3d group-hover:rotate-x-50 group-hover:-rotate-z-20 md:h-200 md:w-200">
        <MapPinHouse className="absolute top-35 left-35 z-50 flex shrink-0 text-(--danger) md:hidden" />
        <div className="ease absolute top-35 left-85 z-50 hidden flex-row transition-all duration-500 transform-3d group-hover:-translate-x-5 group-hover:translate-y-20 group-hover:translate-z-30 group-hover:-rotate-x-50 md:flex">
          <MapPinHouse className="shrink-0 text-(--color-background)" />
          <p className="border-b-3 border-(--color-background) text-(--color-background)">
            Pays de la loire / Le Mans
          </p>
          <div className="absolute top-6 left-10 h-5 w-1 rounded-[0px_0px_10px_0px] bg-(--color-background)" />
          <div className="absolute top-10 -left-15 h-25 w-1 rounded-[10px_10px_10px_10px] bg-(--color-background)" />
          <div className="absolute top-10 right-32 h-1 w-25 rounded-[10px_0px_0px_0px] bg-(--color-background)" />
          <ul className="absolute top-13 -left-7 list-disc text-nowrap text-(--color-background)">
            <li>Mobilité : Vélo, Train, Bus, Car</li>
            <li>Réseau : Fibre</li>
          </ul>
        </div>
        <Image src="/img/France-map.svg" alt="" fill />
      </div>
    </section>
  );
};

export default Map;
