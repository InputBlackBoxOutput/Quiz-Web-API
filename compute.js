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
		request.open('GET', this.getQuestionsURL());

		request.onload = function() {
			this.questionBank = JSON.parse(request.responseText); 
		}
	    request.send();
		return this.questionBank;
	}

	//Uncomment the following script tag in index.html before using the getTestQuestionBank() method
	//<script src="TestQBank.js"></script>
	getTestQuestionBank() {
		//console.log(testQuestions);
		this.questionBank = JSON.parse(testQuestions);
		return this.questionBank;
	}
}
/////////////////////////////////////////////////////////////////////////////////////
class Form{

	constructor(questionBank) {
		this.rand = 0;
		this.currentQuestion = 0;
		this.score = 0;
		this.result ='Something went wrong!';
		this.questionBank = questionBank;

	}

	greetUser(name) {
		document.getElementById('greet').innerText = 'Hello ' + name + '!';
	}

	generateRandomNumber = () => Math.floor(Math.random() * 4); 
		
	displayQuestionAndOptions(questionNo) {
		document.getElementById('score').innerText = `Score: ${this.score}`;
		document.getElementById('result').innerText = "";
		
		this.rand = this.generateRandomNumber();
		switch(this.rand) {
			case 0:
			document.getElementById('question').innerText = this.questionBank.results[questionNo].question;
			document.getElementById('opt1').innerText = this.questionBank.results[questionNo].correct_answer;
			document.getElementById('opt2').innerText = this.questionBank.results[questionNo].incorrect_answers[0];
			document.getElementById('opt3').innerText = this.questionBank.results[questionNo].incorrect_answers[1];
			document.getElementById('opt4').innerText = this.questionBank.results[questionNo].incorrect_answers[2];
			break;
			
			case 1:
			document.getElementById('question').innerText = this.questionBank.results[questionNo].question;
			document.getElementById('opt1').innerText = this.questionBank.results[questionNo].incorrect_answers[0];
			document.getElementById('opt2').innerText = this.questionBank.results[questionNo].correct_answer;
			document.getElementById('opt3').innerText = this.questionBank.results[questionNo].incorrect_answers[1];
			document.getElementById('opt4').innerText = this.questionBank.results[questionNo].incorrect_answers[2];
			break;
			
			case 2:
			document.getElementById('question').innerText = this.questionBank.results[questionNo].question;
			document.getElementById('opt1').innerText = this.questionBank.results[questionNo].incorrect_answers[0];
			document.getElementById('opt2').innerText = this.questionBank.results[questionNo].incorrect_answers[1]
			document.getElementById('opt3').innerText = this.questionBank.results[questionNo].correct_answer;
			document.getElementById('opt4').innerText = this.questionBank.results[questionNo].incorrect_answers[2];
			break;
			
			case 3:
			document.getElementById('question').innerText = this.questionBank.results[questionNo].question;
			document.getElementById('opt1').innerText = this.questionBank.results[questionNo].incorrect_answers[0];
			document.getElementById('opt2').innerText = this.questionBank.results[questionNo].incorrect_answers[1];
			document.getElementById('opt3').innerText = this.questionBank.results[questionNo].incorrect_answers[2];
			document.getElementById('opt4').innerText = this.questionBank.results[questionNo].correct_answer;
			break;
		}

		
	}

	displayResult(opt) {
		let resultBanner = document.getElementById('result');

		if(opt == this.rand) {
			resultBanner.innerText = 'Correct Answer';	
			this.score++;
		}
		else {
			resultBanner.innerText = 'Wrong Answer';
		}
	}

	nextQuestion() {
		if(this.currentQuestion < this.questionBank.results.length - 1) 
			this.displayQuestionAndOptions(++this.currentQuestion);	
		else
			document.getElementById('result').innerText = "End of quiz";
	}
	
	previousQuestion() {
		if(this.currentQuestion > 0) 
			this.displayQuestionAndOptions(--this.currentQuestion);	
		else
			document.getElementById('result').innerText = "Start of quiz";
	}
}

/////////////////////////////////////////////////////////////////////////////////////

let _QBank = new QBank(10);
let _Form = new Form(_QBank.getTestQuestionBank());
//let _Form = new Form(_QBank.getQuestionBank());

_Form.greetUser('Rutuparn');
_Form.displayQuestionAndOptions(_Form.currentQuestion);

// Setup onclick event handlers
document.getElementById('opt1').onclick = function() { _Form.displayResult(0); }
document.getElementById('opt2').onclick = function() { _Form.displayResult(1); }
document.getElementById('opt3').onclick = function() { _Form.displayResult(2); }
document.getElementById('opt4').onclick = function() { _Form.displayResult(3); }
document.getElementById('next').onclick = function() { _Form.nextQuestion();}
document.getElementById('prev').onclick = function() { _Form.previousQuestion();}

/////////////////////////////////////////////////////////////////////////////////////