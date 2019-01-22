const exercise1 = require("./exercise1/exercise1");
const exercise2 = require("./exercise2/exercise2");

//Exercise1
exercise1.compareNumToTen(15)
.then(result => console.log(result))
.catch(error => console.log(error)) 

exercise1.compareNumToTen(8)
.then(result => console.log(result + "\n"))
.catch(error => console.log(error + "\n")) 

//Exercise2
const arrayOfNames = ["jaxx", "tiny", "clay"]
const mixedArray = ["anarcy", 99, true];

exercise2.makeUpperCase(arrayOfNames)
.then(exercise2.sortWords)
.then(result => console.log(result))
.catch(error => console.log(error))

exercise2.makeUpperCase(mixedArray)
.then(exercise2.sortWords)
.then(result => console.log(result))
.catch(error => console.log(error))