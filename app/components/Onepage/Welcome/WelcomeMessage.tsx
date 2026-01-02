import React from "react";

const WelcomeMessage = () => {
  return (
    <section className="my-10 flex h-max w-full flex-wrap justify-center gap-10">
      <div className="flex flex-col font-bold uppercase">
        <h2 className="text-5xl text-(--primary) md:text-7xl">Frontend</h2>
        <h2 className="text-5xl/[30px] md:text-7xl/[50px]">Développeur</h2>
        <h3 className="self-end text-4xl/[40px] text-(--secondary) md:text-4xl/[50px]">
          Junior
        </h3>
      </div>
      <div className="hidden rounded-md border-r-5 xl:flex" />
      <article className="px-5 py-5 xl:w-1/3">
        <p className="text-base font-medium">
          Bonjour je m appelle Léo, Je suis développeur web / Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Libero vitae eius architecto
          eligendi eos obcaecati. Id aliquam adipisci, magnam ratione suscipit
          officia ut reprehenderit repellat, sit nam animi dolores illum!
        </p>
      </article>
    </section>
  );
};

export default WelcomeMessage;
