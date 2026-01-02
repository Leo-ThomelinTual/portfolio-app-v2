import Image from "next/image";
import React from "react";

const Map = () => {
  return (
    <section className="group flex w-full flex-wrap items-center justify-end gap-15 px-5 md:px-25">
      <article className="h-150 w-200 border-2 border-(--border) p-3">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          officiis sapiente dolores corrupti necessitatibus, delectus harum
          labore fugiat hic est amet, expedita placeat. Quam dolorem debitis qui
          aut? Veniam, corrupti.
        </p>
      </article>
      <div className="transition-rotate-x ease relative h-95 w-95 duration-500 transform-3d group-hover:rotate-x-50 group-hover:-rotate-z-20 md:h-200 md:w-200">
        <div className="ease absolute left-45 z-50 transition-all duration-500 transform-3d group-hover:-translate-x-5 group-hover:translate-y-20 group-hover:translate-z-30 group-hover:-rotate-x-50 md:top-35 md:left-90">
          <p className="border-b-2 border-black text-black">France / Sarthe</p>
          <div className="">
            <div className="absolute top-6 left-10 h-5 w-1 bg-black" />
            <div className="absolute top-10 -left-15 h-25 w-1 bg-black" />
            <div className="absolute -top-2 -left-2 h-25 w-1 rotate-90 transform bg-black" />
            <ul className="absolute top-13 -left-7 list-disc md:text-nowrap text-black">
              <li>Mobilité : Vélo, Train, Bus, Car</li>
              <li>Réseau : Fibre</li>
            </ul>
          </div>
        </div>
        <Image src="/Carte_France.png" alt="" fill />
      </div>
    </section>
  );
};

export default Map;
