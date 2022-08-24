let colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
let btn = document.querySelector(".btn");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
  let randomColor = "#";

  for (let i = 0; i < 6; i++) {
    randomColor = randomColor + colors[random()];
  }
  document.body.style.backgroundColor = randomColor;
  h1.textContent = randomColor;
});
function random() {
  return Math.floor(Math.random() * colors.length);
}
