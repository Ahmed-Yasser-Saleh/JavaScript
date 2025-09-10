'use strict';
const diceEl = document.querySelector('.dice')
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let playing, crScore, activeplayer, tScore;
const newgame = function () {
    playing = true;
    crScore = 0;
    tScore = [0, 0];
    activeplayer = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
}

newgame();
function toggle() {
    player0El.classList.toggle('player--active'); //if there is this class remove it else add it
    player1El.classList.toggle('player--active');
}
const disDice = function () {
    if (playing) {
        let rdDice = Math.trunc((Math.random() * 6) + 1);
        if (rdDice !== 1) {
            crScore += rdDice;
            diceEl.classList.remove('hidden');
            diceEl.src = `dice-${rdDice}.png`;
            document.getElementById(`current--${activeplayer}`).textContent = crScore;
        }
        else {
            diceEl.src = `dice-${rdDice}.png`;
            crScore = 0;
            document.getElementById(`current--${activeplayer}`).textContent = crScore;
            activeplayer = activeplayer === 0 ? 1 : 0;
            toggle();
        }
    }
}

btnRoll.addEventListener('click', disDice)
btnHold.addEventListener('click', () => {
    if (playing) {
        tScore[activeplayer] += crScore;
        document.getElementById(`score--${activeplayer}`).textContent = tScore[activeplayer];
        if (tScore[activeplayer] >= 20) {
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
            playing = false;
        }
        crScore = 0;
        document.getElementById(`current--${activeplayer}`).textContent = crScore;
        activeplayer = activeplayer === 0 ? 1 : 0;
        toggle();
    }
})

btnNew.addEventListener('click', newgame)