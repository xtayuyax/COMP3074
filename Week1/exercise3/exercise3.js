var lastThree = function(string){
    if(string.length <= 3) return string;
    return string.slice(-3) + string.slice(0, -3);
}

module.exports = {
    lastThree : lastThree
}