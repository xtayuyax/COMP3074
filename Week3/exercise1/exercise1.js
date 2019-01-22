const promise = require("promise");

let compareNumToTen = (number) => {
    let promise = new Promise(function(resolve, reject){
        if(number > 10){
            resolve(`${number} is greater than 10, success!`)
        }
        else{
            reject(`${number} is less than 10, error!`)
        }
    })

    return promise;
}

module.exports = {
    compareNumToTen: compareNumToTen
}