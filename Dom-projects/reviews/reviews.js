let reviews = [
  {
    name: "Sir Neri",
    position: "designer",
    text: `sorem ipsum dolor sit amet consectetur adipisicing elit. Quo, minima!`,
    img: "./images/sirnerry.jpeg",
  },
  {
    name: "Brenda",
    position: "Manager",
    text: `borem ipsum dolor sit amet consectetur adipisicing elit. Quo, minima!`,
    img: "./images/brenda.jpeg",
  },
  {
    name: "Goddy",
    position: "designer",
    text: `porem ipsum dolor sit okkk consectetur adipisicing elit. Quo, minima!`,
    img: "./images/ngai godlove junior.jpg",
  },
  {
    name: "Franka",
    position: "Secretary",
    text: `forem okkkkk dolor sit amet consectetur adipisicing elit. Quo, minima!`,
    img: "./images/IMG-20220820-WA0010.jpg",
  },
  {
    name: "Zeus ",
    position: "cocoyam",
    text: `zorem ipsum dolor sit amet consectetur adipisicing elit. Quo, minima!`,
    img: "./images/brenda.jpeg",
  },
];
let btnleft = document.querySelector("#btnleft");
let btnright = document.querySelector("#btnright");
let name1 = document.querySelector("#name");
let position = document.querySelector("#position");
let text = document.querySelector("#text");
let img = document.getElementById("img");
let n = 0;
btnright.addEventListener("click", function () {
  for (let i = 0; i < 1; i++) {
    n = n + 1;
  }
  if (n > reviews.length - 1) {
    n = 0;
  }

  change(n);
});
btnleft.addEventListener("click", function () {
  for (let i = 0; i < 1; i++) {
    n = n - 1;
  }
  if (n < 0) {
    n = reviews.length - 1;
  }
  change(n);
});

function change(n) {
  name1.textContent = reviews[n].name;
  position.textContent = reviews[n].position;
  text.textContent = reviews[n].text;
  img.src = reviews[n].img;
}
