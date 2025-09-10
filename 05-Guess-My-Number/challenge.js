'use strict';
//num between 1, 20
const secretnum = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
//funcion for click check event
let onClickCheck = function () {
    const guessnum = document.querySelector('.guess').value;
    let scr = document.querySelector('.score').textContent;
    if (scr == 1 && secretnum != guessnum) {
        document.querySelector('.message').textContent = "You lost the game";
        scr--;
    }

    else {
        if (!guessnum) {
            document.querySelector('.message').textContent = "No number, please Enter number";
            scr--;
        }
        else {
            if (guessnum > secretnum) {
                document.querySelector('.message').textContent = "High";
                scr--;
            }
            else if (guessnum < secretnum) {
                document.querySelector('.message').textContent = "Low";
                scr--;
            }
            else {
                document.querySelector('.message').textContent = "Correct answer";
                document.querySelector('body').style.backgroundColor = "#60b347";
                document.querySelector('.number').style.width = "30rem";
                if (highScore < Number(scr)) {
                    highScore = Number(scr);
                    document.querySelector('.highscore').textContent = highScore;
                }
            }
        }

    }
    document.querySelector('.score').textContent = scr;

}
//funcion for click again event
let onClickAgain = function () {
    const secretnum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('body').style.backgroundColor = "#222";
    // document.querySelector('.number').textContent= "?";
    document.querySelector('.score').textContent = "20";
    document.querySelector('.guess').value = "";
}

//action on click
document.querySelector('.check').addEventListener('click', onClickCheck);
document.querySelector('.again').addEventListener('click', onClickAgain);
