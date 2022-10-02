console.log("linked");

//each questionArr holds each question. answersArr hold all the answers
var questionPack1 = ["A", "1","2","3","4"];
var questionPack2 = ["B","11","22","33","44"];
var questionPack3 = ["C", "111","222","333","444"];
var questionPack4 = ["D", "1111","2222","3333","4444"];
var combineSubmit = {
    name:"", time:""
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
var startBtn = document.querySelector("#start-game");
var timeLeftSpan = document.querySelector("#time-left");
var submitEl = document.querySelector("#submit")
var questionHolder = document.querySelector("#question-holder")
var highScores = document.querySelector("#high-scores")

// TODO: these second vars go into functoins to change vars to grab select, change text to var value
// questionPlace.textContent = questionSelect
// answerPlace1.textContent = answerSelect1
// answerPlace2.textContent = answerSelect2
// answerPlace3.textContent = answerSelect3
// answerPlace4.textContent = answerSelect4

//need a timer to display in the top right of the page
startBtn.addEventListener("click", function () {
    if (isPlaying) {
      return;
    }
    console.log("game started!");
    isPlaying = true;
    timeLeft = 30;
    clearInterval(timer);
    // start countdown timer
    timer = setInterval(function () {
      timeLeft--;
      timeLeftSpan.textContent = timeLeft;
      // if time runs out end game as loss
      if (timeLeft === 0) {
        clearInterval(timer);
        isPlaying = false;
      }
    }, 1000);
    // TODO: could make question object to pull arrays from??
    // question question
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
      var mouseClick = event.target.innerHTML;
      console.log(mouseClick);
      // if answer is correct, console.log you selected right
        if (questionSelect === questionPack1[0] && mouseClick.includes("answer3")) {
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
            answerPlace4.textContent = answerSelect4;}

        if (questionSelect === questionPack2[0] && mouseClick.includes("answer1")) {
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
            answerPlace4.textContent = answerSelect4;}

        if (questionSelect === questionPack3[0] && mouseClick.includes("answer2")) {
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
            answerPlace4.textContent = answerSelect4;}

        if (questionSelect === questionPack4[0] && mouseClick.includes("answer4")) {
            console.log("you won")
            clearInterval(timer);
            console.log(timeLeft)
            questionPlace.textContent = "All done!"
            answerPlace1.textContent = "your final score is"
            answerPlace2.textContent = timeLeft
            answerPlace3.textContent = ""
            answerPlace4.textContent = ""
            displayForm()
        }
    }
});

//function to show form + submit button
function displayForm (){
    form.style.display = "inline-block";
    submitEl.style.display= "inline-block";  	
}

//hit submit button
submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(form.value)
    console.log(timeLeft)
    combineSubmit = {
        name:form.value, 
        userScore:timeLeft
    };
    console.log(combineSubmit)
    console.log(combineSubmit.form)
    console.log(combineSubmit.score)
    localStorage.setItem("score", JSON.stringify(combineSubmit));
    renderScores()

    function renderScores() {
        var combineSubmitLog = JSON.parse(localStorage.getItem("score"));
        console.log(combineSubmitLog)
        displayHighscoreInitials ()

        function displayHighscoreInitials () {
            questionHolder.style.display = "none";
            highScores.style.display = "block"
            var newHighScoreInitials = document.createElement("h5")
            newHighScoreInitials.textContent = combineSubmitLog.name
            highScores.append(newHighScoreInitials)
            var newHighScore = document.createElement("h5")
            newHighScore.textContent = combineSubmitLog.userScore
            highScores.append(newHighScore)
        }
    }
})

//else answer is false, wrong! - 10 timer

//regardless...next question..replace question text + button (all veriables)


//answer question > if statement > wrong -time > right correct > quesiton replaced
//no more questions > timer stop, value capture, logged as score > input name > save localStorage.setItem("score", score)
//highscore separate page
