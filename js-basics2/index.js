//revision of some basics1 principles

//functions
//let name1 = "nnw";
// function name3() {
//   let name2 = "empire";
//   return name2;
// }
// console.log(name1);
// console.log(name3());

// area of a cirle
// pi radius square
// let radius = ;
// let area = Math.PI * (radius * radius);
// console.log(area);

// let radius = 25;
// let height = 10;
// function areaOACircle(r) {
//   let area = Math.PI * (r * r);
//   return area;
// }
// let area = areaOACircle(radius);
// let height1 = areaOACircle(height);


//start of basics2

// string propertise
// let name1 = "NNW Empire ";
// console.log(name1.length);

// string  methods(some)
// let name1 = "NNW Empire ";
// console.log(name1);
// console.log(name1.toUpperCase());
// console.log(name1.toLowerCase());
// console.log(name1);

// template literals
// let name1 = ` nnw`;
// let sentence2 = "i'm a " + ' "student" ' + " of" + name1;
// let sentence = `i'm a "student" of ${name1} `;
// console.log(sentence);
// console.log(sentence2);

// Array properties
// let students = ["ovetta", "idriss", "ghislain", "cedric", 7, 4, 7, 7, 9, 3, 7];
// console.log(students[0]);
// console.log(students[students.length - 1]);
// console.log(students.length);
// let students = [
//   "ovetta",
//   "idriss",
//   "ghislain",
//   "cedric",
// ];

//using array propertise
// for (let i = 0; i <= students.length - 1; i++) {
//   console.log(students[i]);
// }


//array methods(some)
// let students = ["ovetta", "idriss", "ghislain", "cedric"];
// console.log(students);
// students.unshift("christell");
// console.log(students);
// students.push("stecy");
// console.log(students);
// students.pop();
// console.log(students);
// students.shift("christell");
// console.log(students);
// let number = [2, 5, 7, 8];

//exercise using array method and property
// let students = ["ovetta", "idriss", "ghislain", "cedric"];
// let companyName = " nnw";
// let newarr = [];
// console.log(newarr);
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
//   newarr.push(students[i] + companyName);
// }
// console.log(newarr);


// let sum = 0;
// let number = [2, 4, 6, 8, 10, 4];
// for (let i = 0; i < number.length; i++) {
//   sum += number[i];
// }
// console.log(sum);


//tenary operators
// let value;
// if (value) {
//   console.log(`value is true`);
// } else {
//   console.log(`value is false`);
// }
//from the logic above, using a tenary operator will be as follows
// value ? console.log(`value is true`) : console.log(`value is false`);


//callback and higher order functions
// let name1 = `students`;
// function greetmorning(name) {
//   console.log(`goodmorning ${name} welcome to ${companyName}`);
// }
// function greetafternoon(name) {
//   console.log(`goodafternoon ${name} welcome to ${companyName}`);
// }
// function greetafternoon(name, companyName) {
//   console.log(`goodafternoon ${name} welcome to ${companyName}`);
// }
// let companyName = `empire`;
// greetmorning(name1, companyName);
// greetafternoon(name1, companyName);

// let companyName = `empire`;
// let name1 = `students`;
// function greet(name, companyName, hour) {
//   console.log(`${hour()} ${name} welcome to ${companyName}`);
// }
// function morning() {
//   return `good morning `;
// }
// function afternoon() {
//   return `good afternoon `;
// }

// let hour = 14;
// if (hour > 0 && hour < 12) greet(name1, companyName, morning);
// else if (hour >= 12 && hour < 16) {
//   greet(name1, companyName, afternoon);
// }



//array iterators

// let students = ["ovetta", "idriss", "ghislain", "cedric"];
// function name1(params) {
//   console.log(`${params} nnw`);
// }
// students.forEach(name1);
// function n1(names) {
//   console.log(names.name.toUpperCase());
// }
// nnwpeople.forEach(n1);
// let names = nnwpeople.map(function (params) {
//   return params.name;
// });
// let age = nnwpeople.map(function (params) {
//   return params.age;
// });
// function name1(params) {
//   console.log(`${params} nnw `);
// }
// function oldage(params) {
//   console.log(params);
// }
// let names2 = names.forEach(name1);
// let age2 = age.forEach(oldage);
// console.log(`${names2} ${age2}`);

// foreach - returns an items of an array as an item

// map - returns an array with the same number of items as as it mother array

// filter - returns an array but it can manipulate the size of the array from its mother array

//let students = ["ovetta", "idriss", "ghislain", "cedric"];

//let nnwpeople = [
  //{ name: " Sir Nerry", position: "boss", height: 1.5, age: 29 },
//  { name: "Brenda", position: "manager", height: 1.6, age: 23 },
//  { name: "Ovetta", position: "student", height: 1.1, age: 12 },
 // { name: "Goddy", position: "designer", height: 1.5, age: 24 },
  //{ name: "Ghislain", position: "student", height: 1.6, age: 16 },
 // { name: "Idriss", position: "student", height: 1.7, age: 11 },
//];

//let adult = nnwpeople.filter(function (params) {
 // return params.age > 15;
//});
//let adults = adult.map(function (params) {
 // return params.name;
//});
//console.log(adults);

// let youngPeople = nnwpeople.filter(function (params) {
//   return params.position === "student";
// });

// let arr = youngPeople.map(function (people) {
//   return people.name;
// });

