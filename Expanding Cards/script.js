
const container = document.querySelector(".container");
const panels = container.querySelectorAll(".panel");

container.addEventListener("click", (e) => {
  const clickedPanel = e.target.closest(".panel");
  if (clickedPanel)
    panels.forEach((panel) => {
      const h3 = panel.querySelector("h3");
      h3.classList.add("opacity-0");
      panel.classList.remove("grow");
    });
  clickedPanel.classList.add("grow");
  clickedPanel.classList.add("transition-all");
  clickedPanel.querySelector("h3").classList.remove("opacity-0");
});
