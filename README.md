# Quiz 
### Add a quiz to your webpage

[Try out an example quiz](https://inputblackboxoutput.github.io/Quiz/) 
-------------------------------------------------------------------------------------------------------------

# Steps to add quiz to your webpage
#### STEP 1: Add the following to your HTML file and make changes to 'QuestionBank' object as per requirement
``` html
	<div class="container sm pb-1" id="quiz" style="font-family:  Verdana, Geneva,sans-serif; background-color:#F8F8F8;">
		<div class="row">
			<div class="col-lg-12">
				<h4 class="label label-default" id="greet"></h4>
				<h4 class="label label-default text-white p-1" id = "score" style="background-color:#864CBF;">Score</h4>

				<span class="progress m-2">
				  <div class="progress-bar" style="width: 0%" id="prog-bar"></div>
				</span>

				<h4 class="label label-default pb-1 " id="question"> Question </h4>
			</div>
		</div>
			

		<div class="row mt-2 mb-1 ml-2">
			<div class="col-lg-5">
				<h4><button class="btn-block rounded p-2" id="opt1">Option1</button></h4> 
			</div>
			<div class="col-lg-5">
				<h4><button class="btn-block rounded p-2" id="opt2">Option2</button></h4>
			</div>
		</div>

		<div class="row mb-2 ml-2">
			<div class="col-lg-5">
				<h4><button class="btn-block rounded p-2" id="opt3">Option3</button></h4> 
			</div>
			<div class="col-lg-5">
				<h4><button class="btn-block rounded p-2" id="opt4">Option4</button></h4>
			</div>
		</div>

		<div class="row m-1">
			<div class="col-lg-2 mb-1">
				<button  class="btn-block rounded " id="prev">Previous</button>
			</div>
			<div class="col-lg-6 mb-4">
				<h3 class="label label-default" id="result"></h3>					
			</div>
			<div class="col-lg-2 ml-2">
				<button  class="btn-block rounded " id="next">Next</button>	
			</div>
	    </div>
	    
		<script src="quiz.js"></script>
	    <script>
		   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
		    // Change the QuestionBank object as per requirement
	        const QuestionBank = {
	               "response_code": 0,
	               "results": [
	                  {
	                     "question": "Question 1",
	                     "correct_answer": "Correct",
	                     "incorrect_answers": [
	                        "Wrong 1",
	                        "Wrong 2",
	                        "Wrong 3"
	                     ]
	                  },
	                  {
	                     "question": "Question 2",
	                     "correct_answer": "Correct",
	                     "incorrect_answers": [
	                        "Wrong 1",
	                        "Wrong 2",
	                        "Wrong 3"
	                     ]
	                  }
	                  // Add more questions here!
	                  ]
	              };
	        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
	        let form = new Quiz(QuestionBank);
	        form.greetUser('there');
	        form.displayQuestionAndOptions(0);
	    </script>
	</div></code>
```
#### STEP 2: Add bootstrap to the HTML file
To add Bootstrap, add the following link tag in between the head tags 
``` html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"> 
```

#### STEP 3: Add quiz.js to the directory containing the HTML file

## Made with lots of ⏱️, 📚 and ☕ by InputBlackBoxOutput
