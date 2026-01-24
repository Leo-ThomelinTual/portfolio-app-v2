import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col px-5 pt-50 pb-20 text-center md:gap-5 lg:px-20">
      <section className="flex w-full flex-wrap gap-2 text-center md:justify-center lg:gap-10">
        <article className="flex w-full flex-col gap-3 rounded-md border-2 p-3 md:w-1/3 lg:w-1/4">
          <h2 className="text-bold text-xl uppercase">Titre de section</h2>
          <ul className="flex flex-col">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </article>
        <article className="flex w-full flex-col gap-3 rounded-md border-2 p-3 md:w-1/3 lg:w-1/4">
          <h2 className="text-bold text-xl uppercase">Titre de section</h2>
          <ul className="flex flex-col">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </article>
        <article className="flex w-full flex-col gap-3 rounded-md border-2 p-3 md:w-1/3 lg:w-1/4">
          <h2 className="text-bold text-xl uppercase">Titre de section</h2>
          <ul className="flex flex-col">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </article>
        <article className="flex flex-col border-t-2 p-3">
          <p>Copyright 2025 - 2030 / Léo Thomelin-Tual</p>
          <p>
            Website made with NextJS and TailwindCSS design with Figma coded in
            visual studio code deployed with vercel.
          </p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
