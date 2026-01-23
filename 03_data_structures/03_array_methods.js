let fruits = ["Apple", "Banana", "Gavava", "Gripes"];
let numbers = [1, 2, 3, 4, 5, 6];
let mixed = [1, "two", true, { name: "Ashish" }];

// this accese array valus index number
console.log(fruits[0]);
console.log(fruits[1]);

console.log(fruits[fruits.length - 1]);
// apple ki space pe lechi add
let addNewFruit = (fruits[0] = "Lichi");
console.log(addNewFruit);
console.log(fruits);

// push() add new element in last 
fruits.push('Ashish')
console.log(fruits)

// pop() remove frome last
fruits.pop()
console.log(fruits)

// unshift() add new elemnt frome start 
fruits.unshift('khushi')
console.log(fruits)

// shift() remove from start
fruits.shift()
console.log(fruits)

// for loop 

fruits.forEach(function(fruits,index){
    console.log(fruits,index)
})

