const submit = document.querySelector("#submit");
const userName = document.querySelector("#userName");
const passWord = document.querySelector("#passWord");
const emptyField = document.querySelector("#emptyField");
const error = document.querySelector("#error");
database = [
  {
    username: "ali",
    password: "ss",
  },
];
submit.addEventListener("click", (event) => {
  event.preventDefault();
  const userNameValue = userName.value;
  const passWordValue = passWord.value;
  if (userNameValue == "" && passWordValue == "") {
    emptyField.classList.remove("hidden");
    emptyField.innerHTML = "Please fill the required fields !";
  } else if (
    userNameValue === database[0].username &&
    passWordValue === database[0].password
  ) {
    emptyField.classList.add("hidden");
    error.classList.remove("hidden");
    error.classList.add("text-green-500");
    error.innerHTML = "welcome :)";
  } else {
    emptyField.classList.add("hidden");
    error.classList.remove("hidden");
    error.innerHTML("wrong username or password");
  }
});
