/////////////////////////////////////////////////////////////////////////////////////
//Asynchronous JavaScript And XML (AJAX) request
class QBank{
	constructor(numOfQuestions) {
		this.request = new XMLHttpRequest();
		this.request.open('POST', 'https://opentdb.com/api.php?amount='+numOfQuestions+'&category=18&type=multiple', true);
		
		this.request.onload = () => {
	    	if(this.request.responseText != "") {
		    	this.request.resp = JSON.parse(this.request.responseText);
	    	}	
		}; 

		this.request.send(null);
	}

	getQuestionBank() {
		if(this.request.resp != undefined)
			return this.request.resp;
		else
			return 1;
	}

	//Uncomment the following script tag in index.html before using the getTestQuestionBank() method
	//<script src="test.js"></script>
	getTestQuestionBank() {
		return JSON.parse(testQuestions);
	}
}
/////////////////////////////////////////////////////////////////////////////////////
class Form{

	constructor(questionBank) {
		this.rand = 0;
		this.currentQuestion = 0;
		this.score = 0;
		this.result ='Something went wrong!';
		this.enablePrevButton = false;
		this.questionBank = questionBank;
		this.numberOfquestions = questionBank.results.length;
		this.answered = false;

		document.getElementById('quiz').style.cssText = "font-family:  Verdana, Geneva,sans-serif; background-color:#F5F5F5;";
		document.getElementById('score').style.cssText ="background-color: #864CBF;";
		document.getElementById('score').innerText = `Score: ${this.score}`;
	}

	greetUser(name) {
		document.getElementById('greet').innerText = 'Hello ' + name + ' !';
	}

	generateRandomNumber = () => Math.floor(Math.random() * 4); 
		
	displayQuestionAndOptions(questionNo) {
		document.getElementById('result').innerText = "";
		this.answered = false;

		document.getElementById('opt1').style.cssText += "background-color: #E21B3C";
		document.getElementById('opt2').style.cssText += "background-color: #1368CE";
	    document.getElementById('opt3').style.cssText += "background-color: #26890C";
		document.getElementById('opt4').style.cssText += "background-color: #D89E00";

		this.isElementHidden('next', true);

		if(this.enablePrevButton) {
			if(this.currentQuestion == 0 )
				this.isElementHidden('prev', true);	
			else 
				this.isElementHidden('prev', false);
		}
		else
			this.isElementHidden('prev', true);

		this.rand = this.generateRandomNumber();
		switch(this.rand) {
			case 0:
			document.getElementById('question').innerText = (this.currentQuestion+1) +") "+this.questionBank.results[questionNo].question;
			document.getElementById('opt1').innerText = this.questionBank.results[questionNo].correct_answer;
			document.getElementById('opt2').innerText = this.questionBank.results[questionNo].incorrect_answers[0];
			document.getElementById('opt3').innerText = this.questionBank.results[questionNo].incorrect_answers[1];
			document.getElementById('opt4').innerText = this.questionBank.results[questionNo].incorrect_answers[2];
			break;
			
			case 1:
			document.getElementById('question').innerText = (this.currentQuestion+1)+") "+this.questionBank.results[questionNo].question;
			document.getElementById('opt1').innerText = this.questionBank.results[questionNo].incorrect_answers[0];
			document.getElementById('opt2').innerText = this.questionBank.results[questionNo].correct_answer;
			document.getElementById('opt3').innerText = this.questionBank.results[questionNo].incorrect_answers[1];
			document.getElementById('opt4').innerText = this.questionBank.results[questionNo].incorrect_answers[2];
			break;
			
			case 2:
			document.getElementById('question').innerText = (this.currentQuestion+1)+") "+this.questionBank.results[questionNo].question;
			document.getElementById('opt1').innerText = this.questionBank.results[questionNo].incorrect_answers[0];
			document.getElementById('opt2').innerText = this.questionBank.results[questionNo].incorrect_answers[1]
			document.getElementById('opt3').innerText = this.questionBank.results[questionNo].correct_answer;
			document.getElementById('opt4').innerText = this.questionBank.results[questionNo].incorrect_answers[2];
			break;
			
			case 3:
			document.getElementById('question').innerText = (this.currentQuestion+1)+") "+this.questionBank.results[questionNo].question;
			document.getElementById('opt1').innerText = this.questionBank.results[questionNo].incorrect_answers[0];
			document.getElementById('opt2').innerText = this.questionBank.results[questionNo].incorrect_answers[1];
			document.getElementById('opt3').innerText = this.questionBank.results[questionNo].incorrect_answers[2];
			document.getElementById('opt4').innerText = this.questionBank.results[questionNo].correct_answer;
			break;
		}

		
	}

