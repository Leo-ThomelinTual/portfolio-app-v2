import React from "react";

const WelcomeMessage = () => {
  return (
    <section className="disable:h-max relative my-10 flex h-screen w-full gap-10">
      <div className="flex flex-col font-bold uppercase">
        <h2 className="text-5xl text-(--color-primary) md:text-[15rem]">
          Frontend
        </h2>
        <h2 className="text-5xl/[30px] md:text-[15rem]/[10rem]">Développeur</h2>
        <h3 className="self-end text-4xl/[40px] text-(--color-secondary) md:text-[5rem]/[1rem]">
          Junior
        </h3>
      </div>
      <div className="absolute right-1/3 bottom-1/3 hidden h-150 rotate-60 rounded-md border-r-5 xl:flex" />
      <article className="xl:w-1/3 absolute bottom-1/3 right-20">
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
