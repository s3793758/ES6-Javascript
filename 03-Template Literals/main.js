"use strict";

let name = "john";

//function to make uppercase
function makeUppercase(word) {
  return word.toUpperCase();
}

//using function                              // combing data
let template = `<h1>${makeUppercase("Hello")}, ${name}</h1> 
<p>this is a template</p>`;

document.getElementById("template").innerHTML = template;
