var wins = 0;
var guesses = 5;
var currentTeamArray = [];
var userGuessArray = [];
var wordArray = [];
var wordForScreen;
var wordForWinStuff;
var counter = 0;

var teams = ["BLAZERS", "BUCKS", "BULLETS", "BULLS", "CAVALIERS", "CELTICS", "CLIPPERS",
			 "GRIZZLIES", "HAWKS", "HEAT", "HORNETS", "JAZZ", "KINGS", "KNICKS", 
			 "LAKERS", "MAGIC", "MAVERICKS", "NETS", "NUGGETS", "PACERS", "PELICANS", 
			 "PISTONS", "RAPTORS", "ROCKETS", "SIXERS", "SONICS", "SPURS", "SUNS",
			 "TIMBERWOLVES", "THUNDER", "WARRIORS", "WIZARDS"];

// Create code to randomly choose one of the 30 teams 
var currentTeamIndex = Math.floor(Math.random()*teams.length);
var currentTeam = teams[currentTeamIndex];
console.log(currentTeam);
console.log(currentTeamIndex);

// fills in currentTeamArray with current team. 
// fills in wordArray with correct amount of _ _ _ _
for (i = 0; i < (currentTeam.length); i++) {
	currentTeamArray[i] = currentTeam.charAt(i);
	wordArray[i] = '_';
	console.log(currentTeamArray[i]);
	console.log(wordArray[i]);
}

console.log(currentTeamIndex);

//plays audio
var audio = new Audio('assets/sounds/ball-dribbled.mp3');
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio.play();


//shows curry - not working
//trying to get it to display for a short amount of time when team is warriors (and you win)
// document.getElementById("curry-div").style.opacity = .5;





/////////////////////////////////////////////////////////////////////////////////////

// Captures Key Clicks
document.onkeyup = function(event) {

	counter++;

	// Determines which exact key was selected. Make it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	// Alerts with user guess
	// alert(userGuess);

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
	for (var i = 0; i < (currentTeamArray.length); i++) {
		if (userGuessArray.indexOf(userGuess) != -1) {
			return alert("you already guess that!");
		}	
	}

	// Puts user guess into userGuessArray
	userGuessArray.push(userGuess);
	console.log(userGuessArray);

	//checks to see if your guess is correct	
	if (currentTeamArray.indexOf(userGuess) === -1) {
		document.getElementById("guessedDisplay").innerHTML = userGuessArray;
		guesses--;
		document.getElementById("guessesRemainingDisplay").innerHTML = "Number of guesses remaining: " + guesses;			
	} else {
		for (var i = 0; i < (currentTeamArray.length); i++) {
			if (currentTeamArray[i] === userGuess) {
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

			//I had to do this clumsy thing because at this point for some reason,
			//currentTeam and currentTeamIndex are undefined
			wordForWinStuff = wordArray.join([separator = '']);	
			//giant if else statment

			//what i would like to do if i could get the currentTeamIndex to not be undefined
			   //create an array of images in same order as team
			   //do a for loop to check each one to see if it's equal to the index
			   //if it is, show the logo from the logo array

			//is there a better way to do this?   


			if (wordForWinStuff === 'BLAZERS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/blazers-logo.gif" alt="Blazers Logo"/>';
			} else if (wordForWinStuff === 'BUCKS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/bucks-logo.gif" alt="Bucks Logo"/>';
			} else if (wordForWinStuff === 'BULLETS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/bullets-logo.gif" alt="Bullets Logo"/>';	
			} else if (wordForWinStuff === 'BULLS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/bulls-logo.gif" alt="Bulls Logo"/>';			
			} else if (wordForWinStuff === 'CAVALIERS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/cavaliers-logo.gif" alt="Cavaliers Logo"/>';			
			} else if (wordForWinStuff === 'CELTICS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/celtics-logo.gif" alt="Celtics Logo"/>';				
			} else if (wordForWinStuff === 'CLIPPERS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/clippers-logo.gif" alt="Clippers Logo"/>';
			} else if (wordForWinStuff === 'GRIZZLIES') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/grizzlies-logo.gif" alt="Grizzlies Logo"/>';			
			} else if (wordForWinStuff === 'HAWKS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/hawks-logo.gif" alt="Hawks Logo"/>';
			} else if (wordForWinStuff === 'HEAT') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/heat-logo.gif" alt="Heat Logo"/>';
			} else if (wordForWinStuff === 'HORNETS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/hornets-logo.gif" alt="Hornets Logo"/>';
			} else if (wordForWinStuff === 'JAZZ') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/jazz-logo.gif" alt="Jazz Logo"/>';
			} else if (wordForWinStuff === 'KINGS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/kings-logo.gif" alt="Kings Logo"/>';
			} else if (wordForWinStuff === 'KNICKS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/knicks-logo.gif" alt="Knicks Logo"/>';
			} else if (wordForWinStuff === 'LAKERS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/lakers-logo.gif" alt="Lakers Logo"/>';
			} else if (wordForWinStuff === 'MAGIC') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/magic-logo.gif" alt="Magic Logo"/>';
			} else if (wordForWinStuff === 'MAVERICKS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/mavericks-logo.gif" alt="Mavericks Logo"/>';
			} else if (wordForWinStuff === 'NETS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/nets-logo.gif" alt="Nets Logo"/>';
			} else if (wordForWinStuff === 'NUGGETS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/nuggets-logo.gif" alt="Nuggets Logo"/>';
			} else if (wordForWinStuff === 'PACERS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/pacers-logo.gif" alt="Pacers Logo"/>';
			} else if (wordForWinStuff === 'PELICANS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/pelicans-logo.gif" alt="Pelicans Logo"/>';
			} else if (wordForWinStuff === 'PISTONS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/pistons-logo.gif" alt="Pistons Logo"/>';	
			} else if (wordForWinStuff === 'RAPTORS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/raptors-logo.gif" alt="Raptors Logo"/>';	
			} else if (wordForWinStuff === 'ROCKETS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/rockets-logo.gif" alt="Rockets Logo"/>';
			} else if (wordForWinStuff === 'SIXERS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/sixers-logo.gif" alt="Sixers Logo"/>';
			} else if (wordForWinStuff === 'SONICS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/sonics-logo.gif" alt="Sonics Logo"/>';
			} else if (wordForWinStuff === 'SPURS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/spurs-logo.gif" alt="Spurs Logo"/>';
			} else if (wordForWinStuff === 'SUNS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/suns-logo.gif" alt="Suns Logo"/>';
			} else if (wordForWinStuff === 'THUNDER') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/thunder-logo.gif" alt="Rockets Logo"/>';
			} else if (wordForWinStuff === 'TIMBERWOLVES') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/timberwolves-logo.gif" alt="Timberwolves Logo"/>';
			} else if (wordForWinStuff === 'WARRIORS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/warriors-logo.gif" alt="Warriors Logo"/>';
			} else if (wordForWinStuff === 'WIZARDS') {
				document.getElementById("winningTeamDisplay").innerHTML = 
				'<img src="assets/images/wizards-logo.gif" alt="Wizards Logo"/>';
			} 

