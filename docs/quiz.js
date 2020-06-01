// Quiz template for adding quizzes to a webpage
// Written by Rutuparn Pawar (InputBlackBoxOutput)

/////////////////////////////////////////////////////////////////////////////////////
const quest = document.getElementById('question');
const opt1_ = document.getElementById('opt1');
const opt2_ = document.getElementById('opt2');
const opt3_ = document.getElementById('opt3');
const opt4_ = document.getElementById('opt4');

const score_ = document.getElementById('score');
const result_ = document.getElementById('result');
const prog_ = document.getElementById('prog-bar');

/////////////////////////////////////////////////////////////////////////////////////
class Quiz{
	constructor(Qbank) {
		this.rand = 0;
		this.score = 0;
		this.result ='Something went wrong!';	
		
		this.enablePrevButton = false;
		this.isElementHidden('prev', !this.enablePrevButton);

		if(Qbank == null) 
			this.questionBank = this.getTestQuestionBank();
		else
			this.questionBank = JSON.parse(Qbank);
		
		this.numberOfquestions = this.questionBank.results.length;
		this.currentQuestion = 0;
		this.answered = false;

		score_.innerText = `Score: ${this.score}`;
	}

	greetUser(name) {
		document.getElementById('greet').innerText = 'Hello ' + name + ' !';
	}

	generateRandomNumber = () => Math.floor(Math.random() * 4); 
		
	displayQuestionAndOptions(questionNo) {
		result_.innerText = "";

		this.isElementHidden('next', true);
		this.answered = false;

		opt1_.style.cssText += "background-color: #FF4D6E";
		opt2_.style.cssText += "background-color: #458AFF";
	    opt3_.style.cssText += "background-color: #48AF3E";
 		opt4_.style.cssText += "background-color: #ECBF12";

		this.rand = this.generateRandomNumber();
		this.question = this.questionBank.results[questionNo];

		switch(this.rand) {
			case 0:
			quest.innerText = (this.currentQuestion+1) +") "+ this.question.question;
			opt1_.innerText = this.question.correct_answer;
			opt2_.innerText = this.question.incorrect_answers[0];
			opt3_.innerText = this.question.incorrect_answers[1];
			opt4_.innerText = this.question.incorrect_answers[2];
			break;
			
			case 1:
			quest.innerText = (this.currentQuestion+1)+") "+ this.question.question;
			opt1_.innerText = this.question.incorrect_answers[0];
			opt2_.innerText = this.question.correct_answer;
			opt3_.innerText = this.question.incorrect_answers[1];
			opt4_.innerText = this.question.incorrect_answers[2];
			break;
			
			case 2:
			quest.innerText = (this.currentQuestion+1)+") "+ this.question.question;
			opt1_.innerText = this.question.incorrect_answers[0];
			opt2_.innerText = this.question.incorrect_answers[1]
			opt3_.innerText = this.question.correct_answer;
			opt4_.innerText = this.question.incorrect_answers[2];
			break;
			
			case 3:
			quest.innerText = (this.currentQuestion+1)+") "+ this.question.question;
			opt1_.innerText = this.question.incorrect_answers[0];
			opt2_.innerText = this.question.incorrect_answers[1];
			opt3_.innerText = this.question.incorrect_answers[2];
			opt4_.innerText = this.question.correct_answer;
			break;
		}

	}

	checkAnswer(opt) {
		if(opt == this.rand && this.answered == false) {
			this.score++;
			score_.innerText = `Score: ${this.score}/${this.numberOfquestions}`;

			this.nextQuestion();
			this.isElementHidden('next', true);
		}
		else {
			this.showCorrectAnswer();
			this.isElementHidden('next', false);
			this.answered = true;
		}	
	}

