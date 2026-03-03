"use client";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Tags, { getIconFromTag } from "../../Utils/Tags/Tags";

type CardProps = {
  imageSrc: string;
  imageAlt: string;

  websiteLink: string;
  githubLink: string;

  projectName: string;
  projectDescription: string;

  dateStart: string;
  dateEnd: string;

  isWorkingOn: boolean;

  tags: string[];
};

const ProjectCard = ({
  imageSrc,
  imageAlt,
  projectName,
  dateStart,
  dateEnd,
  projectDescription,
  websiteLink,
  githubLink,
  isWorkingOn,
  tags,
}: CardProps) => {
  return (
    <div
      id="card"
      className={`${styles.case} group relative flex w-97.5 flex-col gap-2 rounded-xl border-2 border-(--color-border-muted) bg-(--transparency-background) p-3 hover:border-white md:w-112.5 md:gap-5 md:p-5`}
    >
      <Link className="relative h-55 w-full" href={websiteLink}>
        <Image className="rounded-md" src={imageSrc} alt={imageAlt} fill />
      </Link>

      {isWorkingOn ? (
        <div
          className={`${styles.isWorkingOn} transition-right ease absolute right-2 flex items-center gap-2 rounded-md border-2 border-(--success) bg-(--color-background) p-3 uppercase duration-500 md:group-hover:-right-30 md:group-hover:translate-z-15 md:group-hover:-rotate-y-50`}
        >
          Working on
          <div className="h-max w-max rounded-md bg-(--success) p-1" />
        </div>
      ) : null}

      <div className="flex flex-col gap-4 md:gap-2">
        <h3 className="border-b border-(--color-border-muted) pb-2 text-2xl">
          {projectName}
        </h3>
        <p className="flex justify-center gap-2">
          {dateStart}
          <Icon
            className="shrink-0"
            fontSize={24}
            icon="material-symbols:arrow-forward"
          />
          {dateEnd}
        </p>
        <p>{projectDescription}</p>
      </div>
      <Link
        className="transition-gap ease flex items-center gap-2 duration-500 hover:gap-3"
        href={githubLink}
      >
        Voir sur github <Icon icon="material-symbols:arrow-forward" />
      </Link>
      <div className="flex flex-row flex-wrap gap-1">
        {tags.map((tag) => (
          <Tags key={tag} name={tag} icon={getIconFromTag(tag)} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
