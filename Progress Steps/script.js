const progress = document.querySelector("#progress");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
});

// prev.addEventListener("Click", () => {
//   currentActive--;
//   if (currentActive < 1) {
//     currentActive = 1;
//   }
//   update();
// });
// function update() {
//   circles.forEach((circle, idx) => {
//     if (idx < currentActive) {
//       circle.classList.add("border-blue-500");
//     } else {
//       circle.classList.remove("border-blue-500");
//     }
//   });
// }
