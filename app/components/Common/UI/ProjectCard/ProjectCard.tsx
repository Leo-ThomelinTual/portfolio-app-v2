"use client";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
type CardProps = {
  imageSrc: string;
  imageAlt: string;

  href: string;

  projectName: string;
  projectDescription: string;

  dateStart: string;
  dateEnd: string;

  children: React.ReactNode;
};

const ProjectCard = ({
  imageSrc,
  imageAlt,
  projectName,
  dateStart,
  dateEnd,
  projectDescription,
  children,
  href,
}: CardProps) => {
  return (
    <div
      className={`${styles.case} group relative flex w-97.5 flex-col gap-2 overflow-hidden rounded-xl border-2 border-(--color-border-muted) bg-(--transparency-background) p-3 hover:border-white md:w-112.5 md:gap-5 md:p-5`}
    >
      <Link className="relative h-55 w-full" href={href}>
        <Image src={imageSrc} alt={imageAlt} fill />
      </Link>

      {/* Link display for Mobile   */}
      <div className="flex w-max gap-3 rounded-md bg-(--transparency-background) p-1 lg:hidden"></div>

      {/* Link display for Desktop */}
      <div className="absolute top-5 bottom-0 z-100 m-1 hidden h-max w-max translate-x-[-200%] gap-3 rounded-md bg-(--transparency-background) p-1 group-hover:translate-x-0 lg:flex"></div>

      <div className="flex flex-col gap-4 md:gap-2">
        <h3 className="border-b border-(--color-border-muted) pb-2 text-2xl">
          {projectName}
        </h3>
        <p className="flex justify-center gap-2">
          {dateStart}
          <Icon
            className="shrink-0"
            fontSize={25}
            icon="material-symbols:arrow-forward"
          />
          {dateEnd}
        </p>
        <p>{projectDescription}</p>
      </div>
      <div className="flex flex-row flex-wrap gap-1">{children}</div>
    </div>
  );
};

export default ProjectCard;
