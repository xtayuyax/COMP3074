var checkAngle = function(int){
    if(int === 90) return "Right angle";
    else if(int === 180) return "Straight angle";
    else if(0 < int < 90) return "Acute angle";
    else if(int < 180) return "Obtuse Angle";
}

module.exports = {
    checkAngle: checkAngle
}