const progress = document.querySelector("#progress");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
let currentActive = 1;
const pixelValues = [, 380, 600, 990];
next.addEventListener("click", () => {
  currentActive++;
  progress.style.width = pixelValues[currentActive - 1] + "px";
  circles[currentActive - 1].style.borderColor = "#3B82F6";
  prev.style.backgroundColor = "#3B82F6";
  prev.style.borderColor = "#3B83F6";
  prev.disabled = false;
  prev.addEventListener("click", () => {
    currentActive--;
    if (currentActive >= 1) {
      progress.style.width = pixelValues[currentActive - 1] + "px";
    }
  });
});

console.log(currentActive);

// currentActive--;
// progress.style.width = pixelValues[currentActive-1] + "px";
