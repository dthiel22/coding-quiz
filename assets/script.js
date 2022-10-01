console.log("linked");

//each questionArr holds each question. answersArr hold all the answers
var questionArr = ["1+1=?"];
var answersArr0 = ["1","2","3","4"];
var answersArr1 = [];
var answersArr2 = [];
var answersArr3 = [];

questionSelect = questionArr[0]
answerSelect1 = answersArr0[0]
answerSelect2 = answersArr0[1]
answerSelect3 = answersArr0[2]
answerSelect4 = answersArr0[3]

//vars to grab that specific class
var questionPlace = document.querySelector("#question-title")
var answerPlace1 = document.querySelector("#answer1")
var answerPlace2 = document.querySelector("#answer2")
var answerPlace3 = document.querySelector("#answer3")
var answerPlace4 = document.querySelector("#answer4")

// vars to grab select, change text to var value
questionPlace.textContent = questionSelect
answerPlace1.textContent = answerSelect1
answerPlace2.textContent = answerSelect2
answerPlace3.textContent = answerSelect3
answerPlace4.textContent = answerSelect4

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
