const a = [11, 22, 33, 44];
a.splice(3, 0, true);
console.log(a);

const newArray = ["Ashish", "Ashu", "Kunal", "Kevin"];
newArray.splice(0, 0, "khushi");
newArray.splice(0, 0, "khushi");
console.log(newArray);

// Map

const newAry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let neOnj = newAry.map(function (newAry) {
  return newAry * 2;
});

console.log(neOnj);

const sqr = [2, 3, 4, 5, 6, 7];
const doble = sqr.map((num) => num * num);
console.log(doble);

const user = [
  { id: 1, name: "Ashish" },
  { id: 2, name: "Khushi" },
  { id: 3, name: "Kunal" },
  { id: 4, name: "Harsh" },
];

const names = user.map((user) => user.name);
console.log(names);

// array to string convert join methods
let newT = names.join(" ");
console.log(newT);

// filter ()

const filterUse = [23, 43, 35, 56, 34, 65, 23, 43];
let filterS = filterUse.filter((e) => e > 25);
console.log(filterS);

// all arrya valus sum
let sumPlus = filterUse.reduce((s, m) => s + m, 0);
console.log(sumPlus);

const ax = [12, 13, 14, 15, 12, 16, 17];
console.log(ax.indexOf(12));
console.log(ax.lastIndexOf(12));
console.log(ax.includes(12));
console.log(ax.join(" "));

// sub array using splic()
let smallArray = ax.splice(2, 4);
console.log(smallArray);

// using ... this is

let az = [1, 2, 3, 4, 5];
let bz = [6, 7, 8, 9];
let cz = [10, 11, 12];

let addArray = [...az, ...bz, ...cz];
console.log(addArray);

let ras = az.concat(az, bz);
console.log(ras);
