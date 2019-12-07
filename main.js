var score, currentPlayer, roundScore, check;
gameStart();

document.querySelector('.roll').addEventListener('click', function() {
  var randomNumber = Math.floor(Math.random() * 6 + 1);
  randomNumber !== check ? (check = randomNumber) : nextPlayer();

  console.log(randomNumber);
  console.log(check);

  var cubeDOM = document.querySelector('.cube');
  cubeDOM.style.display = 'block';
  cubeDOM.src = 'cube_' + randomNumber + '.png';

  if (randomNumber !== 1) {
    roundScore += randomNumber;
    document.querySelector('.current-' + currentPlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
});

document.querySelector('.hold').addEventListener('click', function() {
  score[currentPlayer] += roundScore;
  document.querySelector('.score-' + currentPlayer).textContent = score[currentPlayer];
  if (score[currentPlayer] >= 100) {
    document.getElementById('Player' + currentPlayer).textContent = 'WINNER!!!';
    document.querySelector('.cube').style.display = 'none';
  } else {
    nextPlayer();
  }
});

document.querySelector('.restart').addEventListener('click', gameStart);

function nextPlayer() {
  currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
  roundScore = 0;
  check = 0;

  document.querySelector('.current-0').textContent = 0;
  document.querySelector('.current-1').textContent = 0;

  document.querySelector('.player-0').classList.toggle('active');
  document.querySelector('.player-1').classList.toggle('active');
}

function gameStart() {
  score = [0, 0];
  roundScore = 0;
  currentPlayer = 0;
  check = 0;

  document.querySelector('.cube').style.display = 'none';

  document.querySelector('.current-0').textContent = 0;
  document.querySelector('.current-1').textContent = 0;
  document.querySelector('.score-0').textContent = 0;
  document.querySelector('.score-1').textContent = 0;
  document.getElementById('Player0').textContent = 'Player1';
  document.getElementById('Player1').textContent = 'Player2';
  document.querySelector('.player-0').classList.remove('active');
  document.querySelector('.player-0').classList.add('active');
  document.querySelector('.player-1').classList.remove('active');
}
