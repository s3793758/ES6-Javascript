"use strict";

function* g1() {
  console.log("HELLO");
  yield "Yield 1 ran..";
  console.log("world");
  yield " yield 2 ran..";
  return "retuned...";
}

var g = g1();

// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next());

for (let val of g) {
  console.log(val);
}
