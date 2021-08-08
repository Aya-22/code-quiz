// Set timer to 60 seconds / with 5 questions asked

// when start button is pressed the timer starts counting down.
// the first questions appears with abcd options
// when answered is questioned page moves on to the next questions
// if answere is correct continue with time
// if answer is incorrect deduct 10 seconds from timer
// if the questions are answered with in the time frame then a You Won sign appears
// then the page takes you to the high scores section where your initial is input
// player is givent he option to clear scores or play again
var startBtn = document.querySelector('.start-button');
var initialed = document.querySelector('#initialed-score');
var timeEl = document.querySelector('.questionTimer');
var startPage = document.querySelector('.intro');
var questionContainer = document.querySelector('.questionContainer'); 
// var question = document.querySelector('.questionContainer');

var myQuestions = [
    {
        questionText: "An object can be all of the following except:",
        answers: {
            a:'string',
            b:'boolean',
            c:'number',
            d:'floater',
        },
        correctAnswer: 'd'      
},
    {
        questionText: "What is used after a console log?",
        answers: {
            a: 'nothing',
            b: '{}',
            c: '()',
            d: '{}',
        },
        correctAnswer: 'c'      
},
    {
        questionText: "Which method adds values to the end of an array?",
        answers: {
            a: '.unshift',
            b: '.pop',
            c: '.splic',
            d: '.push',
        },
        correctAnswer: 'd'      
},
    {
        questionText: "What is the 2nd statement of the for loop mean? for(var i=0; i < length; i++)",
        answers: {
            a: 'defines the condition for executing the code block.',
            b: 'is executed before the execution of the code block.',
            c: 'loops can execute a block code a number of times.',
            d: 'is executed after the code block has been executed.',
        },
        correctAnswer: 'd'      
}
//     {
//         question5: "An object can be all of the following except:",
//         answers: {
//             a: 'string',
//             b: 'boolean',
//             c: 'number',
//             d: 'floater',
//         },
//         correctAnswer: 'd'      
// },
];

// myQuestions[0].questionText,
// myQuestions[0].answers,
// myQuestions[0].correctAnswer,



console.log(myQuestions);

// var runningQuestionIndex = 0;

var questionTimer;
var quiz = true;
var timer;
var timerCount;
var score;
// var isWin = true;
var answer = [];

// the first questions appears with abcd options
function renderQuestion () {
    console.log("place on page");
    // question replaces the intro when start button clicked
    var questionText = myQuestions[0].questionText; // unable to drill down on answers
    var answerOpt = myQuestions[0].answers; // unable to drill down on answers

    // load questions and answers into .questionContainer.
    // var questionContainer = document.querySelector('.questionContainer');  
    // questions will show as h2
    var qText = document.createElement("h2");
    qText.textContent = questionText;
    console.log(qText)
    // answers will be shown as ordered list
    var answerList = document.createElement("ol");
    

    // for loop for answers for each question
    for(var i=0; i < answerOpt.length; i++) {
        console.log("in answer loop");
        // answers will be in an empty array
        var answerItems = [];
        // answers in my array will be listed under ordered list
        var answerReq = document.createElement("li");
        // answerItem will show my correctAnswer
        answerItems = answerOpt
        // myQuestions[0].correctAnswer;
        var i = correctAnswer
        answerItems.textContent = i;
        answerList.append(i);
        console.log(answerList);
        answerItems.push(answerOpt);
    }
    questionContainer.append(qText, answerList, answerReq);
    // startQuiz()
}

function startQuiz () {
    score = 0
    // timerCount = 55;
    // renderQuestion();
    startTimer()
}

function startTimer() {
    console.log("timer")
    // test timer
    timerCount = 55;
    timer = setInterval(function() {
    timerCount--;
    // timerEl.textContent = timerCount;
    if (timerCount >= 0) {
      
      if (quiz && timerCount > 0) {
        clearInterval(timerCount);
        correctAnswer();
      }
    }
    
    if (timerCount === 0) {
        clearInterval(timerCount)
        wrongAnswer();
        
    }
}, 1000);
}

// function checkAnswer () {

// }


function correctAnswer () {
    question.textContent = "Correct"
    score++
    timerCount
    
}

function wrongAnswer () {
    question.textContent = "Wrong"
    score--
    timerCount-10
}

function setAnswers() {
    initialed.textContent = score;
    localStorage.setItem("Inital", score);
  }

function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
      winCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
  }


startBtn.addEventListener('click', function() {
    startPage.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    renderQuestion();
});