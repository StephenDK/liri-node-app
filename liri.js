// Section 1:
// Global Variables and Dependencies
// ==========================================================
// Import the fs (file system) package
var fs = require('fs');
// Include the request npm package
var request = require('request');

// Import the twitter api keys from the "keys file"
var keys = require('./keys.js');

// Include the twitter npm modules
var Twitter = require('twitter');

// Include the spotify npm modules
var Spotify = require('node-spotify-api');

var inputArray = process.argv;

// API operator
var operator = inputArray[2];
// UserInput
var userInput = inputArray[3];

// tests and debugging
console.log(operator);
console.log(userInput);
console.log("---------------------");






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
		spotifyApiSearch (userInput);

	} else if (operator === "movie-this"){
		console.log("Searching for movie");

		// run the search movie function
		movieSearch(userInput);


	} else if (operator === "do-what-it-says"){
		console.log("Do what is says");

		// run the do what is says function

	} else {
		console.log("Please enter apporoite command")
	}
};
// Function to write to the log.txt
function writeToFile (data) {
	fs.appendFile("log.txt", JSON.stringify(data) + "\n", function(err){
		if (err) {
			return console.log(err);
		} else {
			console.log("log.txt was updated!");
		}
	})
}
// Function to return a movie search
function movieSearch (userInput) {
	

	// conditional if the user input is undefined
	if (userInput === undefined) {
		userInput = "Mr Nobody";
	} else {
		var newUserInput = "";

	for (var i = 3; i < inputArray.length; i++) {
		if (i > 3 && i < inputArray.length) {

			newUserInput = userInput + "+" + inputArray[i];
		} else {
			 newUserInput += inputArray[i];
		}
	}

	console.log("new user input: " + newUserInput);
}


	// var for holding the omdb movie url  
	var queryUrl = "http://www.omdbapi.com/?t=" + newUserInput + "&y=&plot=short&apikey=trilogy";
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
	var client = new Twitter(keys.twitterKeys);

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
var getArtistNames = function(artist) {
	return artist.name;
}

function spotifyApiSearch (userInput) {
	var spotify = new Spotify(keys.spotifyKeys);
	// Conditional for undefined spotify search
	if (userInput === undefined) {
		userInput = "What's my age again";
	}
	// Spotify search
	spotify.search({type: 'track', query: userInput }, function(err, data) {
		if (err) {
			console.log("Error occured: " +
				err);
			return;
		}
		var songs = data.tracks.items;
		var data = [];

		for (var i = 0; i < songs.length; i++){
			data.push({
				"artist": songs[i].artists.map(getArtistNames),
				"song name: ": songs[i].name,
				"preview song: ": songs[i].preview_url,
        		"album: ": songs[i].album.name
			})
		}
		console.log(data);
		writeToFile(data);
	})
}

// Section 3:
// Main Process
// ===========================================================
// Function to check operator input
operatorConditionChecker();

