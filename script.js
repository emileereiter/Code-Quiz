var questions = [
    {
        title: "What is the Capital of Maine?",
        choices: ["Topeka", "Augusta", "Pierre", "Springfield"],
        answer: "Agusta"
    },
    {
        title: "What is the capital of South Carolina?",
        choices: ["Columbia", "St. Paul", "Denver", "Atlanta"],
        answer: "Columbia"
    },
    {
        title: "What is the capital of Iowa?",
        choices: ["Nashville", "Tallahassee", "Charleston", "Des Moines"],
        answer: "Des Moines"
    },
    {
        title: "What is the capital of New Mexico?",
        choices: ["Salt Lake City", "Dover", "Santa Fe", "Little Rock"],
        answer: "Santa Fe"
    },
    {
        title: "What is the capital of Mississippi?",
        choices: ["Boise", "Jackson", "Olympia", "Lincoln"],
        answer: "Jackson"
    };

// needs a call to action to "start quiz" (alert and button)


var questionQuiz = document.getElementById("quiz");
var questionSubmit = document.getElementById("results");
var score = document.getElementById("score");
var timer = document.getElementById("timer");

var startQuiz = document.getElementById("start");
 

// variableName.addEventListener
// variableName.addEventListener(what we listen to, what we do)
var score = 0;
var secondsLeft = 75;
var currentQuestionIndex = 0;
// whatTheUserClicked
function goToNextQuestion(whatTheUserClicked) {
  var correctText = questions[currentQuestionIndex].answer;

  if (whatTheUserClicked === correctText) {
    console.log("Correct!");
    score++;
  }
  else {
    console.log("That is not correct.");
  }
  currentQuestionIndex++;
  getNewQuestion(currentQuestionIndex);


}

function answerClickSetUp() {
  var a = document.getElementById("answer1");
  var b = document.getElementById("answer2");
  var c = document.getElementById("answer3");
  var d = document.getElementById("answer4");

  a.addEventListener("click", function () { goToNextQuestion(a.innerText); });
  b.addEventListener("click", function () { goToNextQuestion(b.innerText); });
  c.addEventListener("click", function () { goToNextQuestion(c.innerText); });
  d.addEventListener("click", function () { goToNextQuestion(d.innerText); });
}
answerClickSetUp();

startQuiz.addEventListener("click", function () {
  getNewQuestion(currentQuestionIndex);
});

var currentQuestion;
function getNewQuestion(questionIndex) {
  var question = questions[questionIndex];
  currentQuestion = question;
  var title = question.title;
  // console.log(title);
  var questionEl = document.getElementById("question");
  questionEl.innerText = title;

 var = questions [ {
    title: "What is the Capital of Maine?",
    choices: ["Topeka", "Augusta", "Pierre", "Springfield"],
    answer: "Agusta" ]
},

  var choice1 = question.choices[0];
  var answerEl1 = document.getElementById("answer1");
  answerEl1.innerText = choice1;
  // console.log(choice1);

  var choice2 = question.choices[1];
  var answerEl2 = document.getElementById("answer2");
  answerEl2.innerText = choice2;
  // console.log(choice2);

  var choice3 = question.choices[2];
  var answerEl3 = document.getElementById("answer3");
  answerEl3.innerText = choice3;
  // console.log(choice3);

  var choice4 = question.choices[3];
  var answerEl4 = document.getElementById("answer4");
  answerEl4.innerText = choice4;
  // console.log(choice4);


  document.getElementById("question").innerText = title;
  document.getElementById("answer1").innerText = choice1;
  document.getElementById("answer2").innerText = choice2;
  document.getElementById("answer3").innerText = choice3;
  document.getElementById("answer4").innerText = choice4;


}
//submitAnswer.addEventListener("click", quizTime);
function scoreKeeper(){
  document.getElementById("score").innerHTML = count++;

}
scoreKeeper();



// I tried pressing the 'start button but it will not click