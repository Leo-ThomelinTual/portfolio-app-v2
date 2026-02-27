import Bootstrap from "../../Utils/Tags/Bootstrap";
import CSS from "../../Utils/Tags/CSS";
import Docker from "../../Utils/Tags/Docker";
import Figma from "../../Utils/Tags/Figma";
import Git from "../../Utils/Tags/Git";
import Github from "../../Utils/Tags/Github";
import HTML from "../../Utils/Tags/HTML";
import Javascript from "../../Utils/Tags/Javascript";
import MySQL from "../../Utils/Tags/MySQL";
import Next from "../../Utils/Tags/Next";
import Nuxt from "../../Utils/Tags/Nuxt";
import PHP from "../../Utils/Tags/PHP";
import React from "../../Utils/Tags/React";
import Symfony from "../../Utils/Tags/Symfony";
import TailwindCSS from "../../Utils/Tags/Tailwindcss";
import Typescript from "../../Utils/Tags/Typescript";
import VueJS from "../../Utils/Tags/VueJS";

const Skills = () => {
  return (
    <div className="relative mx-auto flex w-full flex-wrap gap-2 px-2 lg:w-250">
      <div id="Skills" className="absolute -top-50" />
      <Next />
      <Nuxt />
      <Docker />
      <Git />
      <TailwindCSS />
      <HTML />
      <CSS />
      <Figma />
      <Javascript />
      <PHP />
      <MySQL />
      <Bootstrap />
      <React />
      <Symfony />
      <VueJS />
      <Typescript />
      <Github />
    </div>
  );
};

export default Skills;
