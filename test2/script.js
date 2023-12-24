const button = document.querySelector("button");
const ol = document.querySelector("ol");

function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode("toyota"));
  ol.appendChild(li);
}
button.addEventListener("click", () => {
  createListElement();
});
