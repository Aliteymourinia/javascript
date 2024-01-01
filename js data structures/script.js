//Array
var list = ["tiger", "cat", "bird"];
list.pop("bird"); //  array method for remove selected value.
list.push("dog"); // array method for add new value to end of list.
// list.shift(); array method for remove first one value.
//list.unshift(); array method for undo deleted value.
var cars = ["ford", "bmw", "benz"];
var carsNewList = cars.concat(["tesla"]); // array method for add new value with create another list (Joins arrays and returns an array with the joined arrays).
console.log(cars, carsNewList);
var numbers = [1, 2, 3, 4];
var booleans = [true, false];
var functionList = [
  function apple() {
    // console.log(functionList);
  },
];
var colors = [["red", "blue", "green"]]; //we can have array in array.
var mixList = ["apple", 1, true, undefined, function () {}]; // we can have mix value in array.

//object:
const dog = {
  name: "jacky",
  age: 5,
  sound: function () {
    console.log("haw haw"); // we can add function to object.
  },
};
//objectArray:
const user2 = {
  name: "Bob",
  passWord: "secret2992",
  job: "teacher",
  hobby: ["soccer", "movie", "climbing", "race"], // we can add array in object.
};
// console.log(user2.name); // access them this way
// console.log(user2.hobby[0]);  access them this way

//ArrayObject:
const list2 = [
  {
    userName: "andy",
    passWord: "secret2552",
  },
  {
    userName: "jody",
    passWord: "pss96s69",
  },
];

//condition:

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "you may enter" : "access denied"; // this syntax is ternary operation use instead of if and else condition.
var automatedAnswer =
  "your account # is " + isUserValid(true) ? "1234" : "not available ";

// function condition() {
//   if (isUserValid(true)) {
//     return "you may enter";
//   } else {
//     return "access denied";
//   }
// }

//switch:

