var readLineSync = require('readline-sync');
var userName = readLineSync.question('May i have your Name?')
var welcomeMessage = 'Welcome ' + userName + ' Lets see if you are a Naruto fan or not';
let score = 0;
console.log(welcomeMessage);

var Questions = [
  {
    question:'Who is Narutos dad?',
    answer:'Minato'
  },
  {
    question:'Who was the first hokage?',
    answer:'Hashirama'
  },
  {
    question:'Who was sasukes brother?',
    answer:'Itachi'
  },
  {
    question:'what was the name of the nine tail fox?',
    answer:'Kurama'
  },
  {
    question:'Who is the most useless character in Naruto?',
    answer:'Sakura'
  }
  
]

function play(question,answer){
  let userAnswer = readLineSync.question(question);
  if(answer===userAnswer){
    console.log('Corrrect!');
    score+=1;
  }
  else{
    console.log('Incorrect!');
  }
}

for(let i = 0;i<Questions.length;i++){
  let currentQuestion = Questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}


console.log('Total score:'+ score);