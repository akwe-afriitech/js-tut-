//in this tutorial,all block of codes have been commented out and abve it, you will see their name title 
//to use each code,just uncomment the code and refresh your browser to see its functinality
//ps. uncomment only the neccessary lines of code at the moment you need witout its heading to avoid errors like var names clashing or undefine variables
//all topices are seperated with an empty line

//3 main methods to call your js to your html webpage
//calling to the console
// alert("hello students of NNW");

//types of data types in js
// numbers, String, null, boolean, undefined;

//how to declare and define variables 
// let welcome = "welcome to ";
// let name1 = "NNW Empire";
// let num1 = 10;
// let num2 = 20;

//creating an array 
// let students = ["Christelle", "Brandon", "Ovetta", 6, 3, 7];
// let beststudent = "the best of nnw is ";
// console.log(beststudent + students[0]);


//writing functions 
// function greetings() {
//   console.log("good morning nnw students");
// }

//writing functions with parameters in js
// let lenght = 5;
// function areaofsqr(params) {
//   let area = params * params;
//   console.log(area);
// }
// areaofsqr(lenght);


//a function to convert from celsius to kelvin
// let celsius;
// celsius = 20;

// function convert(params) {
//   let conversion = params * 273;
//   console.log(
//     "our coversion of " +
//       params +
//       "degree celsius is " +
//       conversion +
//       " degrees kelvin"
//   );
// }
// convert(celsius);


//a function for the quadratic formula
// let a = 2,
//   b = 9,
//   c = -5;
// function quadraticneg(x, y, z) {
//   let root1 = y * y - 4 * x * z;
//   let root2 = -y - Math.sqrt(root1);
//   let root3 = root2 / (2 * x);
//   return root3;
// }
// function quadraticpos(x, y, z) {
//   let root1 = y * y - 4 * x * z;
//   let root2 = -y + Math.sqrt(root1);
//   let root3 = root2 / (2 * x);
//   return root3;
// }
// let negvalue = quadraticneg(a, b, c);
// let posvalue = quadraticpos(a, b, c);
// console.log([negvalue, posvalue]);

// let a = 2,
//   b = 9,
//   c = -5;
// function quadrticneg(i, j, k) {
//   let root1 = j * j - 4 * i * k;
//   let sec2 = -j - Math.sqrt(root1);
//   let sec3 = sec2 / (2 * a);
//   return sec3;
// }
// function quadrticpos(i, j, k) {
//   let root1 = j * j - 4 * i * k;
//   let sec2 = -j + Math.sqrt(root1);
//   let sec3 = sec2 / (2 * a);
//   return sec3;
// }

// let negvalue = quadrticneg(a, b, c);
// let posvalue = quadrticpos(a, b, c);
// console.log([negvalue, posvalue]);
// let radius = 5;
// let height = 10;

//function to calculate area of a cylinder
// function area(r, h) {
//   let formula = 2 * Math.PI * r * h;
//   return formula;
// }
// let areaOfACylinder = area(radius, height);
// console.log(areaOfACylinder);

// let base = 10;
// let height = 20;
// function area(b, h) {
//   let formula = (b + b) * (h / 2);
//   return formula;
// }
// let a = area(base, height);
// console.log(a);

// area of a trapezium
//  base plus base times height divided by two

// operators = + - * / == ++ -- < > <= >= != ===

// let marks = 20;

// if (marks == 0) {
//   console.log("you have failed terribly");
// } else if (marks >= 1 && marks <= 9) {
//   console.log("you have failed");
// } else if (marks == 10) {
//   console.log("you have abraham");
// } else if (marks >= 11 && marks <= 15) {
//   console.log("keep up you are getting there");
// } else if (marks <= 20) {
//   console.log("you are intelligent");
// }
// let month;
// month = "february";

// if (
//   month == "january" ||
//   month == "march" ||
//   month == "may" ||
//   month == "july" ||
//   month == "august" ||
//   month == "december" ||
//   month == "october"
// ) {
//   console.log("this month has 31 day");
// } else if (
//   month == "september" ||
//   month == "april" ||
//   month == "june" ||
//   month == "november"
// ) {
//   console.log("this month has 30 days");
// } else if (month == "february") {
//   console.log("this month has 28 or 29 days");
// }

// let year = 2100;
// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log(year + " is a leap year.");
//     } else {
//       console.log(year + " is not a leap year");
//     }
//   } else {
//     console.log(year + " is a leap year");
//   }
// } else {
//   console.log(year + " is not a leap year");
// }

// //program for a random number in a dice
// let dice = Math.ceil(Math.random() * 6);
// let dice2 = Math.floor(Math.random() * (10 - 5)) + 5;
// console.log(dice);
// console.log(dice2);

// let g = 4;
// let i = 0;
// let p = 2;
// while (i < g) {
//   r = p * p * i;
//   i++;
// }

// console.log(r);

// // program to print the items of an array
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text = text + cars[i] + "\n";
// }
// console.log(text);

// // program to print the powers of 2
// let i = 1,
//   n = 0;

// do {
//   console.log(i);

//   i = i * 2;
//   n = n + 1;
// } while (i < 10);

// factorial program
// let f = 1,
//   n = 4;

// for (i = 1; i <= n; i++) {
//   f = f * i;
// }
// console.log(f);

// let year;
// year = 2100;

// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log("this year is a leap year");
//     } else {
//       console.log("this year is not a leap year");
//     }
//   } else {
//     console.log("this year is a leap year");
//   }
//   // console.log("this year is a leap year");
// } else {
//   console.log("this year is not a leap year");
// }

// let amount = 10;
// while (amount > 0) {
//   console.log("you still have money ");
//   amount = amount - 1;
// }

// let student = 10;
// do {
//   student++;
//   console.log("you have " + student + " at the moment");
// } while (student <= 5);
// console.log("you can come to class now");

// for (let amount = 10; amount > 10; amount++) {
//   console.log("you have this amount " + amount + " of money at the moment");
// }

// 1,2,3,4
// factorial of 4 = 1*1)*2*3*4=24
//factorial =n(n-1).....n
// const x = 5;
// let n = 1;
// for (let i = 1; i <= x; i++) {
//   n = n * i;
//   console.log(n);
// }

let student = ["Ghislain", "Ovetta", "Idriss", "Brandon"];
// for (let i = 0; i < student.length; i++) {
//   console.log(student[i]);
// }
let i = 0;
// while (i < student.length) {
//   console.log(student[i]);
//   i++;
// }
do {
  console.log(student[i]);
  i++;
} while (i < student.length);
