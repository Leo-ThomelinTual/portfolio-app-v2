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

  className?: string;

  projectName: string;
  projectDescription: string;

  dateStart: string;
  dateEnd: string;

  isWorkingOn: boolean;
  isFinished: boolean;
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
  isFinished,
  asWebsite,
  className,
  asGithub,
  tags,
}: CardProps) => {
  return (
    <div
      id="card"
      className={styles.case + " " + "group relative transition-opacity ease duration-500 flex h-160 w-97.5 flex-col gap-2 rounded-xl border-2 border-(--color-border-muted) bg-(--transparency-background) p-3 hover:border-white md:w-112.5 md:gap-5" + " " + className}
    >
      <Link className="h-55 w-full" href={websiteLink}>
        <Image
          className="rounded-md"
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={500}
        />
      </Link>

      <div className="grid grid-cols-3 w-full gap-3 text-nowrap">
        {isWorkingOn ? (
          <div className="flex flex-nowrap col-span-1 justify-center h-max w-full items-center gap-2 rounded-md border-2 border-(--success) bg-(--color-background) p-2 uppercase select-none">
            En cours
            <div className="h-max w-max rounded-md bg-(--success) p-1" />
          </div>
        ) : null}

        {isFinished ? (
          <div className="flex flex-nowrap col-span-1 justify-center h-max w-full items-center gap-2 rounded-md border-2 border-(--color-border-muted) bg-(--color-background) p-2 uppercase select-none">
            Terminer
            <div className="h-max w-max rounded-md bg-(--color-muted) p-1" />
          </div>
        ) : null}

        {asWebsite ? (
          <Link
            href={websiteLink}
            className="flex flex-nowrap h-max col-span-1 justify-center w-full items-center gap-2 rounded-md border-2 bg-(--color-background) p-2 uppercase"
          >
            Site web
            <Icon icon="fa7-solid:external-link" />
          </Link>
        ) : null}
        {asGithub ? (
          <Link
            href={githubLink}
            className="flex flex-nowrap h-max col-span-1 justify-center w-full items-center gap-2 rounded-md border-2 border-(--color-muted) bg-(--color-background) p-2 uppercase"
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
        <p>{projectDescription.length > 200 ? `${projectDescription.substring(0, 200)}...` : projectDescription}
        </p>
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
