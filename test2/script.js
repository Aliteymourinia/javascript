const button = document.querySelector("button");
const ol = document.querySelector("ol");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode("toyota"));
  ol.appendChild(li);
});
