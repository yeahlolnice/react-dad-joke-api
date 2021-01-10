const jokeURL = 'https://icanhazdadjoke.com/'

// getJokes
// Retrieves a joke using the icanhazdadjoke API and logs it to console
//
// If a callback is passed in, it is called with the joke string
export function getJoke(callback) {
	fetch(jokeURL, {headers: {'Accept':'application/json'}})
	.then((response) => response.json())
	.then((data) => {
		// console.log(data.joke)
		callback && callback(data.joke)
	})
}