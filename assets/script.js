var questionPack1 = ["The _________ value stacks the flex items vertically (from top to bottom)", "column", "row", "wrap", "direction"];
var questionPack2 = ["The <a> tag defines a ________", "color", "image", "hyperlink", "class"];
var questionPack3 = ["A JavaScript _______ is a block of code designed to perform a particular task.", "object", "array", "classes", "function"];
var questionPack4 = ["An _______ is a special variable, which can hold more than one value", "number", "array", "value", "string"];
var combineSubmit = {
    name: "", time: ""
};

var questionSelect = ""
var answerSelect1 = ""
var answerSelect2 = ""
var answerSelect3 = ""
var answerSelect4 = ""
var isPlaying = false;
var timer;
var initials;
var questionPlace = document.querySelector("#question-title")
var answerHolder = document.querySelector('#answer-holder')
var answerPlace1 = document.querySelector("#answer1")
var answerPlace2 = document.querySelector("#answer2")
var answerPlace3 = document.querySelector("#answer3")
var answerPlace4 = document.querySelector("#answer4")
var btnEl = document.querySelectorAll("button")
var form = document.querySelector("#form")
var highScoreBtn = document.querySelector("#high-score-button");
var quizBtn = document.querySelector("#quiz-button");
var startBtn = document.querySelector("#start-game");
var timeLeftSpan = document.querySelector("#time-left");
var submitEl = document.querySelector("#submit")
var questionHolder = document.querySelector("#question-holder")
var highScores = document.querySelector("#high-scores")

var initialsEl = document.querySelector("#initials")
var scoreEl = document.querySelector("#score")

//need a timer to display in the top right of the page
startBtn.addEventListener("click", function () {
    if (isPlaying) {
        return;
    }
    isPlaying = true;
    timeLeft = 60;
    clearInterval(timer);
    answerHolder.style.display = "block"
    form.style.display = "none"
    highScoreBtn.style.display = "none";
    startBtn.style.display = "none";
    btnEl.display = "block"
    timer = setInterval(function () {
        timeLeft--;
        timeLeftSpan.textContent = timeLeft;
        if (timeLeft === 0 || timeLeft < 0) {
            clearInterval(timer);
            isPlaying = false;
            displayForm()
        }
    }, 1000);
    questionSelect = questionPack1[0]
    answerSelect1 = questionPack1[1]
    answerSelect2 = questionPack1[2]
    answerSelect3 = questionPack1[3]
    answerSelect4 = questionPack1[4]
    questionPlace.textContent = questionSelect
    answerPlace1.textContent = answerSelect1
    answerPlace2.textContent = answerSelect2
    answerPlace3.textContent = answerSelect3
    answerPlace4.textContent = answerSelect4
})

//click on question to see if "true"
answerPlace1.addEventListener("click", function (event) {
    var mouseClick = event.target.textContent;
    console.log(mouseClick)
    if (questionSelect === questionPack1[0] && mouseClick === "column") {
        console.log(mouseClick)
        console.log("you selected right")
        questionSelect = questionPack2[0]
        answerSelect1 = questionPack2[1]
        answerSelect2 = questionPack2[2]
        answerSelect3 = questionPack2[3]
        answerSelect4 = questionPack2[4]
        questionPlace.textContent = questionSelect
        answerPlace1.textContent = answerSelect1
        answerPlace2.textContent = answerSelect2
        answerPlace3.textContent = answerSelect3
        answerPlace4.textContent = answerSelect4;
    } else {
        timeLeft = timeLeft - 5
}})
    
answerPlace3.addEventListener("click", function (event) {
    var mouseClick = event.target.textContent;
    console.log(mouseClick)
    if (questionSelect === questionPack2[0] && mouseClick === "hyperlink") {
        console.log("you selected right")
        questionSelect = questionPack3[0]
        answerSelect1 = questionPack3[1]
        answerSelect2 = questionPack3[2]
        answerSelect3 = questionPack3[3]
        answerSelect4 = questionPack3[4]
        questionPlace.textContent = questionSelect
        answerPlace1.textContent = answerSelect1
        answerPlace2.textContent = answerSelect2
        answerPlace3.textContent = answerSelect3
        answerPlace4.textContent = answerSelect4;
    } else {
        timeLeft = timeLeft - 5
}})

answerPlace4.addEventListener("click", function (event) {
    var mouseClick = event.target.textContent;
    console.log(mouseClick)
    if (questionSelect === questionPack3[0] && mouseClick === "function") {
        console.log("you selected right")
        questionSelect = questionPack4[0]
        answerSelect1 = questionPack4[1]
        answerSelect2 = questionPack4[2]
        answerSelect3 = questionPack4[3]
        answerSelect4 = questionPack4[4]
        questionPlace.textContent = questionSelect
        answerPlace1.textContent = answerSelect1
        answerPlace2.textContent = answerSelect2
        answerPlace3.textContent = answerSelect3
        answerPlace4.textContent = answerSelect4;
    } else {
        timeLeft = timeLeft - 5
}})

answerPlace2.addEventListener("click", function (event) {
    var mouseClick = event.target.textContent;
    console.log(mouseClick)
    if (questionSelect === questionPack4[0] && mouseClick === "array") {
            clearInterval(timer)
            displayForm()
        } else {
            timeLeft = timeLeft - 5
}})

//function to show form + submit button
function displayForm() {
    isPlaying = false
    answerHolder.style.display = "none"
    questionPlace.textContent = "All done! Your Final Score is: " + timeLeft
    form.style.display = "block";
    submitEl.style.display = "block";
}

// updating the localStorage
submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (form.value !== "") {
        updateScore = JSON.parse(localStorage.getItem("score") || "[]")
        updateScore.push({ name: form.value, userScore: timeLeft })
        console.log(updateScore)
        localStorage.setItem("score", JSON.stringify(updateScore))
        renderScores()
    }
    else {
        alert("you need to enter in your initials")
    }
})

function renderScores() {
    var retrieveScore = JSON.parse(localStorage.getItem("score"))
    console.log(retrieveScore)
    console.log(JSON.stringify.retrieveScore)
    displayScoreBoard()
    for (let i = 0; i < retrieveScore.length; i++) {
        var input = retrieveScore[i]
        var initialsP = document.createElement("p")
        initialsP.textContent = input["name"]
        initialsEl.append(initialsP)
        var scoreP = document.createElement("p")
        scoreP.textContent = input["userScore"]
        scoreEl.append(scoreP)
    }
}

highScoreBtn.addEventListener("click", function () {
    if (JSON.parse(localStorage.getItem("score") === null)) {
        alert("you need to take the quiz atleast once to view highscores!")
    } else {
        renderScores()
    }
})

function displayScoreBoard() {
    questionHolder.style.display = "none";
    highScores.style.display = "flex";
    highScoreBtn.style.display = "none";
    startBtn.style.display = "none";
    quizBtn.style.display = "block";
}

quizBtn.addEventListener("click", function () {
    displayQuiz()
})

function displayQuiz() {
    window.location.reload();
    questionHolder.style.display = "block";
    highScores.style.display = "none";
    highScoreBtn.style.display = "block";
    startBtn.style.display = "inline-block";
    quizBtn.style.display = "none";
    form.style.display = "none";
    submitEl.style.display = "none"
}