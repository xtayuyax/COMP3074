var findMax = function(int1, int2, int3){
    if(int1 > int2){
        if(int1 >= int3) return int1;
        else return int3;
    }
    else{
        if(int2 >= int3) return int2;
        else return int3;
    }
}

module.exports = {
    findMax : findMax
}