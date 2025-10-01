// ==========================
// ELEMENTS
// ==========================
const menuButton = document.querySelector("header button:nth-of-type(2)");       // Hamburger knop
const mainNav = document.querySelector("header nav:nth-of-type(1)");             // Navigatie menu
const searchButton = document.querySelector("header > button:nth-of-type(1)");   // Search knop header
const searchBar = document.querySelector("header > section");                    // Search knop input
const closeIcon = document.querySelector("header > section svg:nth-of-type(2)"); // Sluit svg search
const overlay = document.querySelector(".overlay");                              // Full-page overlay


// Toggle
function toggle(el, lock = true) {
  const isOpen = el.toggleAttribute("data-open");
  if (lock) overlay.toggleAttribute("data-open", isOpen);
  document.body.toggleAttribute("data-menu-open", isOpen); // Scroll op slot
  return isOpen;
}

// Hamburger menu
menuButton.addEventListener("click", () => {
  toggle(menuButton);
  toggle(mainNav, false);
});

// Search bar
searchButton.addEventListener("click", () => toggle(searchBar));

closeIcon.addEventListener("click", () => {
  searchBar.removeAttribute("data-open"); 
  overlay.removeAttribute("data-open"); 
  document.body.removeAttribute("data-menu-open");
});

// Klik om overlay te sluiten
overlay.addEventListener("click", () => {
  menuButton.removeAttribute("data-open"); 
  mainNav.removeAttribute("data-open"); 
  searchBar.removeAttribute("data-open"); 
  overlay.removeAttribute("data-open"); 
  document.body.removeAttribute("data-menu-open");
});

// Carousel
const carousels = document.querySelectorAll("main > section:nth-of-type(2), main > section:nth-of-type(4)");

carousels.forEach(carousel => {
  const ul = carousel.querySelector("ul");
  const buttons = carousel.querySelectorAll("button");
  let currentIndex = 0;
  const itemWidth = ul.querySelector("li").offsetWidth + 16;

  // Knop links
  buttons[0].addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      ul.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  });

  // Knop rechts
  buttons[1].addEventListener("click", () => {
    if (currentIndex < ul.children.length - 2) {
      currentIndex++;
      ul.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  });
});