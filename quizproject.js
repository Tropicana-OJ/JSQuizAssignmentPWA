var currentQuestion = 0; //question we are currently on

var score = 0; //number of correct questions

//questions is an array of question objects
var questions = [
   {//question 1
	"question": "What is Astronomy the study of?",
	"a": "The study of celestial Bodies in Space.",
	"b": "The study of the influence that distant cosmic objects have on human lives.",
	"c": "The study of applying the laws of physics and chemistry to explain the birth, life and death of celestial objects",
	"d": "The Study of the abundance of reactions of molecules in the Universe",
	"image":"quizimages/astronomy-q1.jpg",
	"answer": "a"
   },
   {//question 2
	"question": "What Planet is pictured in the image to the right?",
	"a": "Earth",
	"b": "Jupiter",
	"c": "Saturn",
	"d": "Mars",
	"image":"quizimages/saturn-q2.jpg",
	"answer": "c"
   },
   {//question 3
	"question": "What galaxy do we live in?",
	"a": "Milky Way",
	"b": "Andromeda Galaxy",
	"c": "Messier 81",
	"d": "Sombrero Galaxy",
	"image":"quizimages/andromeda.jpg",
	"answer": "a"
   },
    {//question 4
	"question": "Out of these Planets which one is the smallest?",
	"a": "Juipter",
	"b": "Uranus",
	"c": "Venus",
	"d": "Mercury",
	"image":"quizimages/mercury-q4.jpg",
	"answer": "d"
   },
    {//question 5
	"question": "Out of these 4 planets which one has the most amount of moons?",
	"a": "Juipter",
	"b": "Uranus",
	"c": "Saturn",
	"d": "Earth",
	"image":"quizimages/europa-q5.jpg",
	"answer": "c"
   },
   {//question 6
	"question": "Which one of these planets use to have water flowing on its surface?",
	"a": "Neptune",
	"b": "Mars",
	"c": "Saturn",
	"d": "Earth",
	"image":"quizimages/earth-q6.jpg",
	"answer": "b"
   },
    {//question 7
	"question": "Whats in the center of our Galaxy",
	"a": "A Star ",
	"b": "A Supermassive Black Hole",
	"c": "A Planet",
	"d": "Another Galaxy",
	"image":"quizimages/black-hole-q7.jpg",
	"answer": "b"
   },
      {//question 8
	"question": "What will happen when our sun becomes a red giant and collapses",
	"a": "It becomes a black hole",
	"b": "It goes supernova",
	"c": "It becomes a White drawf",
	"d": "It vanishs out of existence",
	"image":"quizimages/supernova-q8.jpg",
	"answer": "c"
   },
    {//question 9
	"question": "How many planets are in the solar system",
	"a": "10",
	"b": "7",
	"c": "9",
	"d": "8",
	"image":"quizimages/sun-q9.jpg",
	"answer": "d"
   },
    {//question 10
	"question": "What Galaxy Group are we apart of",
	"a": "Bullet Group",
	"b": "Deer Lick Group",
	"c": "Local Group",
	"d": "M81 Group",
	"image":"quizimages/Galaxygroup-q10.jpg",
	"answer": "c"
   },
 ];
 
 
 //register the service worker when the js loads
 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
 
 //run code when the body loads
function initialize() {
	document.getElementById("lightbox").style.display="none";
	 loadQuestion();
	 
	 
 }//initialize
 
 //if(score >=7 && score <=9){}
 
 // load the current question on the page
 function loadQuestion() {
	 
	 //check for last question
	 let message = "";
	 if (currentQuestion == questions.length){
	message = "Congrats, you have finished. Your score is " + score + " / " + questions.length + ". Click to start again"; 
		
			//show the lightbox with feedback
		document.getElementById("lightbox").style.display="block";
		document.getElementById("message").innerHTML = message;
		currentQuestion = 0;
		score = 0;
		
	}
	 
	 //preload the image
	 //var img = document.getElementById("image");
	 //var preLoading = new Image();
	 //preloadingImg.src = questions[currentQuestion].image;

	 //preLoadingImg.onload = function () { 
	 //img.width = this.width;
	// }
	 //img.style.maxwidth = "500px";
	// img=.scr = preLoadingImg.src;
	 
	//define the variables at the top of the function
	
	//load the question
	document.getElementById("question").innerHTML = questions[currentQuestion].question;
	document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a; 
	document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b; 
	document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c; 
	document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d; 
	
	document.getElementById("image").src = questions[currentQuestion].image;
 } // loadQuestion
 
 //skips the question when the user clicks "next question"
 function nextQuestion(){
	let message = ""; 
	message = "You have skipped to the next question";
		document.getElementById("lightbox").style.display="block";
		document.getElementById("message").innerHTML = message;
		currentQuestion++;
		loadQuestion();
	 
}//nextQuestion
function goBackQuestion(){
	let message = ""; 
	message = "You have goneback a question";
		document.getElementById("lightbox").style.display="block";
		document.getElementById("message").innerHTML = message;
		currentQuestion--;
		score--;
		loadQuestion();
}

 //mark the current question
 function markIt(ans) {
	 let message = ""; 
	//if the answer is correct add to score and move to next question
	if (ans == questions[currentQuestion].answer) {
		//alert("correct"); //dont use this in real design .. too 1995
		
		
		// add to score and move to next question
		score = score + 1;
		document.getElementById("score").innerHTML = score + " / " + questions.length;
		
		//show the light box with feed back
		
		message = "Congrats you got it right! Your score is " + score + " / " + questions.length; 
		document.getElementById("message").innerHTML = message;
		
	} 
  
	//otherwise notify the user the answeris incorrect
	else{
		message ="incorrect answer! Your score is " + score + " / " + questions.length; 
		
		
	}//else
		
		//show feed back
		document.getElementById("lightbox").style.display="block";
		document.getElementById("message").innerHTML = message;
	
	//move to next question
		currentQuestion++; //add 1 to current question;
		loadQuestion();



 }  // markIt
   
// close the lightbox
function closeLightBox(){
	document.getElementById("lightbox").style.display="none";
}//close lightbox