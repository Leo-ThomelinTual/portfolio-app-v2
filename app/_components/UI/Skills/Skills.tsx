"use client"
import { useGSAP } from "@gsap/react";
import Tags, { getIconFromTag } from "../../Utils/Tags/Tags";
import { gsap } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

type SkillsProps = {
  tags: string[];
};

const Skills = ({ tags }: SkillsProps) => {
  const skillContainer = useRef(null);

  useGSAP(
    () => {
      gsap.from(".skill", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power1",
      })
      gsap.to(".skill", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power1",
      });
    }, { scope: skillContainer }
  )


  return (
    <section className="flex flex-col items-center w-full gap-20">
      <h2 className="uppercase font-bold text-3xl text-center">- Compétences -</h2>
      <div ref={skillContainer} className="relative flex flex-wrap justify-center gap-2 lg:w-250">
        <div id="Skills" className="absolute -top-50" />
          {tags.map((tag, index) => (
            <Tags className="skill" key={index} name={tag} icon={getIconFromTag(tag)} />
            ))}
        </div>
    </section>
  );
};

export default Skills;
