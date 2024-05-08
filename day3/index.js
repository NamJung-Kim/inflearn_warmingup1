let playerScoreTag = document.querySelector('.playerScore');
let computerScoreTag = document.querySelector('.computerScore');
let count = document.querySelector('.count');
const scissorsBtn = document.querySelector('#scissors');
const rocksBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
let resultTag = document.querySelector('#result');


let computerChoice = 'scissors';
const changeComputerChoice = () => {
  if (computerChoice === 'scissors') {
    computerChoice = 'rock';
  } else if (computerChoice === 'rock') {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
};

let intervalId = setInterval(changeComputerChoice, 50);

const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

let clickable = true;
let computerScore = 0;
let playerScore = 0;
let rspCount = 10;

const clickButton = () => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;

    const myChoice = event.target.textContent === '바위' 
    ? 'rock' 
    : event.target.textContent === '가위'
    ? 'scissors'
    : 'paper'
    const myScore = scoreTable[myChoice];
    const computerscore = scoreTable[computerChoice];
    const diff = myScore - computerscore;
  
    if ([2,-1].includes(diff)) {
      playerScore += 1;
      rspCount -= 1;
      playerScoreTag.textContent = `${playerScore}`;
  } else if ([-2,1].includes(diff)) {
      computerScore += 1;
      rspCount -= 1;
      computerScoreTag.textContent = `${computerScore}`;
  } else if (diff === 0) {
      rspCount -= 1;
    } 
    count.textContent = `${rspCount}`;
    if (rspCount === 0) {
      if (playerScore > computerScore) {
      resultTag.textContent = '승리하셨습니다.'
    } else if (playerScore < computerScore) {
      resultTag.textContent = '패배하셨습니다';
    } else {
      resultTag.textContent = '무승부입니다.';
    }
      return;
    }
    
  setTimeout(() => {
    clickable = true;
    intervalId = setInterval(changeComputerChoice);
    });
  };
};

scissorsBtn.addEventListener('click', clickButton);
rocksBtn.addEventListener('click', clickButton);
paper.addEventListener('click', clickButton);
