"use client";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
};

const ProjectShowcase = ({ title, text, imageSrc, imageAlt }: ProjectProps) => {
  return (
    <article className="flex h-300 w-screen flex-row items-center self-center overflow-hidden rounded-md md:w-screen">
      <article className="flex h-150 w-125 flex-col justify-between rounded-md border-2 border-(--color-border) bg-(--color-background) p-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-2xl">{title}</h2>
          <Link href="https://github.com/Leo-ThomelinTual">
            <Image
              unoptimized
              aria-disabled="true"
              width={100}
              height={100}
              src="https://img.shields.io/badge/github-repo-blue?logo=github&style=plastic"
              alt="Liens vers mon repository github"
            />
          </Link>
        </div>

        <p>{text}</p>
      </article>

      <div className="relative right-0 hidden h-250 w-250 border-[2px_2px_2px_0px] border-(--color-border) md:flex">
        <Image fill src={imageSrc} alt={imageAlt} />
      </div>
    </article>
  );
};

export default ProjectShowcase;
