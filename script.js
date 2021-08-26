"use strict";
a = 10;
console.log(a);
console.log(-4 / 0); //nolga bo'lish mumkin emas
console.log("husniddin" * 10); // NaN-Not a Number -Son emas degani

const number = 8; // data-type =number
const firtName = "husniddin"; // data type string
const bool = true; // date type boolean

console.log(b); //null

let lastName;
console.log(lastName); //undefined

// obeyekt bilan ishlash
const person = {
  firsName: "Husniddin",
  lastName: "Temirov",
  age: 32,
  job: "Teacher",
  isMaried: true,
};
console.log(person.age);

const arr = ["black", "yellow", "green"]; //massiv tip
console.log(arr[2]);

("use strict");
const firtsName = "husniddin";
const lastName = "Temirov";
const age = 32;
console.log(
  `Mening ismim ${firtsName} va familiyam ${lastName} yoshim ${age} da`
);

//Js da operatorlar
const x = 20,
  y = 15;
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
const num = 4 + "salom";
console.log(typeof num);
const a = 10,
  b = 3;
console.log("qoldiq=", a % b);
const isChecked = true,
  isClose = false;
console.log(isChecked || isClose);
