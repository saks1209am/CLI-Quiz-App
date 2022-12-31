var readlineSync = require('readline-sync');
var username = readlineSync.question("What is your name? ");

console.log("Hi " + username + ", Welcome to our team.")
var score = 0;
//function to ask question answer

function letsPlay(question, answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer == answer){
    console.log("Right")
    score = score + 1;
  }
  else{
    console.log("Wrong");
    score = score - 1;
  }

  console.log("Score: " + score);
  console.log("------------------");
}

letsPlay("How many states are there in India? ", 28);

var questions = [{
    question: "What is the capital of India? ",
    answer: "New Delhi"
},{
    question: "Who was the winner of IPL 15? ",
    answer: "Gujarat Titans"
},{
    question: "Who is the captain of Gujarat Titans? ",
    answer: "Hardik Pandya"
},{
    question: "Where will the cricket ICC WorldCup 2023 be held? ",
    answer: "India"
}, {
    question: "Who is better: Hardik or KL? ",
    answer: "Hardik"
}]

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  letsPlay(currentQuestion.question, currentQuestion.answer);
}
                 

