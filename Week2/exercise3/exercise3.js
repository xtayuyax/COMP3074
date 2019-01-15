const exercise2 = require("../exercise2/exercise2");

let capitalizedColors = (array) => {
    let result = array.map(colors => exercise2.capitalize(colors));
    return result;
}

module.exports = {
    capitalizedColors: capitalizedColors
}