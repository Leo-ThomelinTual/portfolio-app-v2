import Tags, { getIconFromTag } from "../../Utils/Tags/Tags";

type SkillsProps = {
  tags: string[];
};

const Skills = ({ tags }: SkillsProps) => {
  return (
    <div className="relative mx-auto flex w-full flex-wrap justify-center gap-2 px-2 lg:w-250">
      <div id="Skills" className="absolute -top-50" />
      {tags.map((tag) => (
        <Tags key={tag} name={tag} icon={getIconFromTag(tag)} />
      ))}
    </div>
  );
};

export default Skills;
