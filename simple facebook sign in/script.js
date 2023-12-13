const submit = document.querySelector("#submit");
const userName = document.querySelector("#userName");
const passWord = document.querySelector("#passWord");
const emptyField = document.querySelector("#emptyField");
const error = document.querySelector("#error");
database = [
  {
    username: "ali",
    password: "pss",
  },
];
submit.addEventListener("click", (event) => {
  event.preventDefault();
  const userNameValue = userName.value;
  const passWordValue = passWord.value;
  if (userName.Value == null && passWord.Value == null) {
    emptyField.classList.remove("hidden");
  } else if (
    userNameValue !== database[0].username ||
    passWordValue !== database[0].password
  ) {
    emptyField.classList.add("hidden");
    error.classList.remove("hidden");
  } else {
    error.classList.add("text-green-700");
    error.innerHTML = "welcome :)";
  }
});
