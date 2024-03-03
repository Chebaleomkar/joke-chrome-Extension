const joke = document.getElementById('joke');
const tag = document.getElementById('tag');
const punch = document.getElementById('punch');

const apiUrl = 'https://official-joke-api.appspot.com/random_joke';

function fetchJoke() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayJoke(data);
    })
    .catch(error => {
      console.error('Error fetching the joke:', error);
      // If an error occurs (e.g., user is offline), use an offline joke
      const offlineJoke = getRandomOfflineJoke();
      displayJoke(offlineJoke);
    });
}

function displayJoke(data) {
  const jokeType = data.type;
  tag.textContent = jokeType;

  const jokeText = data.setup;
  joke.textContent = jokeText;

  const punchLine = data.punchline;
  punch.textContent = punchLine;
}

function getRandomOfflineJoke() {
  const randomIndex = Math.floor(Math.random() * offlineJokes.length);
  return offlineJokes[randomIndex];
}

// Call fetchJoke when the extension is loaded or when the user clicks a button
fetchJoke();


// Offline array of jokes
const offlineJokes = [
  {
    "type": "programming",
    "setup": "What did the router say to the doctor?",
    "punchline": "It hurts when IP.",
    "id": 373
    },
  {
    "type": "general",
    "setup": "How do hens stay fit?",
    "punchline": "They always egg-cercise!",
    "id": 119
  },
  {
    "type": "general",
    "setup": "How come a man driving a train got struck by lightning?",
    "punchline": "He was a good conductor.",
    "id": 115
  },
  {
    "type": "general",
    "setup": "What did the left eye say to the right eye?",
    "punchline": "Between us, something smells!",
    "id": 178
  },
  {
    "type": "general",
    "setup": "What's blue and not very heavy?",
    "punchline": " Light blue.",
    "id": 270
  }


];