// Inline JSON data for testing
const comics = [
  {
    "id": "001",
    "title": "Breakfast Disaster",
    "characters": ["Alice", "Bob", "Dog"],
    "location": "Kitchen",
    "panels": 4,
    "color": true,
    "panel_descriptions": [
      "Alice spills cereal",
      "Bob laughs",
      "Dog eats cereal",
      "Everyone sighs"
    ],
    "image": "comics/001.png"
  },
  {
    "id": "002",
    "title": "Library Shenanigans",
    "characters": ["Alice", "Clara"],
    "location": "Library",
    "panels": 3,
    "color": false,
    "panel_descriptions": [
      "Alice studies",
      "Clara sneaks up",
      "Books tumble over"
    ],
    "image": "comics/002.png"
  }
];

// Render list on index.html
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