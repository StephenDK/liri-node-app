// Section 1:
// Global Variables and Dependencies
// ==========================================================

// Include the request npm package
var request = require('request');

// Import the twitter api keys from the "keys file"
var keys = require('./keys.js');

// Include the twitter npm modules
var Twitter = require('twitter');

// Include the spotify npm modules
var Spotify = require('node-spotify-api');

var inputString = process.argv;

// API operator
var operator = inputString[2];
// UserInput
var userInput = inputString[3];

// tests and debugging
console.log(operator);
console.log(userInput);
console.log("---------------------");

// console.log(keys);




// Section 2: 
// Functions and Click Events:
// ==========================================================

// function to check condition of operator
function operatorConditionChecker () {
	if (operator === "my-tweets"){
		console.log("These are the tweets");
		// Function to run the get my tweets
		myTweets();

	} else if (operator === "spotify-this-song"){
		console.log("spotifying a song");

		// Run the spotify song function

	} else if (operator === "movie-this"){
		console.log("Searching for movie");

		// run the search movie function
		movieSearch(userInput);


	} else if (operator === "do-what-it-says"){
		console.log("Do what is says");

		// run the do what is says function

	} else {
		console.log("Please enter apporite command")
	}
};

function movieSearch (userInput) {
	// conditional if the user input is undefined
	if (userInput === undefined) {
		userInput = "Mr Nobody";
	}


	// var for holding the omdb movie url  
	var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
	// Tests and debugging
	console.log(queryUrl);

	// node request for retreiving data
	request(queryUrl, function(error, response, body){
		// conditional incase of error
		if (!error && response.statusCode === 200) {
			var jsonData = JSON.parse(body);

			var data = {
				"Title": jsonData.Title,
				"Year" : jsonData.Year,
				"Rated": jsonData.Rated,
				"IMDB Rating": jsonData.imdbRating,
				"Country": jsonData.Country,
				"Language": jsonData.Language,
				"Plot": jsonData.Plot,
				"Actors": jsonData.Actors,
				"Rotten Tomatoes Rating": jsonData.Ratings[1].Value
			};
			console.log("--------------------");
			console.log(data);

		}
	});
};

// Function to grab tweets from twitter
function myTweets () {
	// Set variable "client" to the twitter keys
	var client = new Twitter(keys);

	// screen name parameters to pass into client
	var params = { screen_name: "WebDevKlein"};

	// twitter client request
	client.get("statuses/user_timeline", params, function(error, tweets, response) {
		if (!error) {
			var data = [];

			for (var i = 0; i < tweets.length; i++) {
				data.push({
					created_at: tweets[i].created_at,
					text: tweets[i].text
				});
			}
			// test and debugging
			
			console.log(data);
			

		}
	});
}

function spotifyApiSearch (userInput) {

}

// Section 3:
// Main Process
// ===========================================================
// Function to check operator input
operatorConditionChecker();

