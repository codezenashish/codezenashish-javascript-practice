// var a = 10;
// let b = 20;
// const c = 30;
// d = 40; //global variable without var, let, or const

// function f1() {
//   var x = 10; // lockl varibale
//   let y = 20;
//   lx = 6;
// //   console.log(x, y);
// }
// f1();

let a = 12;
var b = 13;
const c = a + b;
// console.log(c);

// hosting

// console.log(myVar);
var myVar = "Ashish Chaudhary";

// console.log(myLet)
let myLet = "Honey Chaudhary";

// functions understanding hosting

function myFun1() {
  console.log(x);
  let x = "hello";
}
// myFun1();  // Cannot access 'x' before initialization

myFun1(); // done
function myFun1() {
  let x = "hello";
  console.log(x);
}

var myFun2 = function () {
  console.log(x);
  var x = "hello ashish";
};
myFun2();

var d = undefined

let s =
console.log(s)
