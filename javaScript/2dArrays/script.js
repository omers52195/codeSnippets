var quiz = [
    ['How many stats are on the United States flag?' , 50],
    ['How many championships do the Boston Celtics have?', 17],
    ['How many members are there in the United States Senate?' , 100]
];

var question;
var answer;
var userGuess;
var correctAnswers = 0;
var incorrectAnswers = 0;
var usersResults;

function print(result){ //Function to display users results
    document.write(result) //Display results on document
    alert(result) //Display results in alert box
}

for(var i = 0; i < quiz.length; i++) {
    question = quiz[i][0]; //Stores question from quiz array into question variable
    answer = quiz[i][1] //Stores answer from quiz array into answer variable
    userGuess = parseInt(prompt(question)); // Parses user string input from prompt and stores int value in userGuess variable

    if (answer === userGuess){ //Compares user guess to answer
        correctAnswers++; // Store total number of correct answers
    }
    else {
        incorrectAnswers++; //Store total number of incorrect answer
    }

}

usersResults = "You guessed " + correctAnswers + " question(s) right and " + incorrectAnswers + " question(s) wrong."; //Store users results in usersResults variable

print(usersResults); //Call print function to display users results
