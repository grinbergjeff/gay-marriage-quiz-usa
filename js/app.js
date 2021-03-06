$(document).ready(function(){	
// Declare objects (questions, answers)
	var questions = [
		{ question: "On what day was same-sex marriage legalized for all 50 states in the USA?",
		 answers: ['June 23rd, 2015','June 24th, 2015','June 25th, 2015','June 26th, 2015','June 27th, 2015'],
		 correctAnswer: 'June 26th, 2015'
		},
		{ question: "Who was the swing vote?",
		 answers: ['Justice Kennedy','Justice Ginsburg','Justice Breyer','Justice Sotomayor','Justice Kagan'],
		 correctAnswer: 'Justice Kennedy'
		},
		{ question: "What was the vote tally?",
		 answers: ['6-3','5-4','4-5','3-6','7-2'],
		 correctAnswer: '5-4'
		},
		{ question: "What was the case called?",
		 answers: ['Love v. Beshear','Tanco v. Haslam','DeBoer v. Snyder','Bourke v. Beshear','Obergefell v. Hodges'],
		 correctAnswer: 'Obergefell v. Hodges'
		},
		{ question: "Which amendment of the U.S. constitution was same-sex marriage declared a fundamental right?",
		 answers: ['First Amendment','Tenth Amendement','Eighteenth Amendment','Fourteenth Amendment','Nineteenth Amendment'],
		 correctAnswer: 'Fourteenth Amendment'
		},
		{ question: "What was the last line of the concluding paragraph from the majority opinion?",
		 answers: ['They ask for equal dignity in the eyes of the law.','The Constitution grants them that right.','It is <i>so</i> ordered.','God bless America.','Same Love.'],
		 correctAnswer: 'It is so ordered.'
		}];
	//Global Variables
	 qnumber = 0; // question number
	 correct = 0; // number of answers correct
	//Functions
	introduction(questions);
	checkanswer(questions, qnumber);
	
	
	
});
//Function that introduces the quiz
function introduction(arrayname) {
	$('#begin, .headercontain, .question-container, #next, #qnum, #flag').hide();
	$('#begin, #begin-button').hide().fadeIn(2000);
	$('#begin-button').mousedown(function() {
		$('#begin, #begin-button').fadeOut(1500, function() {
			$('.headercontain, .question-container, #next, #qnum').fadeIn('1500'); 
		});
	qnumber = 0;
	correct = 0;
	insertquestion(arrayname, qnumber);
	});
}
//Function to insert questions and answers from objects
function insertquestion(arrayname, qnumber) {
	$('.questions, #answers').empty();
	console.log('starting forloop');
	for (var i = 0; i < arrayname.length; i++){
		if (i === qnumber) {
			$('#qnum').empty().append('Question ' + (i + 1));
			$('.questions').prepend('<h2 id="q">' + arrayname[i].question + '</h2>');
		for (var j = 0; j <= 4; j++) {
			$('#answers').append('<h3 class="anschoice">' + arrayname[i].answers[j] + '</h3>');
			}
		}
		else {console.log('fail')};
	}
}
// Function to select answer and check answer after hitting next button
function checkanswer(arrayname, qnumber) {
	//Indicate Selected Answer
	$('#answers').on('mousedown', '.anschoice',function() {
		$(this).removeClass().addClass('select');
		$(this).siblings().removeClass().addClass('anschoice');
	});
	//Change selected choice back to original
	$('#answers').on('mousedown', '.select',function() {
		$(this).removeClass().addClass('anschoice');
	});
	//Below determines what to do when next button clicked
	$('#next').mousedown(function() {
		//Make sure a choice is selected!
		var userselect = $('.select').text();
		console.log('userselect is: ' + userselect);
		if ( userselect === '') {
			console.log('Please select a choice!');	
			$('#next').avgrund({
				template: '<p> Please select a choice! </p>'
			});
		}
		else { // Check answer
			if (userselect === arrayname[qnumber].correctAnswer) {
				correct++;
				console.log('The user is correct! ' + correct);
			}
			else { 
				console.log('user is wrong');
				console.log('#correct is: ' + correct);
				console.log(userselect + ' vs. ' +  arrayname[qnumber].correctAnswer);
			}
			// Move on to the next question
			qnumber++;
			insertquestion(arrayname, qnumber);
			console.log('qnumber from checkanswer is now ' + qnumber);
			theend(qnumber, correct, arrayname);
		}
		});
}
//Function to display end results:
function theend(qnumber, correct, arrayname) {
	if (qnumber === 6) {
		console.log('The quiz is over!');
		$('#next, #qnum').hide();
		if (correct <= 3) {
			$('<h3> You got ' + correct + ' right. :( Try again! </h3>').insertAfter('#violet');
		}
		else if (correct >= 4 && correct < 6) {
			$('<h3> You got ' + correct + ' right! :) Try again! </h3>').insertAfter('#violet');
		}
		else {
			$('<h3> Awesome! You got them all  right!</h3>').insertAfter('#violet');
		}
		$('#flag').show();
	}
	//Need to allow for reset!
	$('#reset').mousedown(function() {
		location.reload();
	});
}