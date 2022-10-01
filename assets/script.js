console.log("linked");

//each questionArr holds each question. answersArr hold all the answers
var questionArr = ["Q1","Q2","Q3","Q4"];
var answerArr0 = ["1","2","3","4"];
var answerArr1 = ["11","22","33","44"];
var answerArr2 = ["111","222","333","444"];
var answerArr3 = ["1111","2222","3333","4444"];

// fills in blanks for testing
// var questionSelect = questionArr[0]
// var answerSelect1 = answerArr0[0]
// var answerSelect2 = answerArr2[1]
// var answerSelect3 = answerArr3[2]
// var answerSelect4 = answerArr4[3]

var questionSelect = ""
var answerSelect1 = ""
var answerSelect2 = ""
var answerSelect3 = ""
var answerSelect4 = ""
var isPlaying = false;
var timer;

//vars to grab that specific class
var questionPlace = document.querySelector("#question-title")
var answerPlace1 = document.querySelector("#answer1")
var answerPlace2 = document.querySelector("#answer2")
var answerPlace3 = document.querySelector("#answer3")
var answerPlace4 = document.querySelector("#answer4")
var startBtn = document.querySelector("#start-game");
var timeLeftSpan = document.querySelector("#time-left");

// TODO: these second vars go into functoins to change vars to grab select, change text to var value
questionPlace.textContent = questionSelect
answerPlace1.textContent = answerSelect1
answerPlace2.textContent = answerSelect2
answerPlace3.textContent = answerSelect3
answerPlace4.textContent = answerSelect4

//need a timer to display in the top right of the page
startBtn.addEventListener("click", function () {
    if (isPlaying) {
      return;
    }
    console.log("game started!");
    isPlaying = true;
    timeLeft = 10;
    clearInterval(timer);
    // start countdown timer
    timer = setInterval(function () {
      timeLeft--;
      timeLeftSpan.textContent = timeLeft;
      // if time runs out end game as loss
      if (timeLeft === 0) {
        clearInterval(timer);
        isPlaying = false;
        losses++;
        localStorage.setItem("losses", losses);
        lossesSpan.textContent = losses;
      }
    }, 1000);
    // randomly select staring word
    questionSelect = questionArr[Math.floor(Math.random() * questionArr.length)];
    console.log(questionSelect);
    guesses = [];
    //diplay "_" for each letter in selected word
    for (let i = 0; i < questionSelect; i++) {
        answerSelect1 = answerArr0[i]
        answerSelect2 = answerArr1[i]
        answerSelect3 = answerArr2[i]
        answerSelect4 = answerArr3[i]
        console.log(answerArr0[i])
        console.log(answerArr1[i])
        console.log(answerArr2[i])
        console.log(answerArr3[i])
        questionPlace.textContent = questionSelect
        answerPlace1.textContent = answerSelect1
        answerPlace2.textContent = answerSelect2
        answerPlace3.textContent = answerSelect3
        answerPlace4.textContent = answerSelect4
    }
  });


//question appears in question holder + answers
    // for (let i = 0; i < questionArr.length; i++) {
    //     questionSelect = questionArr[i]
    //     answerSelect1 = answerArr0[i]
    //     answerSelect2 = answerArr1[i]
    //     answerSelect3 = answerArr2[i]
    //     answerSelect4 = answerArr3[i]
    //     console.log(questionArr[i])
    //     console.log(answerArr0[i])
    //     console.log(answerArr1[i])
    //     console.log(answerArr2[i])
    //     console.log(answerArr3[i])

    //     questionPlace.textContent = questionSelect
    //     answerPlace1.textContent = answerSelect1
    //     answerPlace2.textContent = answerSelect2
    //     answerPlace3.textContent = answerSelect3
    //     answerPlace4.textContent = answerSelect4
    // }
//for loop counting through the arrays of questions to pull up


//if answer is true, correct

//else answer is false, wrong! - 10 timer

//regardless...next question..replace question text + button (all veriables)


//answer question > if statement > wrong -time > right correct > quesiton replaced
//no more questions > timer stop, value capture, logged as score > input name > save localStorage.setItem("score", score)
//highscore separate page
