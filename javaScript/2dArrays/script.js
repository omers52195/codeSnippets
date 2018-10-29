var quiz = [
    ['How many stars are on the United States flag?' , 50],
    ['How many championships do the Boston Celtics have?', 17],
    ['How many members are there in the United States Senate?' , 100]
];

var question;
var answer;
var userGuess;
var correctAnswers = 0;
var incorrectAnswers = 0;
var correct = [];
var incorrect = [];
var usersResults;

function print(result){ //Function to display users results
    var displayDiv = document.getElementById('output');
    displayDiv.innerHTML = result;
    // document.write(result) //Display results on document
    // alert(result) //Display results in alert box
}

function htmlBuilder(arr){
    var listHTML = '<ul>';
    for (var i = 0; i < arr.length; i++) {
        listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ul>';
    return listHTML;

}

for(var i = 0; i < quiz.length; i++) {
    question = quiz[i][0]; //Stores question from quiz array into question variable
    answer = quiz[i][1] //Stores answer from quiz array into answer variable
    userGuess = parseInt(prompt(question)); // Parses user string input from prompt and stores int value in userGuess variable

    if (answer === userGuess){ //Compares user guess to answer
        correctAnswers++; //Store total number of correct answers
        correct.push(question); //Push and store all correct questions to correct array
    }
    else {
        incorrectAnswers++; //Store total number of incorrect answer
        incorrect.push(question); //Push and store all incorrect questions to incorrect array
    }

}

usersResults = "You got " + correctAnswers + " question(s) right and " + incorrectAnswers + " question(s) wrong."; //Store users results in usersResults variable
usersResults += "<h2> You got these questions correct:</h2>"
usersResults += htmlBuilder(correct);
usersResults += "<h2> You got these questions wrong:</h2>"
usersResults += htmlBuilder(incorrect);

print(usersResults); //Call print function to display users results
