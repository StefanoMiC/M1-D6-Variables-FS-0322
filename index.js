// SINGLE LINE OF COMMENT

/* 
###
||| MULTI LINE COMMENT
---
...

PROGRAMMING KITCHEN - TIME TO BAKE OUR COOKIES!
(this is our very first JavaScript Program) */

// "Hey Epicoders! Welcome to our programming kitchen!";
let greetings = "Hey Epicoders! Welcome to our programming kitchen!"; //creating a variable with a String

let number; // creating a variable

number = 3; // assigning the number 3 as a value

let before = "BEFORE"; //creating a variable with a String

console.log(before + " " + number); // concatenating two strings + a number CONVERTED to String

console.log("This is the random value: " + (number + 9)); // the parehtesis are going to give a priority to the arithmetic operation

number = number + 10; // reassigning via the "=" symbol which is the assignment operator

console.log("AFTER", number);

// console.log(greetings);

let sugar; // taking the bowl from the cupboard and puttin a label "sugar" on it, but it's going to be empty still
sugar = 80;
let butter = 120;
let flour = 260;

console.log("\n------- Our ingredients are: ----------");
console.log("Sugar: " + sugar);
console.log("Butter: " + butter);
console.log("Flour: " + flour);

console.log("\nMix them together:");

let mediumBowlThatIJustTookOutFromTheCupboard; // too long but ok
let b; // not ok as a variable name!

let mediumBowl;
console.log("\nWe took out a medium Bowl, its content now is:", mediumBowl);

mediumBowl = "layer of butter";
console.log("\nWe added a layer of butter:", mediumBowl);
mediumBowl = null;
console.log("\nChange of mind: we clean the bowl out:", mediumBowl);

mediumBowl = butter + sugar;
console.log("\nWe mix together butter and sugar in the medium bowl:", mediumBowl);

// mediumBowl = mediumBowl + flour; // Equivalent of +=
mediumBowl += flour;
console.log("\nWe add flowr and mix everything heavily:", mediumBowl);

console.log("\n----------- Making some pasta -----------");
console.log("\n----------- Ingredients: -----------");
let water = 5000;
let salt = 30;
let spaghetti = 500;
let raguSauce = 300;
let parmesan = 100;
console.log("Water 5l", water);
console.log("Salt 30g", salt);
console.log("Spaghetti 500g", spaghetti);
console.log("Sauce Ragu della nonna 300g", raguSauce);
console.log("Enough Parmesan on top or the grandma will complain", parmesan);

console.log("\n----------- Cooking starts here: -----------");

let saltedWater = water + salt;
console.log("Waiting for the water to arrive to the boiling point, we previously added salt as well", saltedWater);

let droppedSpaghetti = saltedWater + spaghetti;
console.log("dropping spaghetti in:", droppedSpaghetti);

let absorbtionRate = 1.8;
let absorbedSalt = 5;

let cookedSpaghettiWeight = spaghetti * absorbtionRate;
let absorbedWater = cookedSpaghettiWeight - spaghetti;
console.log("the absorbsion amount is:", absorbedWater);

let remainingWater = water - absorbedWater;
let remainingSalt = salt - absorbedSalt;
console.log("remaining water", remainingWater);

let drainedSpaghetti = droppedSpaghetti - remainingWater - remainingSalt;
console.log("drained pasta:", drainedSpaghetti);

let dishOfRaguPasta = drainedSpaghetti + raguSauce + parmesan;
console.log("Here's your pasta!", dishOfRaguPasta);
