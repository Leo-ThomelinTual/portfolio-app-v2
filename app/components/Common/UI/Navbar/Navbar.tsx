import NavbarBtn from "./NavbarBtn";

const Navbar = () => {
  return (
    <nav className="transition-h-border ease group/gap fixed inset-x-1/2 bottom-2 z-50 flex h-17 w-full -translate-x-1/2 justify-center overflow-hidden rounded-full border-0 border-(--color-border-muted) bg-(--background-transparency) shadow-[inset_0px_0px_10px] shadow-white/20 backdrop-blur-xs transition-shadow duration-400 hover:h-20 hover:border-(--color-border) hover:shadow-white/60 md:w-max md:shadow-[inset_0px_-10px_10px] md:hover:shadow-[inset_0px_0px_10px]">
      <div className="transition-gap ease flex items-center gap-0 px-5 duration-300 group-hover/gap:gap-5 md:gap-0">
        <NavbarBtn
          href="/"
          icon="material-symbols:home-outline-rounded"
          name="Accueil"
        />
        <NavbarBtn href="#AboutMe" name="A propos" icon="mdi:info" />
        <NavbarBtn href="#Skills" name="Compétences" icon="mdi:check" />
        <NavbarBtn href="#Projects" name="Projects" icon="mdi:target" />
        <NavbarBtn href="#contact" name="Contact" icon="mdi:user" />
      </div>
    </nav>
  );
};

export default Navbar;
