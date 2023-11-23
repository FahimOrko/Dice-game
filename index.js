
var randomDice1 = Math.floor(Math.random() * 6 + 1 );

var randomDice2 = Math.floor(Math.random() * 6 + 1 );

document.querySelector(".img1").setAttribute("src", ("./images/dice" + randomDice1 + ".png"));

document.querySelector(".img2").setAttribute("src", ("./images/dice" + randomDice2 + ".png"));

if (randomDice1 == randomDice2){
    document.querySelector("h1").innerText = "It's a Draw. \n Refresh to try again";
} 
else if (randomDice1 > randomDice2){
    document.querySelector("h1").innerText = "Player 1 wins. \n Refresh to try again";
}
else{
    document.querySelector("h1").innerText = "Player 2 wins. \n Refresh to try again";
}