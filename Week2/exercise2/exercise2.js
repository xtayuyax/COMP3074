let capitalize = (string) => {
    let [first,...rest] = string;
    first = first.toUpperCase();
    rest = rest.join("").toLowerCase();
    return first + rest;
}

module.exports = {
    capitalize: capitalize
}