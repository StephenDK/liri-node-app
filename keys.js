// This file will hold the twitter api keys.
// the keys will be module exported to the app.js file.

// Success message for onload
console.log("This is loaded");

// twitter keys stored in a json variable
var twitterKeys = {
	consumer_key: "<input here>",
	consumer_secret: "<input here>",
	access_token_key: "<input here>",
	access_token_secret: "<input here>",
}

// Add twitterKeys data to the module.exports object
// and access them from the app.js file.
module.exports = twitterKeys;