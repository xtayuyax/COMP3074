const promise = require("promise");

const delayedMultiply = (number) => {
    setTimeout(() => {
        console.log("done!");
        return number * number;
    }, 500);
}

const delayedPromise = (number) => {
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("done!");
            resolve(number * number);
        }, 500);
    })
    
    return promise;
}

async function asyncPromise(number){
    let promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("done!");
            resolve(number * number);
        }, 1000);
    })

    return promise;
}

delayedMultiply(5);

delayedPromise(5)
.then(result => console.log(result))

asyncPromise(6)
.then(result => console.log(result));