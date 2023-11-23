const progress = document.querySelector("#progress");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive = 1) {
   
    circles[currentActive-1].classList.remove("border-blue-500")
    circles[currentActive-3].classList.add("border-blue-500")

  }
  console.log(currentActive)
});
circles[currentActive-2].classList.add("border-blue-500")
// prev.addEventListener("click", () => {
//   currentActive--;
//   if (currentActive < 1) {
//     currentActive = 1;
//   }
//   update();
// });
// function update(){
//   circles.forEach((circle,idx)=>{
//     if(idx< currentActive){
//       circle.classList.add("border-blue-500")
//     } else {
//       circle.classList.remove("border-blue-500")
//     }
//   })
// }
