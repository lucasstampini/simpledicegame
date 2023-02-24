var randomF = Math.floor(Math.random() * 6) + 1;
var randomS = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + randomF + ".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource1);

var randomImageSource2 = "images/dice" + randomS + ".png";
var image2 = document.querySelectorAll("img")[2];
image2.setAttribute("src", randomImageSource2);

if (randomF > randomS) {
    document.querySelector("h1").innerHTML = "Player 1 won !"
}
else if ( randomS > randomF) {
    document.querySelector("h1").innerHTML = "Player 2 won !"
}
else {
    document.querySelector("h1").innerHTML = "Draw !"
}