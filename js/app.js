$(document).ready(function(){	
// Declare objects (questions, answers)
	var questions = [
		{ _id: 0,
		 question: "On what day was same-sex marriage legalized for all 50 states in the USA?",
		 answers: ['June 23rd, 2015','June 24th, 2015','June 25th, 2015','June 26th, 2015','June 27th, 2015'],
		 correctAnswer: 'June 26th, 2015'
		},
		{ _id: 1,
		 question: "Who was the swing vote?",
		 answers: ['Justice Kennedy','Justice Ginsburg','Justice Breyer','Justice Sotomayor','Justice Kagan'],
		 correctAnswer: 'Justice Kennedy'
		},
		{ _id: 2,
		 question: "What was the vote tally?",
		 answers: ['6-3','5-4','4-5','3-6','7-2'],
		 correctAnswer: '5-4'
		},
		{ _id: 3,
		 question: "What was the case called?",
		 answers: ['Love v. Beshear','Tanco v. Haslam','DeBoer v. Snyder','Bourke v. Beshear','Obergefell v. Hodges'],
		 correctAnswer: 'Obergefell v. Hodges'
		},
		{ _id: 4,
		 question: "Which amendment of the U.S. constitution was same-sex marriage declared a fundamental right?",
		 answers: ['First Amendment','Tenth Amendement','Eighteenth Amendment','Fourteenth Amendment','Nineteenth Amendment'],
		 correctAnswer: 'Fourteenth Amendment'
		},
		{ _id: 5,
		 question: "What was the last line of the concluding paragraph from the majority opinion?",
		 answers: ['They ask for equal dignity in the eyes of the law','The Constitution grants them that right.','It is <i>so</i> ordered.','God bless America.','Same Love.'],
		 correctAnswer: 'It is <i>so</i> ordered.'
		}];
	//Global Variable
	qnumber = 0;
	//Functions
	introduction(questions);
	nextquestion(questions ,qnumber)
	
	
	
});
//Function that introduces the quiz
function introduction(arrayname) {
	$('#begin, .headercontain, .question-container, #next, #qnum').hide();
	$('#begin, #begin-button').hide().fadeIn(2000);
	$('#begin-button').mousedown(function() {
		$('#begin, #begin-button').fadeOut(1500, function() {
			$('.headercontain, .question-container, #next').fadeIn('1500'); 
		});
	qnumber = 0;
	insertquestion(arrayname, qnumber);
	});
}
//Function to insert questions and answers from objects
function insertquestion(arrayname, numberq) {
	$('.questions, #answers').empty();
	console.log('starting forloop');
	for (var i = 0; i < arrayname.length; i++){
		if (i === numberq) {
			console.log('loading question ' + i);
			$('.questions').prepend('<h2 id="q">' + arrayname[i].question + '</h2>');
		for (var j = 0; j <= 4; j++) {
			console.log('loading answer' + arrayname[i].answers[j]);
			$('#answers').append('<h3>' + arrayname[i].answers[j] + '</h3>');
			}
		}
		else {console.log('fail')};
	}
}
//Function to increment what question the user is on when when they click next
function nextquestion(arrayname ,questionnumber) {
	$('#next').mousedown(function() {
		questionnumber++;
		console.log('nextquestion....questionnumber is now ' + questionnumber);
		insertquestion(arrayname, questionnumber);
	});
}
