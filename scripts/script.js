// JavaScript Document
const menuButton = document.querySelector("header button:nth-of-type(2)");
const mainNav = document.querySelector("header nav:nth-of-type(1)");
const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", () => {
  menuButton.toggleAttribute("data-open");
  mainNav.toggleAttribute("data-open");
  overlay.toggleAttribute("data-open");
});