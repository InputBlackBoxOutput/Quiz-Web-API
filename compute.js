////////////////////////////////////////////////////////////////////////////////////
var questionBank;

/////////////////////////////////////////////////////////////////////////////////////
//Asynchronous JavaScript And XML (AJAX) request
class QBank{
	constructor(numOfQuestions) {
		this.numOfQuestions = numOfQuestions;
	}

	getQuestionsURL() {
		return 'https://opentdb.com/api.php?amount='+ this.numOfQuestions +'&category=18&type=multiple';
	}

	getQuestionBank() {
		var request = new XMLHttpRequest();
		request.open('GET', this.getQuestionsURL(5));

		request.onload = function() {
			questionBank = JSON.parse(ourRequest.responseText); 
		}
	    request.send();
	}

	//Uncomment the following script tag in index.html before using the getTestQuestionBank() method
	//<script src="TestQBank.js"></script>
	getTestQuestionBank() {
		questionBank = JSON.parse(testQuestions);
	}
}
/////////////////////////////////////////////////////////////////////////////////////
class Form{

	constructor() {
		this.rand = 0;
		this.currentQuestion = 0;
		this.score = 0;
		this.result ='Something went wrong!';

		// Setup onclick event handlers
		document.getElementById('opt1').onclick = function() { this.onClickHandler(0); }
		document.getElementById('opt2').onclick = function() { this.onClickHandler(1); }
		document.getElementById('opt3').onclick = function() { this.onClickHandler(2); }
		document.getElementById('opt4').onclick = function() { this.onClickHandler(3); }
		document.getElementById('next').onclick = function() { this.nextQuestion();}
	}

	greetUser(name) {
		document.getElementById('greet').innerText = 'Hello ' + name + '!';
	}

	generateRandomNumber = () => Math.floor(Math.random() * 4); 
		
	displayQuestionAndOptions(questionNo) {
		this.rand = this.generateRandomNumber();

		switch(this.rand) {
			case 0:
			document.getElementById('question').innerText = questionBank.results[questionNo].question;
			document.getElementById('opt1').innerText = questionBank.results[questionNo].correct_answer;
			document.getElementById('opt2').innerText = questionBank.results[questionNo].incorrect_answers[0];
			document.getElementById('opt3').innerText = questionBank.results[questionNo].incorrect_answers[1];
			document.getElementById('opt4').innerText = questionBank.results[questionNo].incorrect_answers[2];
			break;
			case 1:
			document.getElementById('question').innerText = questionBank.results[questionNo].question;
			document.getElementById('opt1').innerText = questionBank.results[questionNo].incorrect_answers[0];
			document.getElementById('opt2').innerText = questionBank.results[questionNo].correct_answer;
			document.getElementById('opt3').innerText = questionBank.results[questionNo].incorrect_answers[1];
			document.getElementById('opt4').innerText = questionBank.results[questionNo].incorrect_answers[2];
			break;
			case 2:
			document.getElementById('question').innerText = questionBank.results[questionNo].question;
			document.getElementById('opt1').innerText = questionBank.results[questionNo].incorrect_answers[0];
			document.getElementById('opt2').innerText = questionBank.results[questionNo].incorrect_answers[1]
			document.getElementById('opt3').innerText = questionBank.results[questionNo].correct_answer;
			document.getElementById('opt4').innerText = questionBank.results[questionNo].incorrect_answers[2];
			break;
			case 3:
			document.getElementById('question').innerText = questionBank.results[questionNo].question;
			document.getElementById('opt1').innerText = questionBank.results[questionNo].incorrect_answers[0];
			document.getElementById('opt2').innerText = questionBank.results[questionNo].incorrect_answers[1];
			document.getElementById('opt3').innerText = questionBank.results[questionNo].incorrect_answers[2];
			document.getElementById('opt4').innerText = questionBank.results[questionNo].correct_answer;
			break;
		}

		
	}

	onClickHandler(opt) {
		let resultBanner = document.getElementById('result');

		if(opt == this.rand) {
			resultBanner.innerText = 'Correct Answer';	
		}
		else {
			resultBanner.innerText = 'Wrong Answer';
		}
	}

	nextQuestion() {
		if(this.currentQuestion < questionBank.results.length) {
			this.currentQuestion++; 
			this.displayQuestionAndOptions(this.currentQuestion);	
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////
// Execute
console.time();
let _QBank = new QBank(10);
let _Form = new Form();

//QBank.getQuestionBank();
_QBank.getTestQuestionBank();
//console.log(questionBank);

_Form.greetUser('Rutuparn');
_Form.displayQuestionAndOptions(_Form.currentQuestion);

console.timeEnd();
/////////////////////////////////////////////////////////////////////////////////////