const joke = document.getElementById('joke');
const tag = document.getElementById('tag');
const punch = document.getElementById('punch');
const shareBtn = document.getElementById('share'); 
const reFetch = document.getElementById('reFetch');
const apiUrl = 'https://official-joke-api.appspot.com/random_joke' || 'https://official-joke-api.appspot.com/jokes/programming/random';

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

  shareBtn.disabled = false; 
}

function getRandomOfflineJoke() {
  const randomIndex = Math.floor(Math.random() * offlineJokes.length);
  return offlineJokes[randomIndex];
}


fetchJoke();

// refetch joke
reFetch.addEventListener('click' , ()=>{
   fetchJoke();
})

// share functionality 
function shareOnWhatsApp(joke) {
  let content = joke.setup + " "+ joke.punchline;
  let whatsAppUrl = `whatsapp://send?text=` + (encodeURIComponent(content));
  window.location.href = whatsAppUrl;
}

// Event listener for the share button
shareBtn.addEventListener('click', function () { 
  console.log('sharing ')
    const currentJoke = {
        setup: joke.textContent,
        punchline: punch.textContent
    };
   shareOnWhatsApp(currentJoke);
});

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
