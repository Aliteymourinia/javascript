const submit = document.querySelector("#submit");
const userName = document.querySelector("#userName");
const passWord = document.querySelector("#passWord");
const database = [
  {
    username: "ali",
    password: "pss9932",
  },
];
const newsFeed = [
  {
    username: "mohsen",
    timeline: "so tired from all that learning!",
  },
  {
    username: "sara",
    timeline: "Javascript is so cool!",
  },
];
submit.addEventListener("click", () => {
  if (userName === database[0].username && passWord === database[0].password) {
    prompt("welcome");
  } else {
  }
});
