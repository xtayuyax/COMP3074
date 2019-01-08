var capitalize = function(string){
    array = string.split(" ");
    for(var x = 0; x < array.length; x ++){
        array[x] = array[x].charAt(0).toUpperCase() + array[x].substring(1);
    }

    return array.join(" ");
}

module.exports = {
    capitalize : capitalize
}