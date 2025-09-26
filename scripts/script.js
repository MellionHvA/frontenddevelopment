// JavaScript Document

const menuButton = document.querySelector("header button:nth-of-type(2)");
const mainNav = document.querySelector("header nav:nth-of-type(1)");
const overlay = document.querySelector(".overlay");

// Toggle menu
menuButton.addEventListener("click", () => {
  menuButton.toggleAttribute("data-open");
  mainNav.toggleAttribute("data-open");
  overlay.toggleAttribute("data-open");
});

// Carousel functionality for all carousels
const carousels = document.querySelectorAll("main > section:nth-of-type(2), main > section:nth-of-type(4)");

carousels.forEach((carousel) => {
  const ul = carousel.querySelector("ul");
  const buttons = carousel.querySelectorAll("button");
  let currentIndex = 0;
  const itemWidth = ul.querySelector("li").offsetWidth + 16; // 16px gap

  buttons[0].addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      ul.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  });

  buttons[1].addEventListener("click", () => {
    if (currentIndex < ul.children.length - 2) { // adjust for visible items
      currentIndex++;
      ul.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  });
});



// class toevoegen op body, en op overflow hidden zetten om lock op slot te zetten 