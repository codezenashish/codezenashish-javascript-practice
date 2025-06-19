//? functions

// ? this is function declaration

function f1() {
  // console.log('Hello')
}
f1(); // calling the function

// ? this is function expression
let f2 = function () {
  // console.log('hello2')
};
f2(); // calling the function

// ? this is arrow function (ES6)
let f3 = () => {
  // console.log('hello3')
};


f4(function () {
  console.log('hello');
});

function f4(callback) {
  console.log('hello4');
  callback();
}



// ? this is an IIFE (Immediately Invoked Function Expression)
(function () {
  console.log('I am an IIFE');
})();

// ? arrow function 

let f5 = () => {
    console.log('hello5');
}
f5()

