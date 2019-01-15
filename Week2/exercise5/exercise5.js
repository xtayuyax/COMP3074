let calculateSum = (array) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return array.reduce(reducer);
}

let calculateProduct = (array) => {
    const reducer = (accumulator, currentValue) => accumulator * currentValue;

    return array.reduce(reducer);
}

module.exports = {
    calculateProduct: calculateProduct,
    calculateSum: calculateSum
}