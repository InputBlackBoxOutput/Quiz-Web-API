////////////////////////////////////////////////////////////////////////////////////
var questionBank;

/////////////////////////////////////////////////////////////////////////////////////
//Asynchronous JavaScript And XML (AJAX) request
function getQuestionsURL(numOfQuestions) {
	return 'https://opentdb.com/api.php?amount='+ numOfQuestions +'&category=18&type=multiple';
} 
	
function getQuestionBank() {
	var request = new XMLHttpRequest();
	request.open('GET', getQuestionsURL(5));

	request.onload = function() {
		questionBank1 = JSON.parse(ourRequest.responseText); 
	}

	request.send();
}

//Uncomment the following script tag in index.html before using the getTestQuestionBank() fxn
//<script src="TestQBank.js"></script>
function getTestQuestionBank() {
	questionBank = JSON.parse(testQuestions);
}

getTestQuestionBank();
console.log(questionBank);

/////////////////////////////////////////////////////////////////////////////////////
function greetUser(name) {
	document.getElementById('greet').innerText = 'Hello ' + name + '!';
}

function showQuestion() {
	document.getElementById('question').innerText = questionBank.results[0].question;
}

function showOptions() {
	document.getElementById('opt1').innerText = questionBank.results[0].correct_answer;
	document.getElementById('opt2').innerText = questionBank.results[0].incorrect_answers[0];
	document.getElementById('opt3').innerText = questionBank.results[0].incorrect_answers[1];
	document.getElementById('opt4').innerText = questionBank.results[0].incorrect_answers[2];
}

/////////////////////////////////////////////////////////////////////////////////////

greetUser('Rutuparn');
showQuestion();
showOptions();
getQuestionBank();