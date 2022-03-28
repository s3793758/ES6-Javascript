"use strict";

/*
// global variable 
var a = "test1";
var b = "test2";
*/

/*
// declaring the var a twice with two values
function testVar() {
  var a = 30;
  if (true) {
    var a = 50;
    console.log(a);
  }
  console.log(a);
}
// both console log will init value to 50.
testVar();
*/

/*
//delcaring the let with 2 variables
function testLet() {
  let a = 30;
  if (true) {
    let a = 50;
    console.log(a);
  }
//console log will init 2 different values
  console.log(a);
}
*/

/*
//count i = 0 to 10
for (var i = 0; i < 10; i++) {
  //count 0 to 9 
    console.log(i);
}

// if var is used an clg is declared outside 10,
// if let is used clg declare error
console.log(i);
*/

const color = [];

color.push("red");
color.push("blue");

//error  cannont change
colors = "Green";

//will push the var into the array
console.log(color);
