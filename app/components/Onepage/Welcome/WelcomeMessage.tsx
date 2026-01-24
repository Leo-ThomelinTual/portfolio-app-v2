import Image from "next/image";
import React from "react";
import Primary from "../../Utils/Buttons/Primary";
import Link from "next/link";

const WelcomeMessage = () => {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center gap-10">
      <div className="mx-auto flex flex-col">
        <div className="z-max relative flex w-full flex-col items-center">
          <Image
            src="https://readme-typing-svg.demolab.com?font=Jet+Brains+Mono&duration=4000&pause=300&color=5B5FF7&width=470&lines=Bonjour%2C;Je+m`appelle+L%C3%A9o+et+je+suis"
            className="mx-auto"
            width={470}
            height={100}
            unoptimized
            loading="eager"
            alt="Typing SVG"
          />
          <Link href="https://github.com/Leo-ThomelinTual">
            <Image
              unoptimized
              width={100}
              height={100}
              src="https://img.shields.io/badge/github-repo-blue?logo=github&style=plastic"
              alt="Liens vers mon repository github"
            />
          </Link>
        </div>
        <div className="flex flex-col font-bold uppercase select-none">
          <h2 className="text-5xl text-(--color-primary) md:text-[15rem]">
            Frontend
          </h2>
          <h2 className="text-5xl/[30px] md:text-[15rem]/[10rem]">
            Développeur
          </h2>
          <h3 className="self-end text-4xl/[40px] text-(--color-secondary) md:text-[5rem]/[1rem]">
            Junior
          </h3>
        </div>
      </div>

      <div className="flex h-1/4 w-full flex-row flex-wrap items-center justify-between self-center md:w-[60%]">
        <div className="hidden self-center md:flex">
          <Primary href="#aboutme">Let&apos;s start</Primary>
        </div>
        <article className="mx-10 w-full text-justify xl:w-1/2">
          <p className="text-base font-medium">
            &gt; Bonjour je m appelle Léo, Je suis développeur web / Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Libero vitae eius
            architecto eligendi eos obcaecati. Id aliquam adipisci, magnam
            ratione suscipit officia ut reprehenderit repellat, sit nam animi
            dolores illum!
          </p>
        </article>
      </div>
    </section>
  );
};

export default WelcomeMessage;
