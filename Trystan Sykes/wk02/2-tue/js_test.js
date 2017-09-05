// js variables
var captain = "Jack";
var phrase = "Oh " + captain + ", my " + captain + "!";

// js conditionals
var souls = 3;
var lifeRafts = 2;
if (souls > lifeRafts) {
  console.log("SOS!")
}

// data structures - js arrays
var weekend = ['Saturday'];
weekend.push("Sunday");
weekend.unshift("Friday");
var day = weekend[1];
weekend.shift(weekend[0]);

// data structures - js objects
var brain = {
  energyLevel: 10
}
var energy = brain.energyLevel;
brain.dream = "electric sheep";

// js functions
var rectArea = function(length, width) {
  return length * width
}
var exampleRect = rectArea(3,4);
//The global variable "fruits" is modified because it is passed into the function addFruit. Objects passed into functions are modified outside the function, unlike primatives, where a copy is created for use inside the function.
