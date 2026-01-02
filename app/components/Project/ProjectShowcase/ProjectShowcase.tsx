import Image from "next/image";
import React from "react";

const ProjectShowcase = () => {
  return (
    <article className="relative hidden h-220 w-7xl overflow-hidden rounded-md border-2 border-white md:flex">
      <Image fill src="/Backyard.png" alt="" />
    </article>
  );
};

export default ProjectShowcase;
