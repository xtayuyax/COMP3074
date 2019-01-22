const promise = require("promise");

async function timeOutPromise(number){
    let promise1 = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("first one is done!");
            resolve(number * number);
        }, 1000);
    });

    let promise2 = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("second one is done!");
            resolve(number + number);
        }, 500);
    });

    let result = [await promise1, await promise2];

    return result;   
}

timeOutPromise(5)
.then(result => console.log(result))