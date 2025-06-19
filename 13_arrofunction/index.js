// Error handling in JavaScript

// function declaration
// f1();
function f1() {
  console.log("f1 called");
}

// function expression

// f2();
var f2 = function () {
  console.log("f2 called");
};

// Arrow function
// f3();
var f3 = () => {
  console.log("f3 called");
};
f3();

const f4 = (userName) => {
  console.log("f4 called with userName: " + userName);
};
// f4("Ashish choudhary");


const f5 = (userName) => {
  return "f5 called with userName: " + userName;
};
// console.log(f5());
// console.log(f5('Ashish choudhary'));


function sayHello(fun){
  fun("Ashish choudhary");
}

sayHello((userName) => {return "Hello " + userName;});
sayHello((userName) => {
  console.log("Hello " + userName);
});
