let h1 = document.querySelector(".h1");
let incre = document.querySelector("#incre");
let reset = document.querySelector("#reset");
let decre = document.querySelector("#decre");

console.log();
let num = 0;

incre.addEventListener("click", function () {
  for (let i = 0; i < 1; i++) {
    num = num + 1;
  }

  h1.textContent = num;
});
decre.addEventListener("click", function () {
  for (let i = 0; i < 1; i++) {
    num = num - 1;
  }

  h1.textContent = num;
});
reset.addEventListener("click", function () {
  num = 0;
  h1.textContent = num;
});
if (num > 0) {
  document.querySelector(".h1").style.color = "green";
}
if (num < 0) {
  h1.style.color = "red";
}
