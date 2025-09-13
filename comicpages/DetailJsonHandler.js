// Get comic ID from URL (e.g., comic.html?id=001)
const params = new URLSearchParams(window.location.search);
const comicId = params.get('id');

fetch('../comics.json')
  .then(response => response.json())
  .then(comics => {
    const comic = comics.find(c => c.id === comicId);
    const container = document.getElementById('comic-detail');

    if (!comic) {
      container.innerHTML = "<p>Comic not found.</p>";
      return;
    }

    container.innerHTML = `
      <h1>${comic.title}</h1>
      <img src="${comic.image}" alt="${comic.title}" width="600">
      <p><strong>Characters:</strong> ${comic.characters.join(', ')}</p>
      <p><strong>Location:</strong> ${comic.location}</p>
      <p><strong>Panels:</strong> ${comic.panels}</p>
      <p><strong>Color:</strong> ${comic.color ? "Yes" : "No"}</p>
      <h3>Panel Descriptions</h3>
      <ol>
        ${comic.panel_descriptions.map(p => `<li>${p}</li>`).join('')}
      </ol>
    `;
  });