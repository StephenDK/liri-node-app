// Section 1:
// Global Variables and Dependencies
// ==========================================================
  

var inputString = process.argv;

// API operator
var operator = inputString[2];
var userInput = inputString[3];

// tests and debugging
console.log(operator);
console.log(userInput);



// Section 2: 
// Functions and Click Events:
// ==========================================================

// function to check condition of operator
function operatorConditionChecker () {
	if (operator === "my-tweets"){
		console.log("These are the tweets");
		// Function to run the get my tweets


	} else if (operator === "spotify-this-song"){
		console.log("spotifying a song");

		// Run the spotify song function
	} else if (operator === "movie-this"){
		console.log("Searching for movie");

		// run the search movie function

	} else if (operator === "do-what-it-says"){
		console.log("Do what is says");

		// run the do what is syas function

	} else {
		console.log("Please enter apporite command")
	}
}

// Section 3:
// Main Process
// ===========================================================
operatorConditionChecker();