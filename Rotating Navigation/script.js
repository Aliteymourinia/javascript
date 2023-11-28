const content = document.querySelector("#content");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const contentBackground = document.querySelector("#contentBackground");

let currentClick = 0;
open.addEventListener("click", () => {
  currentClick++;
  content.classList.add("-rotate-[20deg]");
  content.classList.add("-translate-y-7");
  contentBackground.classList.add("-rotate-[20deg]");
  contentBackground.classList.add("-translate-y-16");
  contentBackground.classList.add("translate-x-24");
  open.classList.add("hidden");
  close.classList.remove("hidden");
});
close.addEventListener("click", () => {
  content.classList.remove("-rotate-[20deg]");
  content.classList.remove("-translate-y-7");
  contentBackground.classList.remove("-rotate-[20deg]");
  contentBackground.classList.remove("-translate-y-16");
  contentBackground.classList.remove("translate-x-24");
  close.classList.add("hidden");
  open.classList.remove("hidden");
});
