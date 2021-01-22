//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//a) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 =["hydrogen","H",1.000];
let element2 =["helium", "He",4.003];
let element26 =["iron", "Fe",55.85];

//b) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let arrayTable =[];
arrayTable.push(element1,element2,element26);
console.log(arrayTable);

//c) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(arrayTable[0]); //One index means row

console.log(arrayTable[2][0]); //Two indices means an item
console.log(arrayTable[0][2]);


//d) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(`The element 1 mass is ${arrayTable[0][2]}, the element 2 name is ${arrayTable[1][0]}, and the element 26 symbol is ${arrayTable[2][1]}.`);

//e) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let newArray =[58,62,35];
arrayTable[0].push(newArray);
console.log(arrayTable);
