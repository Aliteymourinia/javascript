const fName = 1;
console.log(fName);
console.log(typeof fName);

let name = "ali";
let last = "teymouri";
let fullName = "hello " + name + " " + last;
console.log(fullName);

const Numb = 2;
const Number = 2;
const plus = Numb * Number;
console.log(plus);

const Test = "c++,java,css,html,";
console.log(Test.split(",,"));

// array:

const art = ["c", "html", "java", "c#"];
art[3] = "gira";
art[4] = "bootstrap";
art[0] = "phyton";
console.log(art);
console.log(art[4]);
console.log(art.length);

const arr = ["c", "html", "java", "c#"];
arr.unshift("tailwind");
arr.push("react");
console.log(arr[0]);
arr.pop(); //this is for remove the data in array

//object:

const student = {
  name: "ali",
  lastName: "teymourinia",
  id: 98129037,
  courses: ["html", "css", "javascript"], //define array into object
  address: { country: "Iran", city: "kermanshah" }, //define object into object
};
console.log(student);
console.log(student.name); // access to object properties.
console.log(student.address.city); // access to object properties.
console.log(student.courses[0]); // access to object properties index.

//function:

function info(name, lName) {
  //this is parameter
  console.log("hello " + name + lName);
}
info("ali", " tey"); //this is argument

//way 2:

const inform = (bye) => {
  console.log(bye);
};
inform("goodbye");

// math = (x, y) => {
//   return x * y;
// };
// let result = math(50, 2);
// console.log(result);

function math(x, y) {
  return x + y;
}
let resultt = math(2, 4);
console.log(resultt);

//array object:

const courses = [
  {
    id: 1,
    name: "html",
    time: 10,
    isCompleted: true,
  },
  {
    id: 2,
    name: "javascript",
    time: "null",
    isCompleted: false,
  },
];
console.log(courses);
console.log(courses[0]);

// console.log(courses[0])
// const result=JSON.stringify(courses);
// console.log(result) // this is for convert to JSON.

//loop:
for (let i = 0; i < 10; ) {
  i += 2;
  console.log(i);
}
//while => this is for loop

//high order array methods
//forEach , map , filter

//conditions:
//(if, else, else if, &&, ||)

const bbs = [(a = 5), (b = 5)];
if (a === b) {
  console.log("برابر");
}

const A = 8;
const B = 6;

if (A === B) {
  console.log("equal");
} else if (A < B) {
  console.log("not equal");
} else {
  console.log("true");
}
//ternary operator: meghdar dehi vriable bar asas shart.
const x = 8;
const color = x > 10 ? "red" : "blue";
console.log(color);

//switch:
const color2 = "red";
switch (color2) {
  case "red":
    console.log("its red");
    break;
  case "blue":
    console.log("its blue");
    break;
  default:
    console.log("color is not red or blue");
}
const car = "ford";
switch (car) {
  case "bmw":
    console.log("true");
    break;
  case "benz":
    console.log("false");
    break;
  default:
    console.log("this car is not bmw or benz");
}
//arrow function:
const addNum = (num1 = 5, num2 = 10) => {
  console.log(num1 + num2);
};
addNum(5, 10);

//fat arrow =>

//class:

class Person{
  constructor (firstName,lastName,birthDay){
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthDay=birthDay;
  }
}
