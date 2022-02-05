async function fetchMoviesJSON() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const movies = await response.json();
    return movies;
  }
  fetchMoviesJSON().then(movies => {
    movies; // fetched movies
    console.log(movies);
    document.getElementById("dog-image").src=movies.message;
  });

  fetch('https://api.genderize.io?name=caline')
  .then(response => response.json())
  .then(data => console.log(data));