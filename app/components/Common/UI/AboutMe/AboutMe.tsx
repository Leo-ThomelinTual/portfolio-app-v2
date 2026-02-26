const AboutMe = () => {
  return (
    <section className="relative flex flex-row flex-wrap justify-center px-2 md:px-0">
      <div className="absolute -top-100" id="AboutMe" />
      <article className="relative h-max rounded-md border-2 bg-(--color-background) p-6 md:w-1/2 md:p-10">
        <h2 className="text-bold absolute -top-13 left-3 h-max w-max rounded-md border-2 bg-(--color-background) px-2 py-3 text-4xl uppercase md:-top-11 md:-left-19 md:px-5 md:py-7">
          A propos de moi
        </h2>

        <p className="md:indent-65">
          Je m`appelle Léo et j`ai commencé à m`intéresser au développement web
          quand j`étais au lycée. J`ai donc appris avec des cours en ligne et en
          libre accès, ce qui m`a permis d`acquérir les bases du développement
          web. Après le lycée, je me suis tourné vers une formation en
          développement web et web mobile, qui m`a permis d`obtenir un diplôme
          bac+2, et quelques nuits blanches à rattraper.
        </p>
      </article>
    </section>
  );
};

export default AboutMe;
