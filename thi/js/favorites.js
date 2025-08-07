const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const container = document.getElementById("favoritesContainer");

if (favorites.length === 0) {
  container.innerHTML = "<p>No favorites yet.</p>";
} else {
  favorites.forEach((movie, index) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}">
      <h4>${movie.title}</h4>
      <button onclick="removeFromFavorites(${index})">Remove from Favorites</button>
    `;
    container.appendChild(card);
  });
}

function removeFromFavorites(index) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.splice(index, 1); // xóa phim tại vị trí index
  localStorage.setItem("favorites", JSON.stringify(favorites));
  location.reload(); // refresh lại để cập nhật giao diện
}
