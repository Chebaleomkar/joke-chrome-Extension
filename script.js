const joke = document.getElementById('joke');
const tag = document.getElementById('tag');
const punch = document.getElementById('punch');

fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const jokeType = data.type;
    tag.textContent = jokeType;

    const jokeText = data.setup;
    joke.textContent = jokeText;

    const punchLine = data.punchline;
    punch.textContent ='-'+ punchLine;
  })
  .catch(error => {
    console.error('Error fetching the joke:', error);
  });
