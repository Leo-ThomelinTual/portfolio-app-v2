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
  asWebsite: boolean;
  asGithub: boolean;

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
  asWebsite,
  asGithub,
  tags,
}: CardProps) => {
  return (
    <div
      id="card"
      className={`${styles.case} group relative flex h-140 w-97.5 flex-col gap-2 rounded-xl border-2 border-(--color-border-muted) bg-(--transparency-background) p-3 hover:border-white md:w-112.5 md:gap-3`}
    >
      <Link className="relative h-55 w-full" href={websiteLink}>
        <Image className="rounded-md" src={imageSrc} alt={imageAlt} fill />
      </Link>

      <div className="flex justify-around gap-1">
        {isWorkingOn ? (
          <div className="flex h-max items-center gap-2 rounded-md border-2 border-(--success) bg-(--color-background) p-2 uppercase select-none">
            Working on
            <div className="h-max w-max rounded-md bg-(--success) p-1" />
          </div>
        ) : null}

        {asWebsite ? (
          <Link
            href={websiteLink}
            className="flex h-max items-center gap-2 rounded-md border-2 bg-(--color-background) p-2 uppercase"
          >
            Website
            <Icon icon="fa7-solid:external-link" />
          </Link>
        ) : null}
        {asGithub ? (
          <Link
            href={githubLink}
            className="flex h-max items-center gap-2 rounded-md border-2 border-(--color-muted) bg-(--color-background) p-2 uppercase"
          >
            Github
            <Icon icon="mdi:github" />
          </Link>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 px-2 md:gap-2">
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
      <div className="mt-auto flex flex-row flex-wrap gap-1">
        {tags.map((tag) => (
          <Tags key={tag} name={tag} icon={getIconFromTag(tag)} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