// SECOND HALF OF WIN//////////////////////////////////////////////////////////				

			//make sure to let the user know they are a winner
			document.getElementById("instructions").innerHTML = "You're a winner!";
			document.getElementById("instructions2").innerHTML = "Press any key to play again.";
			currentTeamArray = [];
			wordArray = [];

			var audio = new Audio('assets/sounds/crowd-cheers.mp3');
			audio.play();

			// var audio = new Audio('assets/sounds/ball-dribbled.mp3');
			// audio.play();

	 		// Create code to randomly choose one of the 30 teams
			var currentTeamIndex = Math.floor(Math.random()*teams.length);
			var currentTeam = teams[currentTeamIndex];

			//updating the array
			for (i = 0; i < (currentTeam.length); i++) {
				currentTeamArray[i] = currentTeam.charAt(i);
				wordArray[i] = '_';
				console.log(currentTeamArray[i]);
				console.log(wordArray[i]);
			}
		
			guesses = 5;
			document.getElementById("guessesRemainingDisplay").innerHTML = "Number of guesses remaining: " + guesses;
			userGuessArray = [];
			document.getElementById("guessedDisplay").innerHTML = "<br/>";

			counter = 0;
			wins++;
			document.getElementById("wins").innerHTML = wins;
			
		}	
	} 	

// YOU LOST ////////////////////////////////////////////	
	if (guesses === 0) {

	//make sure to let the user know they are a loser
		document.getElementById("instructions").innerHTML = "You're a freaking loser.";
		document.getElementById("instructions2").innerHTML = "Press any key to try again.";
		currentTeamArray = [];
		wordArray = [];

		var audio = new Audio('assets/sounds/embarrased.mp3');
		audio.play();

 	// Create code to randomly choose one of the 30 teams
		var currentTeamIndex = Math.floor(Math.random()*teams.length);
		var currentTeam = teams[currentTeamIndex];

	//updating the array
		for (i = 0; i < (currentTeam.length); i++) {
			currentTeamArray[i] = currentTeam.charAt(i);
			wordArray[i] = '_';
			console.log(currentTeamArray[i]);
			console.log(wordArray[i]);
		}
		
		guesses = 5;
		document.getElementById("guessesRemainingDisplay").innerHTML = "Number of guesses remaining: " + guesses;
		userGuessArray = [];
		document.getElementById("guessedDisplay").innerHTML = "<br/>";

		counter = 0;
	}

}