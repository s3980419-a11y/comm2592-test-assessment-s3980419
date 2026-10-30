  const pickButton = document.getElementById("pick-destination");
  const result = document.getElementById("random-result");

  pickButton.addEventListener("click", () => {
    const destinations = [...document.querySelectorAll(".grid article")];
    if (!destinations.length) return;

    document.querySelectorAll(".destination-picked").forEach(card => {
      card.classList.remove("destination-picked");
    });

    const chosen = destinations[Math.floor(Math.random() * destinations.length)];
    const title = chosen.querySelector("h3")?.textContent ?? "Your destination";
    const photo = chosen.querySelector(".destination-photo");

    result.replaceChildren();

    if (photo) {
      const image = photo.cloneNode();
      image.removeAttribute("class");
      result.appendChild(image);
    }

    const heading = document.createElement("h2");
    heading.textContent = "Your pick: " + title;
    result.appendChild(heading);

    const description = chosen.querySelector("p");
    if (description) result.appendChild(description.cloneNode(true));

    chosen.classList.add("destination-picked");
    chosen.scrollIntoView({ behavior: "smooth", block: "center" });
  });
