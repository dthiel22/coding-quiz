console.log("linked");

//each questionArr holds each question. answersArr hold all the answers
var questionArr = ["1+1=?"];
var answersArr0 = ["1","2","3","4"];
var answersArr1 = [];
var answersArr2 = [];
var answersArr3 = [];

//vars to grab that specific class
var startBtn = document.querySelector("#start-game");
var questionPlace = document.querySelector("#question-title")
var question1 = 0;

questionPlace.textContent = questionPicked
console.log(questionPlace)

//need a timer to display in the top right of the page
//original plan is to make divs called question#
//question appears in question holder + answers
//for loop counting through the arrays of questions to pull up
//if answer is true, correct
//else answer is false, wrong! - 10 timer
//regardless...next question..replace question text + button (all veriables)


//answer question > if statement > wrong -time > right correct > quesiton replaced
//no more questions > timer stop, value capture, logged as score > input name > save localStorage.setItem("score", score)
//highscore separate page
