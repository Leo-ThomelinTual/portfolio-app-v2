import React from "react";
import Primary from "../../Utils/Buttons/Primary";
import SocialBubble from "../../Utils/SocialBubble/SocialBubble";
import { ArrowRight } from "lucide-react";

const Formular = () => {
  return (
    <section className="flex w-full flex-col gap-3 px-2">
      <form
        action="GET"
        className="flex h-90 w-full flex-col gap-10 self-center rounded-md border-2 bg-(--color-background) p-5 md:w-1/2 lg:w-250"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="relative w-full">
            <label
              className="absolute -top-4 left-2 bg-(--color-background) px-1 py-0.5 uppercase"
              htmlFor="name"
            >
              Nom
            </label>
            <input
              name="name"
              type="text"
              className="h-10 w-full rounded-md border-2 border-(--color-border) p-3 outline-offset-3 focus:border-(--color-primary) focus:outline-2 focus:outline-(--color-secondary)"
              placeholder="ex: Dupont"
              required
            />
          </div>
          <div className="relative w-full">
            <label
              className="absolute -top-4 left-2 bg-(--color-background) px-1 py-0.5 uppercase"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="h-10 w-full rounded-md border-2 border-(--color-border) p-3 outline-offset-3 focus:border-(--color-primary) focus:outline-2 focus:outline-(--color-secondary)"
              name="email"
              type="email"
              placeholder="exemple@email.com"
              required
            />
          </div>
        </div>
        <div className="relative w-full">
          <label
            className="absolute -top-4 left-2 bg-(--color-background) px-1 py-0.5 uppercase"
            htmlFor="message"
          >
            Votre message
          </label>
          <textarea
            className="h-25 max-h-40 min-h-25 w-full resize-y rounded-md border-2 border-(--color-border) p-3 outline-offset-3 focus:border-(--color-primary) focus:outline-2 focus:outline-(--color-secondary)"
            name="message"
            id=""
            placeholder="Tapez votre message ici..."
          />
        </div>
        <div className="mt-auto self-end">
          <Primary href="/skills">
            Envoyer <ArrowRight />{" "}
          </Primary>
        </div>
      </form>
      <div className="relative md:left-120">
        <p>Vous pouvez aussi me contacter via ces réseau sociaux :</p>
        <SocialBubble />
      </div>
    </section>
  );
};

export default Formular;
