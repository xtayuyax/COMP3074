const exercise1 = require("./exercise1/exercise1");
const exercise2 = require("./exercise2/exercise2");
const exercise3 = require("./exercise3/exercise3");
const exercise4 = require("./exercise4/exercise4");
const exercise5 = require("./exercise5/exercise5");
const exercise6 = require("./exercise6/car");

const colors = ["red", "green", "blue"];
const values = [1, 60, 34, 30, 20, 5];
const array = [1, 2, 3, 4];

console.log("Exercise 1:");
exercise1.greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);

console.log("\nExercise 2:");
console.log(exercise2.capitalize("fooBar"));
console.log(exercise2.capitalize("nodeJs"));

console.log("\nExercise 3:");
console.log(exercise3.capitalizedColors(colors));

console.log("\nExercise 4:");
console.log(exercise4.filterLessThan20(values));

console.log("\nExercise 5:");
console.log(exercise5.calculateSum(array));
console.log(exercise5.calculateProduct(array));

//I couldn't export exercise 6
