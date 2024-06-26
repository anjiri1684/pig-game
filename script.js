// Selecting elements by id
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Selecting elements by class
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //Generating a random dice
  const dice = Math.floor(Math.random() * 6) + 1;
  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./images/dice-${dice}.png`;

  //check rolled 1
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  //1.add current score to active player's score
  scores[activePlayer] += currentScore;
  // scores[1] += currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //2. check if players score is >= 100 finish the game
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`player--${activePlayer}`)
      .classList.add('.player--winner');
  }
  //switch to the next player
  switchPlayer();
});
