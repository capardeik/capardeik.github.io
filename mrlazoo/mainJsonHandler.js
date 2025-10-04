fetch('comics.json')
  .then(response => response.json())
  .then(comics => {
    const container = document.getElementById('comic-list');

    comics.forEach(comic => {
      const div = document.createElement('div');
      div.className = 'comic-card';

      div.innerHTML = `
        <h2>${comic.title}</h2>
        <img src="${comic.image}" alt="${comic.title}" width="300">
        <p><strong>Characters:</strong> ${comic.characters.join(', ')}</p>
        <p><strong>Location:</strong> ${comic.location}</p>
        <a href="comic.html?id=${comic.id}">View Details</a>
      `;

      container.appendChild(div);
    });
  });