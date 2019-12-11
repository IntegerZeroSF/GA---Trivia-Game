// console.log("Let's Begin!");

//https://opentdb.com/api_config.php
//Open Trivia Database API
//https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple
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
  "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple";

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
  // correctAnswer = questionList[0].correct_answer
  }
  placeQuestions()
  //setTimeout 1000
  //timer()
}

function setQuestion(smileyFace) {
  smileyFace.answerList.sort(() => Math.random() - 0.5)
}

function placeQuestions() {
  correctAnswer = questionList[0].correct_answer
  questions.innerHTML = questionList[0].question
  answerOne.innerHTML = questionList[0].answerList[0]
  answerTwo.innerHTML = questionList[0].answerList[1]
  answerThree.innerHTML = questionList[0].answerList[2]
  answerFour.innerHTML = questionList[0].answerList[3]
}

// function timer() {
  //let timeLeft = 30
  //for(i = 30; i >= 0; i--) {
  //  setTimeout(tick, 1000)
  //  timeLeft = i
  //  if(i = 0){
  //    alert('Time's Up!)
  //    if (question = 10) {
  //        alert('You got ' + scoreNum + '.')
  //    } else {move on to next question}
  //  }
  //} 
// }

let score = 0
let turnCounter = 0

function checkAnswerOne() {
  turnCounter ++
  console.log("checking...");
  if ( answerOne.innerText === correctAnswer) {
   alert('Correct!')
    score ++
    scoreNum.innerHTML = score
       if (turnCounter = 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
  else {
     alert('Incorrect')
       if (turnCounter = 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
}

function checkAnswerTwo() {
  turnCounter ++  
  console.log("checking...");
  if ( answerTwo.innerText === correctAnswer) {
   alert('Correct!')
    score ++
    scoreNum.innerHTML = score
       if (turnCounter = 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
  else {
     alert('Incorrect')
       if (turnCounter = 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
}

function checkAnswerThree() {
  turnCounter ++
  console.log("checking...");
  if ( answerThree.innerText === correctAnswer) {
   alert('Correct!')
    score ++
    scoreNum.innerHTML = score
       if (turnCounter = 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
  else {
     alert('Incorrect')
       if (turnCounter = 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
}

function checkAnswerFour() {
  turnCounter ++
  console.log("checking...");
  if ( answerFour.innerText === correctAnswer) {
   alert('Correct!')
    score ++
    scoreNum.innerHTML = score
       if (turnCounter = 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
  else {
     alert('Incorrect')
       if (turnCounter = 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
}

// console.log(quizList);
