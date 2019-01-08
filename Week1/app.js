const exercise1 = require("./exercise1/exercise1");
const exercise2 = require("./exercise2/exercise2");
const exercise3 = require("./exercise3/exercise3");
const exercise4 = require("./exercise4/exercise4");
const exercise5 = require("./exercise5/exercise5");

console.log("Exercise 1: ");
console.log(exercise1.capitalize("the quick brown fox"));

console.log("\nExercise 2: ");
console.log(exercise2.findMax(1, 0, 1));
console.log(exercise2.findMax(0, -10, -20));
console.log(exercise2.findMax(1000, 510, 440));

console.log("\nExercise 3: ")
console.log(exercise3.lastThree("Python"));
console.log(exercise3.lastThree("Javascript"));
console.log(exercise3.lastThree("Hi"));

console.log("\nExercise 4: ");
console.log(exercise4.checkAngle(47));
console.log(exercise4.checkAngle(90));
console.log(exercise4.checkAngle(145));
console.log(exercise4.checkAngle(180));

console.log("\nExercise 5: ");
console.log(exercise5.maxConsecutive([1, 2, 3, 14, 5], 2));
console.log(exercise5.maxConsecutive([2, 3, 5, 1, 6], 3));
console.log(exercise5.maxConsecutive([9, 3, 5, 1, 7], 2));