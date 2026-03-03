type AboutMeProps = {
  children: React.ReactNode;
};

const AboutMe = ({ children }: AboutMeProps) => {
  return (
    <section className="relative mx-10 flex max-w-4xl flex-row flex-wrap justify-center md:px-10 lg:mx-auto">
      <div className="absolute -top-100" id="AboutMe" />
      <article className="relative h-max w-full rounded-r-md rounded-b-md border-2 bg-(--color-background) p-6 md:rounded-md md:p-10">
        <h2 className="absolute -top-18.5 -left-0.5 h-max w-max rounded-t-md border-x-2 border-t-2 bg-(--color-background) px-3 py-4 text-4xl font-bold uppercase md:-top-11 md:-left-19 md:rounded-md md:border-2 md:px-5 md:py-7">
          A propos de moi
        </h2>

        <p className="md:indent-65">{children}</p>
      </article>
    </section>
  );
};

export default AboutMe;
