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
// var answerButton = document.querySelector('answerBtn')
var submitButton = document.querySelector('question');
// var question = document.querySelector('.questionContainer');

var myQuestions = [
    {
        questionText: "An object can be all of the following except:",
        answers: ['string', 'boolean', 'number', 'floater'],
        correctAnswer: 'floater'      
},
    {
        questionText: "What is used after a console log?",
        answers: ['nothing', '{}', '()', '{}',],
        correctAnswer: '()'      
},
    {
        questionText: "Which method adds values to the end of an array?",
        answers: ['.unshift', '.pop', '.splic','.push',],
        correctAnswer: '.push'      
},
    {
        questionText: "What is the 2nd statement of the for loop mean? for(var i=0; i < length; i++)",
        answers: ['defines the condition for executing the code block.', 'is executed before the execution of the code block.', 'loops can execute a block code a number of times.', 'is executed after the code block has been executed.',],
        correctAnswer: 'is executed after the code block has been executed.'      
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
var timerCount = 55;
var score;
// var isWin = true;
var answer = [];
var questionIndex = 0;

// the first questions appears with abcd options
function renderQuestion () {
    console.log("place on page");
    // question replaces the intro when start button clicked
    var questionText = myQuestions[questionIndex].questionText; // unable to drill down on answers
    var answerOpt = myQuestions[questionIndex].answers; // unable to drill down on answers

    // load questions and answers into .questionContainer.
    // var questionContainer = document.querySelector('.questionContainer');  
    // questions will show as h2
    var qText = document.createElement("h2");
    qText.textContent = questionText;
    console.log(qText)
    // answers will be shown as ordered list
    questionContainer.append(qText);
    var answerList = document.createElement("ol");
    

    // for loop for answers for each question
    for(var i=0; i < answerOpt.length; i++) {
        console.log("in answer loop");

        // answers in my array will be listed under ordered list
        var answerReq = document.createElement("li");
        // answerItem will show my correctAnswer
        answerReq.textContent = answerOpt[i];
        // myQuestions[0].correctAnswer;
        // var i = correctAnswer
        // answerItems.textContent = i;
        answerList.append(answerReq);
        // TODO: add button to each answer
        var answerButton = document.createElement('button');
        // answerButton.onclick = submit;
        answerReq.classList.add('onclick');
        
        console.log(answerList);

    }
    questionContainer.append(answerList);

    // TODO: add submit button at the buttom and link to correctAnswer function
    var submitBtn = document.createElement('button')
    submitBtn.textContent = "Submit";
    submitButton.appendChild(submitBtn);
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
    timer = setInterval(function() {
    timerCount--;
    timeEl.textContent = "Time: "+ timerCount;
    
    if (timerCount <= 0) {
        clearInterval(timer)
        // add call back for end game function see input where put initials
        
    }
}, 1000);
}

// function checkAnswer () {
// create variable for correct answer
var 

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
    startQuiz()
    renderQuestion();
    
});