import React, { MouseEventHandler } from "react";
import { Icon } from "@iconify/react";

type TagsProps = {
  icon: string;
  name: React.ReactNode;
  onClick?: MouseEventHandler;
  doExclude?: boolean;
};

const tagIcons: Record<string, string> = {
  TailwindCSS: "devicon:tailwindcss",
  Bootstrap: "devicon:bootstrap",
  Docker: "devicon:docker",
  Figma: "devicon:figma",
  Git: "devicon:git",
  Github: "mdi:github",
  React: "devicon:react",
  CSS: "devicon:css3",
  HTML: "devicon:html5",
  Javascript: "devicon:javascript",
  MySQL: "devicon:mysql",
  PHP: "devicon:php",
  VueJS: "devicon:vuejs",
  Typescript: "devicon:typescript",
  Symfony: "mdi:symfony",
  NextJS: "devicon:nextjs",
  Personnel: "material-symbols:account-circle",
  Professionnel: "material-symbols:cases",
  NuxtJS: "devicon:nuxtjs",
};

export function getIconFromTag(tag: string) {
  return tagIcons[tag] || "material-symbols:label";
}

const Tags = ({ icon, name, doExclude, onClick }: TagsProps) => {
  return (
    <button
      onClick={onClick}
      aria-labelledby={`Compétence en ${name}`}
      className={
        doExclude
          ? `transition-border ease flex h-10 w-max cursor-pointer items-center gap-2 rounded-md border-2 border-(--color-border-muted) bg-(--color-background) px-2 text-center duration-300 hover:border-(--color-border)`
          : `transition-border ease flex h-10 w-max items-center gap-2 rounded-md border-2 border-(--color-border-muted) bg-(--color-background) px-2 text-center duration-300 select-none hover:border-(--color-border)`
      }
    >
      <Icon fontSize={24} icon={icon} />
      <p className="text-(--color-foreground)">{name}</p>
    </button>
  );
};

export default Tags;
