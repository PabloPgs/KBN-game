let choice_s = document.querySelector('#choice_s');
let choice_p = document.querySelector('#choice_p');
let choice_r = document.querySelector('#choice_r');

let player_score = 0;
let computer_score = 0;

let player_span = document.querySelector('#player');
let computer_span = document.querySelector('#computer');

let player_result = document.querySelector('.player-result > img');
let computer_result = document.querySelector('.computer-result > img');

let winner = document.querySelector('.winner > h2');


function win() {
   player_score++;
   player_span.innerHTML = player_score;

   winner.innerHTML = 'Player Wins';
}

function lose() {
   computer_score++;
   computer_span.innerHTML = computer_score;

   winner.innerHTML = 'Computer Wins';
}

function draw() {
   winner.innerHTML = 'Draw!'
}

function changeImg(userChoice, computerChoice) {
   player_result.setAttribute('src', `./img/${userChoice}.png`);
   computer_result.setAttribute('src', `./img/${computerChoice}.png`)
}


function getComputerResult() {
   const results = ['Scissors', 'Paper', 'Rock'];
   const index = Math.floor(Math.random() * 3);
   return results[index];
}

function game(userChoice) {
   const computerChoice = getComputerResult();
   switch (userChoice + computerChoice) {
      case 'ScissorsPaper':
      case 'RockScissors':
      case 'PaperRock':
         win();
         break;
      case 'PaperScissors':
      case 'ScissorsRock':
      case 'RockPaper':
         lose();
         break;
      case 'PaperPaper':
      case 'ScissorsScissors':
      case 'RockRock':
         draw();
         break;
   }
   changeImg(userChoice, computerChoice);
}

function main() {

   choice_s.onclick = function () {
      game('Scissors');
   }

   choice_p.onclick = () => {
      game('Paper');
   }

   choice_r.onclick = () => {
      game('Rock');
   }

}

main();