var inquirer = require('inquirer');

var flashCards = require('./flashcard.js');

var questions = require('./questions.js').questions;


console.log(`

~~~~~~~~~~  Hello! Try and fill in the blanks...  ~~~~~~~~~~

`);



// Variable that holds the cloze-deleted questions list
var closeQuestions = [];

// Populate the cloze-deleted questions list
for (var i = 0; i < questions.length; i++) {
	var q = new flashCards.ClozeCard(questions[i].full, questions[i].cloze);
	closeQuestions.push(q);
}

// Initial variables
var currentQuestion = 0;
var answerRight = 0;
var answerWrong = 0;

// askQuestion func
function askQuestion() {
	inquirer.prompt([{
		type: 'input',
		message: closeQuestions[currentQuestion].partial + '\nAnswer: ',
		name: 'userGuess'
	}]).then(function (answers) {
		console.log('\n');

		// Check if the user has guessed correctly
		if (answers.userGuess.toLowerCase() === closeQuestions[currentQuestion].cloze.toLowerCase()) {
			console.log('Correct!');
			answerRight++;
		} else {
			console.log('Incorrect!');
			answerWrong++;
		}

		// Correct answer
		console.log(closeQuestions[currentQuestion].full);
		console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');

		// Iterate through questions
		if (currentQuestion < closeQuestions.length - 1) {
			currentQuestion++;
			askQuestion();
		} else {
			console.log('Game Over!');
			console.log('Correct Answers: ' + answerRight);
			console.log('Incorrect Answers: ' + answerWrong);

			console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');

			// Ask if user wants to play again
			inquirer.prompt([{
				type: 'confirm',
				message: 'Would you like to play again?',
				name: 'playAgain'
			}]).then(function (answers) {
				if (answers.playAgain) {
					// Reset the game
					currentQuestion = 0;
					answerRight = 0;
					answerWrong = 0;

					// ask questions func
					askQuestion();
				} else {
					// Exit the game
					console.log('Bye!');
				}
			})
		}
	})
}

// ask questions func
askQuestion();