let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//a) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split(" "));

//b) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join("_"));

//c) Do split or join change the original string/array?

//I can't, an error message pops up:D.

//d) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

let array = [];
array[0]=cargoHold;
console.log(array.sort());
