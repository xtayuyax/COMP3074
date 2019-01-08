var maxConsecutive = function(array, int){
    let max = 0;
    for(var x = 0; x < array.length - int + 1; x++){
        let check = 0;
        for(var i = 0; i < int; i++){
            check += array[x + i]
        }
        if(check > max || x === 0) max = check;
    }
    return max;
}

module.exports = {
    maxConsecutive: maxConsecutive
}