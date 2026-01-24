import React from "react";

const AboutMe = () => {
  return (
    <section className="flex flex-row flex-wrap justify-center px-2 md:px-0">
      <article className="relative h-max rounded-md border-2 bg-(--color-background) p-6 md:w-1/2 md:p-10">
        <article className="absolute -top-11 left-3 h-max w-max rounded-md border-2 bg-(--color-background) px-2 py-3 md:-left-19 md:px-5 md:py-7">
          <h2 className="text-bold text-4xl">About me</h2>
        </article>
        <p className="md:indent-26">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          molestiae qui laboriosam optio dolore debitis ut pariatur nobis
          assumenda sequi, facilis eos tempore? Culpa molestias tempore
          cupiditate doloremque deleniti dolores!
        </p>
      </article>
    </section>
  );
};

export default AboutMe;
