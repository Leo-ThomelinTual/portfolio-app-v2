import Tags from "../../Utils/Tags/Tags";

const Skills = () => {
  return (
    <div className="relative mx-auto flex w-full flex-wrap gap-2 px-2 lg:w-250">
      <div id="Skills" className="absolute -top-50" />
      <Tags icon="devicon:nextjs">NextJS</Tags>
      <Tags icon="devicon:nuxt">NuxtJS</Tags>
      <Tags icon="devicon:docker">Docker</Tags>
      <Tags icon="devicon:git">Git</Tags>
      <Tags icon="devicon:tailwindcss">TailwindCSS</Tags>
      <Tags icon="devicon:html5">HTML</Tags>
      <Tags icon="devicon:css3">CSS</Tags>
      <Tags icon="devicon:figma">Figma</Tags>
      <Tags icon="devicon:javascript">Javascript</Tags>
      <Tags icon="devicon:php">PHP</Tags>
      <Tags icon="devicon:mysql">MySQL</Tags>
      <Tags icon="devicon:bootstrap">Bootstrap</Tags>
      <Tags icon="devicon:react">React</Tags>
      <Tags icon="mdi:symfony">Symfony</Tags>
      <Tags icon="devicon:vuejs">Vue</Tags>
      <Tags icon="devicon:typescript">Typescript</Tags>
      <Tags icon="mdi:github">Github</Tags>
    </div>
  );
};

export default Skills;
