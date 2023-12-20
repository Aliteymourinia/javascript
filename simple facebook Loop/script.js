const database = [
  {
    username: "bob",
    password: "pss",
  },
  {
    username: "sally",
    password: "secret",
  },
  {
    username: "zara",
    password: "777",
  },
];
const newsFeed = [
  {
    username: "bob",
    password: "so tired from all that learning!",
  },
  {
    username: "sally",
    password: "javascript is so cool!",
  },
  {
    username: "zara",
    password: "javascript is pretty cool!",
  },
];
// Checks that the user information is correct.
function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}
//this Applies if the user information is true and false:
function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("sorry wrong username and password!");
  }
}

// if (username === database[0].username && password === database[0].password) {
//   console.log(newsFeed);
// } else {
//   alert("sorry, wrong username and password");
// }

const userNamePrompt = prompt("whats your username?");
const passwordPrompt = prompt("whats your password?");

signIn(userNamePrompt, passwordPrompt);
