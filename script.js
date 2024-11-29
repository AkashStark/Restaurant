document.addEventListener("DOMContentLoaded", () => {
  const dishes = document.querySelectorAll(".dish-list-wrapper > img");

  const dishDetails = [
    {
      name: "Schezwan Noodles",
      cuisine: "Oriental, Asian, Street Food",
      rating: "4.2",
    },
    {
      name: "Dal Vegetable Curry",
      cuisine: "Indian, South Asian, Curry",
      rating: "4.1",
    },
    {
      name: "Chicken Biriyani",
      cuisine: "Italian, Continental, North Indian",
      rating: "4.4",
    },
    {
      name: "Chicken Curry",
      cuisine: "Italian, Continental, North Indian",
      rating: "4.3",
    },
  ];

  const positions = ["left", "top", "right", "bottom"];

  dishes.forEach((dish) => {
    dish.addEventListener("click", function () {
      if (this.getAttribute("data-position") !== "left") {
        const currentPos = dish.getAttribute("data-position");
        const steps = (positions.indexOf("left") - positions.indexOf(currentPos) + positions.length) % positions.length;

        dishes.forEach((d) => {
          const oldIndex = positions.indexOf(d.getAttribute("data-position"));
          d.setAttribute("data-position", positions[(oldIndex + steps) % positions.length]);
        });

        updateDetails(this.getAttribute("data-index"), this.src, `./Images/Backgrounds/${this.getAttribute("data-bg")}`);
      }
    });
  });

  function updateDetails(index, imgSrc, bgSrc) {
    const nameElem = document.querySelector(".name");
    const cuisineElem = document.querySelector(".cuisine");
    const ratingElem = document.querySelector(".rating");
    const dishImgElem = document.querySelector(".dish-img");

    nameElem.classList.add("hidden");
    cuisineElem.classList.add("hidden");
    ratingElem.classList.add("hidden");
    dishImgElem.classList.add("fade-out");

    setTimeout(()=>{
      document.body.style.backgroundImage = `url(${bgSrc})`;
    },200);

    setTimeout(() => {
      dishImgElem.src = imgSrc;

      const { name, cuisine, rating } = dishDetails[index];
      nameElem.textContent = name;
      cuisineElem.textContent = cuisine;
      ratingElem.textContent = rating;

      nameElem.classList.remove("hidden");
      cuisineElem.classList.remove("hidden");
      ratingElem.classList.remove("hidden");
      dishImgElem.classList.remove("fade-out");
    }, 500);
  }
});

