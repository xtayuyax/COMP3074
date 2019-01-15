let greeter = (myArray, counter) => {

    let greetText = "Hello";

    for(let item of myArray){
        console.log(`${greetText} ${item}`);
    }
}

module.exports = {
    greeter: greeter
}