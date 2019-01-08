var maxConsecutive = function(array, int){
    max = 0;
    for(var x = 0; x < array.length; x++){
        check = 0;
        for(var i = 0; i < int; i++){
            check += array[x + i]
        }
        if(check > max) max = check;
    }
    return max;
}

module.exports = {
    maxConsecutive: maxConsecutive
}