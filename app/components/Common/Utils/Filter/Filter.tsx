import { Icon } from "@iconify/react";
import Next from "../Tags/Next";

const Filter = () => {
  function filterList(event: Event) {
    const clickedElement = event.currentTarget as HTMLElement;
    const tagName = clickedElement.getAttribute("data-tag");
    const cards = document.querySelectorAll("#card");

    const getItems = document.querySelectorAll(
      "#" + tagName + ":not(#excluder)",
    );

    ShowAll();

    clickedElement.classList.toggle("bg-red-500");
    clickedElement.classList.toggle("hover:bg-red-700");

    // Récupère toute les cards avec un id #card

    let foundOne = false;

    cards.forEach((card) => {
      const excludedCard = card.querySelector("#excludeCard");
      const hasGoodTag = card.querySelector("button[id^=" + tagName + "]");

      if (!hasGoodTag && !excludedCard) {
        card.classList.toggle("hidden");
      } else if (hasGoodTag) {
        foundOne = true;
      }
    });

    const noFound = document.getElementById("NoFound");

    if (!foundOne) {
      noFound?.classList.add("flex");
      noFound?.classList.remove("hidden");
    } else {
      noFound?.classList.add("hidden");
      noFound?.classList.remove("flex");
    }
  }

  function ShowAll() {
    const cards = document.querySelectorAll("#card");
    const excluded = document.querySelectorAll("#excluder");
    const noFound = document.getElementById("NoFound");

    excluded.forEach((exclude) => {
      exclude.classList.remove("bg-red-500");
      exclude.classList.remove("hover:bg-red-700");
    });
    noFound?.classList.remove("flex");
    noFound?.classList.add("hidden");

    cards.forEach((card) => {
      card.classList.remove("hidden");
      card.classList.add("flex");
    });
  }

  return (
    <section className="flex w-[85%] flex-col gap-3 lg:w-[65%]">
      <article className="flex w-50 items-center gap-2 border-b-2 p-2">
        <p>Filtre</p>
        <Icon icon="material-symbols:filter-list" />
      </article>
      <article className="flex flex-wrap gap-1">
        <Next onClick={filterList} id="excluder" />
      </article>
    </section>
  );
};

export default Filter;
