// ? toFixd()

function tofix(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(tofix(12.222222));
console.log(tofix(0.0));

//? number to string
let num = new Number(1024);
let str = num.toString();
console.log(typeof num);
console.log(str);
console.log(typeof str);

//? .toPrecison

function pera(y) {
  return Number.parseFloat(y).toPrecision(4);
}

console.log(pera(1111));
console.log(pera(111));
console.log(pera(11));
console.log(pera(1));

let num1 = new Number(100);
let someChange = num1.toString().length;
console.log(someChange);

let bigNum = 10000000;
let bigSomeChnage = bigNum.toLocaleString("en-IN");
console.log(bigSomeChnage);

//?  Math Object Methods

console.log(Math.abs(-20));
console.log(Math.round(121.12222));
console.log(Math.ceil(1.1));
console.log(Math.floor(1.9));

console.log(Math.max(1, 2, 3, 4, 10, 50, 70, 100));
console.log(Math.min(1, 2, 3, 4, 10, 50, 70, 100));

// this formula for rendom number 10 to 20 bitween
let max = 20;
let min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
