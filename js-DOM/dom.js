//in this tutorial for DOM which means document object model,we are going to be looking how we can link and select our html elements and add our logic to them

//there are 5 ways with which we can select html elements

//the first is get element by id and the synthax is shown below
// document.getElementById("heading");

//the second is get element by classname and the synthax is shown below
//note: because your selector is getting back a bunch of elements , you will need to assign it to a variable inorder to creat a node list which is easy to handle
// let fruits = document.getElementsByClassName("fruits");

//the third is get element by tagname and the synthax is shown below, and note same notification as above too
//let tags = document.getElementsByTagName("h2");

//the fourth is by using query selector which returns one element and the synthax is shown below
//Document.querySelector(".h1");

//the last is by querry selector all and the synthax is shown below,and note same notification as above too
//let all = document.querySelectorAll(".fruits");

//after using any of this selectors from above, can now style or perfom what ever logic you wish with the variouse elements for example
// document.getElementById("heading").style.color = "red";
// let fruits = document.getElementsByClassName("fruits");
//fruits[2].style.color = "blue";
//let tags = document.getElementsByTagName("h2");
//tags[0].style.color="purple"
//Document.querySelector(".h1").style.color = "green";
//let all = document.querySelectorAll(".fruits");
//all[2].style.color = "pink";


/how to traverse a DOM tree 

//by using childNodes
// let ul = document.querySelector(".div");
// let children = ul.childNodes;
// console.log(childNodes);


//by using children
// let ul = document.querySelector(".div");
// let children = ul.children;
// console.log(children);
// children[0].style.color = "red";
// console.log(children[0].textContent);

//by using the parentElement method
// let listitem = document.querySelector(".fruits");
 //let listparent = listitem.parentElement;
 // console.log(listparent);
// let listparent =
//   listitem.parentElement.parentElement.parentElement.parentElement
//     .parentElement;
// console.log(listparent);

//by using nextSibling and previousSibling Method
// let listitem = document.querySelector(".fruits");
// let nextbro =
//   listitem.nextElementSibling.previousElementSibling.previousElementSibling;
// console.log(nextbro.textContent);

/*
childnodes(return all whites with your elements)
children(return just your elements)
parent element(checks the parennt of the current element and returs it)
previous sibling()
next sibling()
next element sibling()
 element sibling()
 */

//little example to combine some things we have learnt so far
// let listitem = document.querySelector(".div");
// let att = listitem.getAttribute("style");
// console.log(att);
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", function () {
//   listitem.setAttribute("class", "header");
// });
// let heading = document.querySelector(".heading2");
// heading.className = "colors ";
// heading.className = "header";
// let heading = document.querySelector(".heading2");
// heading.classList.add("colors");
// heading.classList.add("header");
// let checker = heading.classList.contains("header");
// console.log(checker);

//how to create a html element in js using append method
/*let div = document.querySelector(".parent");
let head = document.createElement("h1");
let text = document.createTextNode("this a heading created in js");

head.appendChild(text);
div.appendChild(head);*/
