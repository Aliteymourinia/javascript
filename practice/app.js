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
inform("bye");

// math = (x, y) => {
//   return x * y;
// };
// let result = math(50, 2);
// console.log(result);

function math(x, y) {
  return x + y;
}
let result = math(2, 4);
console.log(result);
