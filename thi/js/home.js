fetch('json/home.json')
  .then(res => res.json())
  .then(data => {

    const categoryList = document.getElementById('category-list');
    data.categories.forEach(cat => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="checkbox"> ${cat}`;
      categoryList.appendChild(label);
    });

    const video = document.getElementById('video-player');
    video.innerHTML = `
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/${data.featured.videoId}"
        frameborder="0" allowfullscreen></iframe>
    `;

    const desc = document.getElementById('video-description');
    data.featured.description.forEach(p => {
      const para = document.createElement('p');
      para.textContent = p;
      desc.appendChild(para);
    });

    const grid = document.getElementById('movie-grid');
    data.movies.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'movie-card';

      card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <div>${movie.title}</div>
        <div class="stars">${'⭐️'.repeat(movie.stars)}</div>
      `;

      grid.appendChild(card);
    });
  });