    // Use below code for debugging/testing 
	// displayResult(opt) {
	// 	let resultBanner = document.getElementById('result');

	// 	if(opt == this.rand) {
	// 		resultBanner.innerText = 'Correct Answer';	
	// 		this.score++;
	// 	}
	// 	else {
	// 		resultBanner.innerText = 'Wrong Answer';
	// 	}
	// }

	displayResult(opt) {
		switch(this.rand) {
			case 0:
			document.getElementById('opt1').style.cssText += "background-color: #66BF39";
			document.getElementById('opt2').style.cssText += "background-color: #FF3355";
			document.getElementById('opt3').style.cssText += "background-color: #FF3355";
			document.getElementById('opt4').style.cssText += "background-color: #FF3355";
			break;
			
			case 1:
			document.getElementById('opt1').style.cssText += "background-color: #FF3355";
			document.getElementById('opt2').style.cssText += "background-color: #66BF39";
			document.getElementById('opt3').style.cssText += "background-color: #FF3355";
			document.getElementById('opt4').style.cssText += "background-color: #FF3355";
			break;
			
			case 2:
			document.getElementById('opt1').style.cssText += "background-color: #FF3355";
			document.getElementById('opt2').style.cssText += "background-color: #FF3355";
			document.getElementById('opt3').style.cssText += "background-color: #66BF39";
			document.getElementById('opt4').style.cssText += "background-color: #FF3355";
			break;
			
			case 3:
			document.getElementById('opt1').style.cssText += "background-color: #FF3355";
			document.getElementById('opt2').style.cssText += "background-color: #FF3355";
			document.getElementById('opt3').style.cssText += "background-color: #FF3355";
			document.getElementById('opt4').style.cssText += "background-color: #66BF39";
			break;
		}

		if(opt == this.rand && this.answered == false) {
			this.nextQuestion();
			this.score++;
			document.getElementById('score').innerText = `Score: ${this.score}/${this.numberOfquestions}`;
			this.answered = true;
		}
		else {
			this.isElementHidden('next', false);
			this.answered = true;
		}

		if(this.currentQuestion == this.numberOfquestions-1) {
			this.isElementHidden('next', true);
			this.isElementHidden('opt1', true);
			this.isElementHidden('opt2', true);
			this.isElementHidden('opt3', true);
			this.isElementHidden('opt4', true);
			this.isElementHidden('question', true);
			document.getElementById('prog-bar').style.width = "100%";
			document.getElementById('result').innerText = `Your answered: ${this.score}/${this.numberOfquestions} correctly`;
		}
	}

	nextQuestion() {
		if(this.currentQuestion < this.questionBank.results.length - 1)  {
			this.displayQuestionAndOptions(++this.currentQuestion);
			document.getElementById('prog-bar').style.width = (100/ this.numberOfquestions) * this.currentQuestion +'%';	
		}		
	}
	
	previousQuestion() {
		if(this.currentQuestion > 0) {
			this.displayQuestionAndOptions(--this.currentQuestion);	
			document.getElementById('prog-bar').style.width = (100/ this.numberOfquestions) * this.currentQuestion +'%';
		}
	}

	isElementHidden(elementId ,isHidden) {
		if(isHidden)
			document.getElementById(elementId).hidden = true;
		else
			document.getElementById(elementId).hidden = false;
	}

}

/////////////////////////////////////////////////////////////////////////////////////
// Setup onclick event handlers
document.getElementById('opt1').onclick = function() { form.displayResult(0); }
document.getElementById('opt2').onclick = function() { form.displayResult(1); }
document.getElementById('opt3').onclick = function() { form.displayResult(2); }
document.getElementById('opt4').onclick = function() { form.displayResult(3); }
document.getElementById('next').onclick = function() { form.nextQuestion();}
document.getElementById('prev').onclick = function() { form.previousQuestion();}

/////////////////////////////////////////////////////////////////////////////////////
// Use below code for testing
let qbank = new QBank(10);
let form = new Form(qbank.getTestQuestionBank());
console.log(qbank.getQuestionBank());

form.greetUser('Rutuparn');
form.displayQuestionAndOptions(form.currentQuestion);

/////////////////////////////////////////////////////////////////////////////////////