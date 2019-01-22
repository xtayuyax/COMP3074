const promise = require("promise");

let check = (array) => {
    return array.every(function(type){ return typeof type === "string"})
}

let capitalizeArray = (array) =>{
    let result = array.map(string => string.toUpperCase());
    return result;
}

let makeUpperCase = (array) => {
    let promise = new Promise(function(resolve, reject){
        if(check(array) === false){
            reject("Error: Not all items in the array are strings!");
        }

        resolve(capitalizeArray(array));
    })

    return promise;
}

let sortWords = (array) => {
    let promise = new Promise(function(resolve, reject){
        resolve(array.sort());
    })
    
    return promise
}

module.exports = {
    makeUpperCase: makeUpperCase,
    sortWords: sortWords
}