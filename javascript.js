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
  //timer()
}

function setQuestion(smileyFace) {
  smileyFace.answerList.sort(() => Math.random() - 0.5)
}



function placeQuestions(move = 0) {
  correctAnswer = questionList[move].correct_answer
  //if ( turnCounter < 10) { questionList[0]++ }
  questions.innerHTML = questionList[move].question
  answerOne.innerHTML = questionList[move].answerList[0]
  answerTwo.innerHTML = questionList[move].answerList[1]
  answerThree.innerHTML = questionList[move].answerList[2]
  answerFour.innerHTML = questionList[move].answerList[3]
  // move = move++
}

function timer() {
  let x = 30
  timerNum.innerText = 30
  setInterval( function(){
    if( x > 0) {
      x--
      timerNum.innerText = x 
      // console.log(timerNum)
    }; }, 1000)
  }
  

// let move = 0
let score = 0
let turnCounter = 0

function checkAnswerOne() {
  turnCounter ++  
  console.log("checking...");
  if ( answerOne.innerText === correctAnswer) {
   alert('Correct!')
    score ++
    scoreNum.innerHTML = score
       if (turnCounter == 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
  else {
     alert('Incorrect')
       if (turnCounter == 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
placeQuestions(+turnCounter)
}

function checkAnswerTwo() {
  turnCounter ++
  console.log("checking...");
  if ( answerTwo.innerText === correctAnswer) {
   alert('Correct!')
    score ++
    scoreNum.innerHTML = score
       if (turnCounter == 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
  else {
     alert('Incorrect')
       if (turnCounter == 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
placeQuestions(+turnCounter)
}

function checkAnswerThree() {
  turnCounter ++
  console.log("checking...");
  if ( answerThree.innerText === correctAnswer) {
   alert('Correct!')
    score ++
    scoreNum.innerHTML = score
       if (turnCounter == 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
  else {
     alert('Incorrect')
       if (turnCounter == 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
placeQuestions(+turnCounter)
}

function checkAnswerFour() {
  turnCounter ++
  console.log("checking...");
  if ( answerFour.innerText === correctAnswer) {
   alert('Correct!')
    score ++
    scoreNum.innerHTML = score
       if (turnCounter == 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
  else {
     alert('Incorrect')
       if (turnCounter == 10) { alert('You got ' + scoreNum.innerText + '.') }
  }
placeQuestions(+turnCounter)
}

// console.log(quizList);
//analyze e.target.innerText
