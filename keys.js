// This file will hold the twitter api keys.
// the keys will be module exported to the app.js file.

// Success message for onload
console.log("This is loaded");

// twitter keys stored in a json variable
var twitterKeys = {
	consumer_key: 'xDwXhNNlheG6vEOThU4JV79Es',
	consumer_secret: 'gcJEh5Q4MksYQ5iVjL4dgWXecO5y9XZBwzGayZ07O3xEWWoPGh',
	access_token_key: '896849559107678209-RqxnGtoM00nIHLkYMgkKTc6LPNW7YOu',
	access_token_secret: 'guYVvT2IZxEYAVpRadprW0324aDjWRamGx4rX8NBhtry8',
};

// Add twitterKeys data to the module.exports object
// and access them from the app.js file.
module.exports = twitterKeys;