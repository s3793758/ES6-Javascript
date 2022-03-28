"use strict";

/*
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  // add this code so it will show name let that = this;
  return arr.map((x) => {
    //this will work with arrow function
    console.log(this.prefix + x);
  });
};


Prefixer.prototype.prefixArray = function (arr) {
  // add this code so it will show name let that = this;
  return arr.map(function (x) {
    //clg this.prefix undefine change to that
    console.log(that.prefix + x);
  });
};

let pre = new Prefixer("hello");
pre.prefixArray(["brad", "jeff"]);


Prefixer.prototype.prefixArray = function (arr) {
  return arr.map((x) => {
    console.log(this.prefix + x);
  });
};

let pre = new Prefixer("hello");
pre.prefixArray(["brad", "jeff"]);

*/

let add = (a, b) => {
  let sum = a + b;
  console.log(sum);
  return false;
};

add(2, 2);
