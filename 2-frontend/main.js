// main.js - Frontend Module

document.getElementById('colorBtn').addEventListener('click', function() {
  document.body.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
});

document.getElementById('addMovieBtn').addEventListener('click', function() {
  const movie = prompt('Enter a movie title:');
  if (movie) {
    const li = document.createElement('li');
    li.textContent = movie;
    document.getElementById('movieList').appendChild(li);
  }
});
