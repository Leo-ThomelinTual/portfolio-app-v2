import Image from "next/image";
import React from "react";

type ProjectProps = {
  title: string;
  text: string;
  imagesrc: string;
  imagealt: string;
};

const ProjectShowcase = ({ title, text, imagesrc, imagealt }: ProjectProps) => {
  return (
    <article className="flex h-220 w-[90%] flex-row self-center overflow-hidden rounded-md">
      <article className="w-200 rounded-tl-md rounded-bl-md border-[2px_0px_2px_2px] border-(--color-border) bg-(--color-background) p-2">
        <h2 className="text-2xl">{title}</h2>
        <p>{text}</p>
        <div className="relative h-120 w-full">
          <Image
            fill
            unoptimized
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Leo-ThomelinTual&theme=transparent&locale=fr&hide_border=true"
            alt=""
          />
        </div>
      </article>

      <div className="relative w-full border-[2px_2px_2px_0px] border-(--color-border)">
        <Image fill src={imagesrc} alt={imagealt} />
      </div>
    </article>
  );
};

export default ProjectShowcase;
