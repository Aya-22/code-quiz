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
// var initialed = document.querySelector('#initialed-score');
var timeEl = document.querySelector('.timer');
var question = document.querySelector('.questionContainer');

var myQuestions = [
    {
        questionText: "An object can be all of the following except:",
        answers: {
            a:'string',
            b:'boolean',
            c:'number',
            d:'floater'
        },
        correctAnswer1: 'd'      
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
},
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
var timerCount;
var score;
var answer = [];

function renderQuestion (myQuestions) {
    console.log("place on page");
    var questionText = myQuestions.questionText;
    var answers = myQuestions.answers;
    // load questions and answers into .questionContainer.
    var questionContainer = document.querySelector('.questionContainer').innerHTML;
    
    var qText = document.createElement("h2").innerHTML;
    qText.textContent = myQuestions.questionText;
    var answerList = document.createElement("ol");
    var answerItems = [];

    for(var i=0; i < myQuestions.answers.length; i++) {
        console.log("in answer loop");
        var answerItem = document.createElement("li");
        answerItem = myQuestions.index = i
        answerItem.textContent = correctAnswer [i];
        answerlist.append(answerItem);
        console.log(answerlist);
        answerItem.push(answerItem);
    }
    questionContainer.append(qText, answerList);
}

function startQuiz () {
    score = 0
    timerCount = 55;
    renderQuestion(myQuestions);

    // if (myQuestions.correctAnswer1)

    // renderQuestions()
    // startTimer()
}

function startTimer() {
    console.log(timer)
    timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
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







startBtn.addEventListener('click', startQuiz);