	showCorrectAnswer(){
		switch(this.rand) {
			case 0:
			opt1_.style.cssText += "background-color: #76CF49";
			opt2_.style.cssText += "background-color: #FF6375";
			opt3_.style.cssText += "background-color: #FF6375";
			opt4_.style.cssText += "background-color: #FF6375";
			break;
			
			case 1:
			opt1_.style.cssText += "background-color: #FF6375";
			opt2_.style.cssText += "background-color: #76CF49";
			opt3_.style.cssText += "background-color: #FF6375";
			opt4_.style.cssText += "background-color: #FF6375";
			break;
			
			case 2:
			opt1_.style.cssText += "background-color: #FF6375";
			opt2_.style.cssText += "background-color: #FF6375";
			opt3_.style.cssText += "background-color: #76CF49";
			opt4_.style.cssText += "background-color: #FF6375";
			break;
			
			case 3:
			opt1_.style.cssText += "background-color: #FF6375";
			opt2_.style.cssText += "background-color: #FF6375";
			opt3_.style.cssText += "background-color: #FF6375";
			opt4_.style.cssText += "background-color: #76CF49";
			break;
		}
	}

	nextQuestion() {
		if(this.currentQuestion < this.questionBank.results.length - 1)  {
			this.displayQuestionAndOptions(++this.currentQuestion);
			prog_.style.width = (100/ this.numberOfquestions) * this.currentQuestion +'%';	
		} 
		else {
			this.displayResult();
		}		
	}

	displayResult() {
		this.isElementHidden('question', true);
		this.isElementHidden('opt1', true);
		this.isElementHidden('opt2', true);
		this.isElementHidden('opt3', true);
		this.isElementHidden('opt4', true);
		this.isElementHidden('next', true);

		let r = this.score/this.numberOfquestions;
		if(r > 0.8)
			result_.innerText = "Great! ";
		else if(r >0.4)
			result_.innerText = "Well done! ";   
		else
			result_.innerText = " ";

		prog_.style.width = '100%';
		result_.innerText += `  You Scored: ${this.score}/${this.numberOfquestions}`;
	}

	displayResultDone() {
		this.isElementHidden('question', false);
		this.isElementHidden('opt1', false);
		this.isElementHidden('opt2', false);
		this.isElementHidden('opt3', false);
		this.isElementHidden('opt4', false);
		this.isElementHidden('next', false);
	}
	
	previousQuestion() {
		if(this.currentQuestion > 0) {
			this.score -= 1;
			score_.innerText = `Score: ${this.score}/${this.numberOfquestions}`;

			this.displayQuestionAndOptions(--this.currentQuestion);	
			prog_.style.width = (100/ this.numberOfquestions) * this.currentQuestion +'%';
		}
	}

	isElementHidden(elementId ,isHidden) {
		if(isHidden)
			document.getElementById(elementId).hidden = true;
		else
			document.getElementById(elementId).hidden = false;
	}

	//Uncomment the following script tag in index.html before using the getTestQuestionBank() method
	//<script src="test.js"></script>
	getTestQuestionBank() {
		return JSON.parse(testQuestions);
	}

}

/////////////////////////////////////////////////////////////////////////////////////
// Use below code for testing
function main(questionBank) {
	let form = new Quiz(questionBank);
	
	form.displayResultDone();
	// Setup onclick event handlers
	opt1_.onclick = function() { form.checkAnswer(0); }
	opt2_.onclick = function() { form.checkAnswer(1); }
	opt3_.onclick = function() { form.checkAnswer(2); }
	opt4_.onclick = function() { form.checkAnswer(3); }
	document.getElementById('next').onclick = function() { form.nextQuestion();}
	document.getElementById('prev').onclick = function() { form.previousQuestion();}

	form.greetUser('there');
	form.displayQuestionAndOptions(form.currentQuestion);	
}

main(testQuestions);

/////////////////////////////////////////////////////////////////////////////////////
quiz_opt1 = document.getElementById('C');
quiz_opt2 = document.getElementById('M');
quiz_opt3 = document.getElementById('S');

quiz_opt1.addEventListener('click', function() {
	main(testQuestions0);
});

quiz_opt2.addEventListener('click', function() {
	main(testQuestions1);
});

quiz_opt3.addEventListener('click', function() {
	main(testQuestions2);
});

/////////////////////////////////////////////////////////////////////////////////////