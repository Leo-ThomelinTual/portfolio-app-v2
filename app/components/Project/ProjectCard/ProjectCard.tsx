import React from "react";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <article className="flex h-125 w-full flex-col justify-between rounded-md border-2 border-(--border) bg-(--background) p-2 md:w-96">
      <div className="flex items-center gap-1">
        <Image src="./globe.svg" alt="" width={25} height={25} />
        <h3 className="p-2 text-xl">ProductCard</h3>
      </div>
      <p className="p-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
        aperiam rem ducimus tenetur maxime non odio adipisci dolores, at,
        aspernatur quis rerum reiciendis quibusdam quam saepe accusamus culpa
        atque quod?
      </p>
      <ul className="flex w-full flex-col items-center">
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ul>
      <p>Made with:</p>
      <div className="flex flex-wrap gap-2"></div>
    </article>
  );
};

export default ProjectCard;
