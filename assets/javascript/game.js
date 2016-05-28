var wins = 0;
var guesses = 5;
var userGuessArray = [];
var wordArray = [];
var wordForScreen;
var wordForWinStuff;
var counter = 0;
var currentTeamIndex = 0;
var currentTeam = '';

var audioLost = new Audio('assets/sounds/embarrased.mp3');
var audioWin = new Audio('assets/sounds/crowd-cheers.mp3');

var teams = ["BLAZERS", "BUCKS", "BULLETS", "BULLS", "CAVALIERS", "CELTICS", "CLIPPERS",
			 "GRIZZLIES", "HAWKS", "HEAT", "HORNETS", "JAZZ", "KINGS", "KNICKS", 
			 "LAKERS", "MAGIC", "MAVERICKS", "NETS", "NUGGETS", "PACERS", "PELICANS", 
			 "PISTONS", "RAPTORS", "ROCKETS", "SIXERS", "SONICS", "SPURS", "SUNS",
			 "TIMBERWOLVES", "THUNDER", "WARRIORS", "WIZARDS"];

function initialize() {
	guesses = 5;
	document.getElementById("guessesRemainingDisplay").innerHTML = "Number of guesses remaining: " + guesses;
	counter = 0;
	userGuessArray = [];
	document.getElementById("guessedDisplay").innerHTML = "<br/>";

	// Create code to randomly choose one of the 30 teams 
	currentTeamIndex = Math.floor(Math.random()*teams.length);
	currentTeam = teams[currentTeamIndex];	

	// fills in wordArray with correct amount of _ _ _ _
	for (i = 0; i < (currentTeam.length); i++) {
		wordArray[i] = '_';
	}
}

initialize();

//plays background audio - I'm not totally sure how this works
var audio = new Audio('assets/sounds/ball-dribbled.mp3');
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio.play();

/////////////////////////////////////////////////////////////////////////////////////

// Captures Key Clicks
document.onkeyup = function(event) {

	counter++;

	// Determines which exact key was selected. Make it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	// START THE GAME - starts on any key press
	if (counter === 1) {
		wordForScreen = wordArray.join([separator = ' ']);
		document.getElementById("wordDisplay").innerHTML = wordForScreen;
		document.getElementById("instructions").innerHTML = "Let the games begin!";
		document.getElementById("instructions2").innerHTML = "Pick a letter";
		return;	
	}

	if (counter === 2) {
		document.getElementById("instructions2").innerHTML = "<br/>";
	}

	// error checking - must be a letter
	if (userGuess < 'A' || userGuess > 'Z') {
		return alert("That's not a letter!");
	} 

	//error checking - makes sure you haven't guessed that already
	for (var i = 0; i < (currentTeam.length); i++) {
		if (userGuessArray.indexOf(userGuess) != -1) {
			return alert("you already guess that!");
		}	
	}

	// Puts user guess into userGuessArray
	userGuessArray.push(userGuess);

	//checks to see if your guess is correct	
	if (currentTeam.indexOf(userGuess) === -1) {
		document.getElementById("guessedDisplay").innerHTML = userGuessArray;
		guesses--;
		document.getElementById("guessesRemainingDisplay").innerHTML = "Number of guesses remaining: " + guesses;			
	} else {
		for (var i = 0; i < (currentTeam.length); i++) {
			if (currentTeam[i] === userGuess) {
				wordArray[i] = userGuess;
				document.getElementById("guessedDisplay").innerHTML = userGuessArray;
				wordForScreen = wordArray.join([separator = ' ']);
				document.getElementById("wordDisplay").innerHTML = wordForScreen;
			} 
		}
	}
		//debugging - shows wordArray after that
		console.log(wordArray);

// YOU WON ////////////////////////////////////////////				
	for (var i = 0; i < (wordArray.length); i++) {
		if (wordArray.indexOf("_") === -1) {

			//puts logo of current team on the right 
			var lowercaseTeam = currentTeam.toLowerCase();
			document.getElementById("winningTeamDisplay").innerHTML = 
			"<img src='assets/images/"+lowercaseTeam+"-logo.gif' alt='Logo'/>";
			

			//make sure to let the user know they are a winner
			document.getElementById("instructions").innerHTML = "You're a winner!";
			document.getElementById("instructions2").innerHTML = "Press any key to play again.";
			currentTeam = '';
			wordArray = [];


			audioWin.play();

			initialize();

			wins++;
			document.getElementById("wins").innerHTML = wins;
			
		}	
	} 	

// YOU LOST ////////////////////////////////////////////	
	if (guesses === 0) {

		//make sure to let the user know they are a loser
		document.getElementById("instructions").innerHTML = "You're a freaking loser.";
		document.getElementById("instructions2").innerHTML = "Press any key to try again.";
		wordArray = [];

		audioLost.play();

		initialize();
	}

}

