"use client";
import { Icon } from "@iconify/react";
import Tags from "../Tags/Tags";

type FilterProps = {
  activeTag: string | null;
  setActiveTag: React.Dispatch<React.SetStateAction<string | null>>;
};

const Filter = ({ activeTag, setActiveTag }: FilterProps) => {
  function handleFilter(tag: string) {
    setActiveTag(tag);
  }
  return (
    <section className="flex w-full flex-col flex-wrap gap-2 px-10 md:px-20">
      <p className="flex w-50 items-center gap-2 border-b-2 p-2">
        Filtre <Icon icon="material-symbols:filter-list" />
      </p>
      <article className="flex flex-wrap gap-2">
        <Tags
          doExclude={true}
          onClick={() => setActiveTag(null)}
          name="Tout"
          icon="material-symbols:all-inclusive"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("TailwindCSS")}
          name="TailwindCSS"
          icon="devicon:tailwindcss"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("Bootstrap")}
          name="Bootstrap"
          icon="devicon:bootstrap"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("CSS")}
          name="CSS"
          icon="devicon:css3"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("HTML")}
          name="HTML"
          icon="devicon:html5"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("Javascript")}
          name="Javascript"
          icon="devicon:javascript"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("MySQL")}
          name="MySQL"
          icon="devicon:mysql"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("PHP")}
          name="PHP"
          icon="devicon:php"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("React")}
          name="React"
          icon="devicon:react"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("Symfony")}
          name="Symfony"
          icon="mdi:symfony"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("Typescript")}
          name="Typescript"
          icon="devicon:typescript"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("VueJS")}
          name="VueJS"
          icon="devicon:vuejs"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("Personnel")}
          name="Personnel"
          icon="material-symbols:account-circle"
        />
        <Tags
          doExclude={true}
          onClick={() => handleFilter("Professionnel")}
          name="Professionnel"
          icon="material-symbols:cases"
        />
      </article>
    </section>
  );
};

export default Filter;
