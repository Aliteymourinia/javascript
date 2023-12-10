var list = ["tiger", "cat", "bird"];
list.pop("bird"); //  array method for remove selected element.
list.push("dog"); // array method for add new element to end of list.
// list.shift(); array method for remove first one element.
//list.unshift(); array method for undo deleted element.
var cars = ["ford", "bmw", "benz"];
var carsNewList = cars.concat(["tesla"]); // array method for add new element with create another list (Joins arrays and returns an array with the joined arrays).
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
