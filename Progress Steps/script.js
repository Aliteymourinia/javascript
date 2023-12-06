const progress = document.querySelector("#progress");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
let currentActive = 0;
const pixelValues = [, 260, 700, 1060];
next.addEventListener("click", () => {
  currentActive++;
  prev.disabled = false;
  prev.style.border = "#3B83F6";
  prev.style.borderStyle = "#3B83F6";
  progress.style.width = pixelValues[currentActive] + "px";
  circles.forEach((circle, index) => {
    if (index === currentActive) {
      circle.style.borderColor = "#3B83F6";
    }
  });
});
prev.addEventListener("click", () => {
  prev.classList.add("active:scale-95");
  currentActive--;
  if (currentActive > 0) {
    progress.style.width = pixelValues[currentActive] + "px";
  } else {
    prev.disabled = true;
    progress.style.width = "";
  }
  circles.forEach((circle, index) => {
    if (index > currentActive) {
      circle.style.borderColor = "";
    }
  });
});
