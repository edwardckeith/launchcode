// 1. Declare and assign the variables here:
const shuttleName = "Determination";
const shuttleSpeed = 17500;
const marsDist = 225000000;
const moonDist = 384400;
const milesKiloRate  = 0.621;



// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeed));
console.log(typeof(marsDist));
console.log(typeof(moonDist));
console.log(typeof(milesKiloRate));



// Code your solution to exercises 3 and 4 here:
let marsDistMiles = marsDist*milesKiloRate;
let marsTime = marsDistMiles/shuttleSpeed;
let daysTillMars = marsTime/24;

console.log(shuttleName + " will take " + daysTillMars + " days to reach mars.");


// Code your solution to exercise 5 here:
let moonDistMiles = moonDist*milesKiloRate;
let moonTime = moonDistMiles/shuttleSpeed;
let daysTillMoon = moonTime/24;

console.log(shuttleName + " will take " + daysTillMoon + " days to reach moon.");
