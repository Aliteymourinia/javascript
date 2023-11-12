const progress = document.querySelector("#progress");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;

  console.log(currentActive);
});
