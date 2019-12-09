console.log("Let's Begin!");

//https://opentdb.com/api_config.php
//Open Trivia Database API
//https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple

let scoreNum = document.querySelector("#score");
let ruleSet = document.querySelector("#rules");
let timerNum = document.querySelector("#timer");
let startGameButton = document.querySelector("#startGame");
let quizList = [];
// let newArray = [];

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
      console.log(quizData);
      makeQuiz(quizData);
    })
    .catch(err =>
      console.log("Error. This is not the quiz you are looking for.")
    );
}

function makeQuiz(quizData) {
  for (i = 0; i < quizData.results.length; i++) {
    let question1 = quizData.results[0]
    quizList.push(quizData.results[i]);
    // quizList[i].newArray = [];
    // quziList[i].newArray.push(quizData.results[i].correct_answer);
    // for (i = 0; i < quizData.reuslts[i].incorrect_answerl; i++) {
    //   quziList[i].newArray.push(quizData.results[i].incorrect_answers);
    // }
  }
//   console.log(newArray);
  //somewhere math.random
  //apply quiestio to bock
  //apply anwsers to buttons
  //possibly something else start timer
  //end
  console.log(quizList);
}

// function timer() {

// }

function checkAnswer() {
  console.log("checking...");
  //checks
  // if correct_anwser is chosen +1 to score
  // else move to next question
  // if timer = 0
  // move to next question
  // if quiestion = 10
  // end
}
// makeQuiz()
