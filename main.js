document.addEventListener("DOMContentLoaded", function () {
 
    if (performance.navigation.type === 1) {
    localStorage.setItem("player1Score", 0);
    localStorage.setItem("player2Score", 0);
    
}





var player1Score = localStorage.getItem("player1Score") ? parseInt(localStorage.getItem("player1Score")) : 0;
var player2Score = localStorage.getItem("player2Score") ? parseInt(localStorage.getItem("player2Score")) : 0;


player1ScoreElement = document.getElementById("player1-score");
player2ScoreElement = document.getElementById("player2-score");

player1ScoreElement.textContent = player1Score;
player2ScoreElement.textContent = player2Score;











document.querySelector(".refresh").addEventListener("click", function () { 
    rollDice();
});


document.querySelector(".reset").addEventListener("click", function () {
    resetScores();
});


function rollDice() { 
    function randomNumber1() { 
    return Math.floor(Math.random() * 6) + 1;
}

function randomNumber2() { 
    return Math.floor(Math.random() * 6) + 1;
}

var num1 = randomNumber1();
var num2 = randomNumber2();


  






var image1 = document.querySelector(".one");
var image2 = document.querySelector(".two");


image1.src = `./images/image-${num1}.png`;
image2.src = `./images/image-${num2}.png`;



var resultText = document.querySelector(".result");

var victorySound = new Audio("./Sounds/victory.wav");
    var drawSound = new Audio("./Sounds/draw.wav");
    
    image1.classList.remove("winner-animation");
    image2.classList.remove("winner-animation");
    resultText.classList.remove("winnerText");

    // Force reflow/repaint to restart the animation
    void image1.offsetWidth; 
    void image2.offsetWidth;
    void resultText.offsetWidth;



if (num1 > num2) {
    player1Score++;
    resultText.innerHTML = "Player 1 wins!";
    image1.classList.add("winner-animation");
    resultText.classList.add("winnerText");
    victorySound.play();
}

else if (num1 === num2) {
    resultText.innerHTML = "Its a Draw!";
    resultText.classList.add("winnerText");
    image1.classList.add("winner-animation");
    image2.classList.add("winner-animation");
    drawSound.play();
    
}

else { 
    player2Score++;
    resultText.innerHTML = "Player 2 wins!";
    image2.classList.add("winner-animation");
    resultText.classList.add("winnerText");
    victorySound.play();
}



player1ScoreElement.textContent = player1Score;
player2ScoreElement.textContent = player2Score;


localStorage.setItem("player1Score", player1Score);
localStorage.setItem("player2Score", player2Score);

}

var resetSound = new Audio("./Sounds/reset.wav");

function resetScores() { 
    player1Score = 0;
    player2Score = 0;
    localStorage.setItem("player1Score", 0);
    localStorage.setItem("player2Score", 0);
    player1ScoreElement.textContent = player1Score;
    player2ScoreElement.textContent = player2Score;
    resetSound.play();
}


});





