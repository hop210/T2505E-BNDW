fetch('json/movies.json')
  .then(response => response.json())
  .then(data => {
    const movies = data.movies;
    const container = document.getElementById("moviesContainer");

    movies.forEach(movie => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <h4>${movie.title}</h4>
       
        <button onclick="addToFavorites('${movie.title}', '${movie.img}', '${movie.year}', '${movie.genre}')">
          Add to Favorites
        </button>
      `;
      container.appendChild(card);
    });
  });

function addToFavorites(title, img, year, genre) {
  const movie = { title, img, year, genre };
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.find(f => f.title === title)) {
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Added to favorites!");
  } else {
    alert("This movie is already in favorites.");
  }
}
