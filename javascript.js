//https://opentdb.com/api_config.php
//Open Trivia Database API
//https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple
//https://opentdb.com/api.php?amount=10&category=15&type=multiple
//https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple //Backup Plan

let scoreNum = document.querySelector("#score");
let ruleSet = document.querySelector("#rules");
let timerNum = document.querySelector("#timer");
let startGameButton = document.querySelector("#startGame");

let questions = document.querySelector("#question");
let answerOne = document.querySelector("#answer1");
let answerTwo = document.querySelector("#answer2");
let answerThree = document.querySelector("#answer3");
let answerFour = document.querySelector("#answer4");

startGameButton.addEventListener("click", grabQuiz);
answerOne.addEventListener("click", checkAnswerOne);
answerTwo.addEventListener("click", checkAnswerTwo);
answerThree.addEventListener("click", checkAnswerThree);
answerFour.addEventListener("click", checkAnswerFour);

let quizGrab =
  "https://opentdb.com/api.php?amount=30&category=15&type=multiple";

function grabQuiz() {
  fetch(quizGrab)
    .then(res => res.json())
    .then(quizData => {
      // console.log(quizData);
      makeQuiz(quizData);
    })
    .catch(err =>
      console.log("Error. This is not the quiz you are looking for.")
    );
}

let questionList = [];
let correctAnswer;

function makeQuiz(quizData) {
  // console.log(quizData)
  // console.log(quizData.incorrect_answers)
  for (i = 0; i < quizData.results.length; i++) {
    let quizList = quizData.results[i];
    questionList.push(quizList);
    questionList[i].answerList = [];
    questionList[i].answerList.push(quizList.correct_answer);
    questionList[i].incorrect_answers.forEach(quizItem => {
      quizList.answerList.push(quizItem)
    })
  setQuestion(questionList[i])
  }
  placeQuestions()
  timer()
}

function setQuestion(smileyFace) {
  smileyFace.answerList.sort(() => Math.random() - 0.5)
}

let score = 0
let turnCounter = 0
let x = 60

function timer() {setInterval(() => {
    if( x >= 0) {
      timerNum.innerText = x
      if ( x === 0) {
        endGame()
      } else { x-- }
    } 
  }, 1000)
}


function placeQuestions(move = 0) {
  correctAnswer = questionList[move].correct_answer
  questions.innerHTML = questionList[move].question
  answerOne.innerHTML = questionList[move].answerList[0]
  answerTwo.innerHTML = questionList[move].answerList[1]
  answerThree.innerHTML = questionList[move].answerList[2]
  answerFour.innerHTML = questionList[move].answerList[3]
}

function checkAnswerOne() {
  turnCounter ++  
  // console.log("checking...");
  if ( answerOne.innerText === correctAnswer) {
  answerOne.innerText = 'Correct!'
    score ++
    scoreNum.innerHTML = score
       if (turnCounter == 30) { endGame() }
  }
  else {
     answerOne.innerText = 'Incorrect'
       if (turnCounter == 30) { endGame() }
  }
setTimeout(placeQuestions(+turnCounter), 2000)
}

function checkAnswerTwo() {
  turnCounter ++
  // console.log("checking...");
  if ( answerTwo.innerText === correctAnswer) {
   answerTwo.innerText = 'Correct!'
    score ++
    scoreNum.innerHTML = score
    setTimeout(function(){}, 1000)
       if (turnCounter == 30) { endGame() }
  }
  else {
     answerTwo.innerText = 'Incorrect'
     setTimeout(function(){}, 1000)
       if (turnCounter == 30) { endGame() }
  }
setTimeout(placeQuestions(+turnCounter), 2000)
}

function checkAnswerThree() {
  turnCounter ++
  // console.log("checking...");
  if ( answerThree.innerText === correctAnswer) {
   answerThree.innerText = 'Correct!'
    score ++
    scoreNum.innerHTML = score
    setTimeout(function(){}, 1000)
       if (turnCounter == 30) { endGame() }
  }
  else {
     answerThree.innerText = 'Incorrect'
     setTimeout(function(){}, 1000)
       if (turnCounter == 30) { endGame() }
  }
setTimeout(placeQuestions(+turnCounter), 2000)
}

function checkAnswerFour() {
  turnCounter ++
  // console.log("checking...");
  if ( answerFour.innerText === correctAnswer) {
    answerFour.innerText = 'Correct!'
    score ++
    scoreNum.innerHTML = score
    setTimeout(function(){}, 1000)
       if (turnCounter == 30) { endGame() }
  }
  else {
      answerFour.innerText = 'Incorrect'
      setTimeout(function(){}, 1000)
       if (turnCounter == 30) { endGame() }
  }
setTimeout(placeQuestions(+turnCounter), 2000)
}

// console.log(quizList);
//analyze e.target.innerText // play with this tomorrow

function endGame() {
  if (score > 23) {alert('You got ' + scoreNum.innerText + ' ! Excellent job!') }
  else if (score > 15) {alert('You got ' + scoreNum.innerText + ' ! You did fantastic.')}
  else if (score > 7) {alert('You got ' + scoreNum.innerText + ' ! Good job.')}
  else {alert('You got ' + scoreNum.innerText + ' ! Try again...')}
  window.location.reload(false);
}