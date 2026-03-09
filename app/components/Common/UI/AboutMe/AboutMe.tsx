type AboutMeProps = {
  children: React.ReactNode;
};

const AboutMe = ({ children }: AboutMeProps) => {
  return (
    <section className="relative max-w-4xl self-center px-5">
      <div className="absolute -top-100" id="AboutMe" />

      <article className="relative h-max w-full rounded-l-none rounded-r-md rounded-b-md border-2 border-(--color-border) bg-(--color-background) p-5 lg:rounded-md">
        <h2 className="rounded-x-md absolute -top-15.5 -left-0.5 h-max w-max rounded-t-md border-x-2 border-t-2 border-(--color-border) bg-(--color-background) p-4 text-xl font-bold uppercase lg:-left-25 lg:rounded-md lg:border-2 lg:px-5 lg:py-7 lg:text-4xl">
          A propos de moi
        </h2>

        <p className="text-sm lg:indent-65 lg:text-lg">{children}</p>
      </article>
    </section>
  );
};

export default AboutMe;
