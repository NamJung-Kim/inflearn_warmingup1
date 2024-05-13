const startBtn = document.querySelector('#start-btn');
const questionListItem = document.querySelector('#question-container');
const questionElement = document.querySelector('#question');
const answerBtn = document.querySelector('#answer-buttons');
const nextBtn = document.querySelector('#next-btn');

function startGame() {
  console.log('start');
  startBtn.classList.add('hide');
  questionListItem.classList.remove('hide');
  nextQuestion();
}

function nextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(e => {
    const button = document.createElement('button');
    button.innerText = e.text;
    button.classList.add('btn');
    if (e.correct) {
      button.dataset.correct = e.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerBtn.appendChild(button);
  });
}

function resetState() {
  document.body.classList.remove('correct');
  document.body.classList.remove('wrong');
  nextBtn.classList.add('hide');
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selected = e.target;
  const correct = selected.dataset.correct;
  setStatusClass(document.body, correct)
  Array.from(answerBtn.children).forEach(btn => {
    setStatusClass(btn, btn.dataset.correct);
  });
  if (shuffledQuestions.length > currentIndex + 1) {
    nextBtn.classList.remove('hide');
  } else {
    startBtn.innerText = 'Restart';
    startBtn.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}
const questions = [
  {
    question: 'what is 2 + 2',
    answers: [
      {text: '4', correct: true},
      {text: '22', correct:false}
    ]
  },
  {
    question: 'what is 4 + 4',
    answers: [
    {text: '8', correct: true},
    {text: '10', correct:false}
    ]
  },
  {
    question: 'what is 6 + 6',
    answers: [
    {text: '12', correct: true},
    {text: '20', correct:false}
    ]
  },
];

let shuffledQuestions = [];
let currentIndex = 0;

console.log(shuffledQuestions);
for (let i=questions.length; i>0; i--) {
  const value = questions.splice(Math.floor(Math.random() * i), 1)[0];
  shuffledQuestions.push(value);
}

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
  currentIndex++;
  nextQuestion();
});
