const submit = document.querySelector("#submit");
const userName = document.querySelector("#userName");
const passWord = document.querySelector("#passWord");
const message = document.querySelector("#message");
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
  if (
    userNameValue === database[0].username &&
    passWordValue === database[0].password
  ) {
    message.innerHTML = "welcome :)";
    message.classList.add("text-green-500");
  } else {
    message.innerHTML = "wrong username or password !";
    message.classList.add("text-red-500");
    message.classList.remove("text-green-500");
  }
});
