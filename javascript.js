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
answerOne.addEventListener("click", checkAnswer);
answerTwo.addEventListener("click", checkAnswer);
answerThree.addEventListener("click", checkAnswer);
answerFour.addEventListener("click", checkAnswer);

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
  // correct_answer = quizList.correct_answer
  }
  placeQuestions()
  //setTimeout 1000
  //timer()
}

function setQuestion(smileyFace) {
  smileyFace.answerList.sort(() => Math.random() - 0.5)
}

function placeQuestions() {
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

function checkAnswer() {
  console.log("checking...");
  if ( 'userInput' === correctAnswer) {
   alert('Correct!')
  //  // change score here
  //      if (question = 10) {
  //          alert('You got ' + scoreNum + '.')
  //      } else {move on to next question}
  } else {
     alert('Incorrect')
  //      if (question = 10) {
  //          alert('You got ' + scoreNum + '.')
  //      } else {move on to next question}
  //}
  }
}

// console.log(quizList);
