// Declare and initialize the 12 variables here:
const input = require("readline-sync");
let info= input.question("How many astronauts are there?");

let date = "Monday 2019-03-18";
let time= "10:05:34 AM";
let astronautStatus= "ready";
let averageAstronautMassKg= 80.7;
let crewMassKg = info*averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg+fuelMassKg+shuttleMassKg;
let fuelTempCelsius= -225;
let fuelLevel= "100%";
let weatherStatus= "clear";

let dash="--------------------";

console.log(dash);
console.log("LC04 - LAUNCH CHECKLIST");
console.log(dash);
console.log("Date:"+date);
console.log(`Time:${time}\n`);
console.log(dash);
console.log(`>ASTRONAUT INFO`);
console.log(dash)
console.log("count:"+info);
console.log(`status:${astronautStatus}\n`);
console.log(dash)
console.log(">FUEL DATA");
console.log(dash);
console.log(`Fuel temp celsius:${fuelTempCelsius}`);
console.log(`Fuel level:${fuelLevel}\n`);
console.log(dash);
console.log("MASS DATA");
console.log(dash);
console.log(`Crew Mass:${crewMassKg}`);
console.log(`Fuel Mass:${fuelMassKg}`);
console.log(`Shuttle Mass:${shuttleMassKg}`);
console.log(`Total Mass:${totalMassKg}\n`);
console.log(dash);
console.log(">FLIGHT PLAN");
console.log(dash)
console.log(`*weather:${weatherStatus}\n`);
console.log(dash);
console.log(">OVERALL STATUS");
console.log(dash);
console.log(`Clear for takeoff: YES`);




// Write code to generate the LC04 report here:



// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.
