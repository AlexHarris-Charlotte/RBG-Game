var colorArray = [];

const max = 255;
const min = 0;


for(var i = 0; i < 6; i++) {
    var r = Math.floor(Math.random() * (max - min) + min).toString();
    var g = Math.floor(Math.random() * (max - min) + min).toString();
    var b = Math.floor(Math.random() * (max - min) + min).toString();
    var randomRGB = "rgb(" + r + ", " + g + ", " + b + ")";
    colorArray.push(randomRGB);
}

const squares = document.querySelectorAll(".square");

for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colorArray[i];
}



console.log(colorArray);
