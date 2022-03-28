"use strict";

/*
//params
function greet($greeting = "hello world!") {
  console.log($greeting);
}

//can also display in param
greet();
*/

//spread operator

let args1 = [1, 2, 3];
let args2 = [4, 5, 6];

function test() {
  console.log(args1 + "," + args2);
}

test.apply(null, args1);
test(...args1, ...args2);
