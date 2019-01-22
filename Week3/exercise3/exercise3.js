const promise = require("promise");

var promise1 = 101;
var promise2 = "follow the white";
var promise3 = new Promise(function(resolve, reject){
    resolve("rabbit.. neo");
})

Promise.all([promise1, promise2, promise3]).then(function(value){
    console.log(value);
})