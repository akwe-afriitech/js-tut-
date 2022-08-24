// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let c =
//     (document.body.style.backgroundColor = `rgb(${random()},${random()},${random()})`);
//   console.log(c);
// });
// function random() {
//   return Math.floor(Math.random() * 255);
// }

let colors = [
  "black",
  "blue",
  "orange",
  "green",
  "pink",
  "purple",
  "white",
  "red",
];
let btn = document.querySelector(".btn");
let color = document.querySelector(".color");
let nnw = document.querySelector("span");
btn.addEventListener("click", function () {
  let random = randomColor();
  document.body.style.backgroundColor = colors[random];
  nnw.textContent = colors[random];
});
function randomColor() {
  return Math.floor(Math.random() * colors.length);
}
