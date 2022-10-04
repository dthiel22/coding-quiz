console.log("linked");

//each questionArr holds each question. answersArr hold all the answers
var questionPack1 = ["A", "1", "2", "3", "4"];
var questionPack2 = ["B", "11", "22", "33", "44"];
var questionPack3 = ["C", "111", "222", "333", "444"];
var questionPack4 = ["D", "1111", "2222", "3333", "4444"];
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

//vars to grab that specific class
var questionPlace = document.querySelector("#question-title")
var answerHolder = document.querySelector('#answer-holder')
var answerPlace1 = document.querySelector("#answer1")
var answerPlace2 = document.querySelector("#answer2")
var answerPlace3 = document.querySelector("#answer3")
var answerPlace4 = document.querySelector("#answer4")
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
    timeLeft = 30;
    clearInterval(timer);
    form.style.display = "none"
    highScoreBtn.style.display = "none";
    startBtn.style.display = "none";
    // start countdown timer
    timer = setInterval(function () {
        timeLeft--;
        timeLeftSpan.textContent = timeLeft;
        // if time runs out end game as loss
        if (timeLeft === 0) {
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
answerHolder.addEventListener("click", function (event) {
    // once game is started, listen for mouseClick
    if (isPlaying) {
        var mouseClick = event.target.textContent;
        console.log(mouseClick)
        // if answer is correct, console.log you selected right
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
        if (questionSelect === questionPack1[0] && mouseClick.includes("1")) {
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
        }

        if (questionSelect === questionPack2[0] && mouseClick.includes("11")) {
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
        }

        if (questionSelect === questionPack3[0] && mouseClick.includes("111")) {
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
        }

        if (questionSelect === questionPack4[0] && mouseClick.includes("1111")) {
            clearInterval(timer)
            displayForm()
        }
    }
})

//function to show form + submit button
function displayForm() {
    isPlaying = false
    form.style.display = "inline-block";
    submitEl.style.display = "inline-block";
    questionPlace.textContent = "All done!"
    answerPlace1.textContent = "your final score is: " + timeLeft
    answerPlace2.textContent = ""
    answerPlace3.textContent = ""
    answerPlace4.textContent = ""
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
        initialsEl.remove('p')
        scoreEl.remove('p')
        for (let i = 0; i < retrieveScore.length; i++) {
            var input = retrieveScore[i]
            initialsEl = document.createElement("p")
            initialsEl.textContent = input["name"]
            highScores.append(initialsEl)
            scoreEl = document.createElement("p")
            scoreEl.textContent = input["userScore"]
            highScores.append(scoreEl)
            displayScoreBoard()
        }
    }

//view high score button
highScoreBtn.addEventListener("click", function () {
    if (JSON.parse(localStorage.getItem("score") === null)) {
        alert("you need to take the quiz atleast once to view highscores!")
    }else{
        displayScoreBoard()
        renderScores()
    }})

function displayScoreBoard() {
    questionHolder.style.display = "none";
    highScores.style.display = "block";
    highScoreBtn.style.display = "none";
    startBtn.style.display = "none";
    quizBtn.style.display = "block";
}

quizBtn.addEventListener("click", function () {
    displayQuiz()
})

function displayQuiz() {
    questionHolder.style.display = "block";
    highScores.style.display = "none";
    highScoreBtn.style.display = "block";
    startBtn.style.display = "inline-block";
    quizBtn.style.display = "none";
    form.style.display = "none";
    submitEl.style.display = "none"
}






//hit submit button and place object combineSubmit as a string for localStorage

//else answer is false, wrong! - 10 timer


//answer question > if statement > wrong -time > right correct > quesiton replaced
//no more questions > timer stop, value capture, logged as score > input name > save localStorage.setItem("score", score)
//highscore separate page
