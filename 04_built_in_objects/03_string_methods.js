// string methods

let userName = "Ashish Chaudhary";
let userEmail = "ixtashish@gamil.com";

console.log(userName + " " + userEmail);
console.log(`hello i am ${userName} and my email: ${userEmail}`);

// create a new string but type is object

let createStr = new String("Amita Varma");
console.log(typeof createStr);

console.log(createStr.toUpperCase());
console.log(createStr.toLocaleLowerCase());
console.log(createStr.charAt(0));
console.log(createStr.indexOf("h"));
console.log(createStr[0]);

// ? charAt()  mil nhi rha tha ye mujko

let str = "Lorem Ipsum is simply dummy text of the printing";
console.log(str.charAt("0"));
console.log(str.charAt("1"));
console.log(str.charAt("2"));
console.log(str.charAt("3"));
console.log(str.charAt("4"));

// ? chartCodeAt()

let chartIndex = "Ashish";
let chartNum = 4;
console.log(
  `this is the UTF-16: ${chartIndex.charCodeAt(
    chartNum
  )} and the is latter : ${chartIndex.charAt(chartNum)}`
);

// ? prototype .concat()

let conStr = "hello";
let conStr2 = "Ashish";
const cont = conStr.concat(" ", conStr2);
console.log(cont);

// endsWith() true /fals
const endStr = "Honey"; // back side text
console.log(endStr.endsWith("ney"));
console.log(endStr.endsWith("ey"));
console.log(endStr.endsWith("y"));

// ? includes()

let inString = "This is a book";
const word = "this";
console.log(
  `dose '${word}' exist in '${inString}'? ${inString.includes(word)} `
);

let netStr = "Ashish Choudhary"; // frint side text
console.log(netStr.substring(0, 3));
console.log(netStr.slice(-9));

//? trim()  front /end spacing removed

let trimStr = "Ashish";
console.log(trimStr.trim());

// ? split() useing for string to convert array
let holdStr = trimStr.split();
holdStr.push("hello");
console.log(holdStr);

//? convert arrya in using push() methods and add new texxt in arrya

let repStr = "Ashish";
let zx = repStr.replace("Ashish", "Honey");
console.log(zx);
