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
      <ul class="originallist">
      <p class="comicnumber">Mr. Lazoo #${comic.numOnPage}</p>
      <li class="comic"><img class="comicimage" src="${comic.image}" alt="Comic Image"></li>
          <li class="comicdetail"><ul class="detailbox">
              <div class="detailinfo">
              <li class="detail">In Series: ${comic.numInSeries}</li>
              <li class="detail">Panels: ${comic.panels}</li>
              <li class="detail">Color: ${comic.color ? "Yes" : "No"}</li>
              </div>
              <li class="detailtitle">Title Panel</li>
              <li class="detail">${comic.titlePanelType}</li>
              <li class="detailtitle">Panel 1</li>
              <li class="detail">Description here</li>
              <li class="detailtitle">Panel 2</li>
              <li class="detail">Mr. Lazoo in his car drives over a medium ramp.</li>
              <li class="detailtitle">Panel 3</li>
              <li class="detail">Mr. Lazoo in his car drives over a large ramp.</li>
              <li class="detailtitle">Panel 4</li>
              <li class="detail">Mr. Lazoo in his car drives over a giant ramp.</li>



      <p><strong>Characters:</strong> ${comic.characters.join(', ')}</p>
      <p><strong>Location:</strong> ${comic.location}</p>
      <p><strong>Panels:</strong> ${comic.panels}</p>
      <p><strong>Color:</strong> ${comic.color ? "Yes" : "No"}</p>
      <h3>Panel Descriptions</h3>
      <ol>
        ${comic.panel_descriptions.map((p, i) => `
          <li class="detailtitle">Panel ${i + 1}</li>
          <li class="detail">${p}</li>
        `).join('')}
      </ol>
              </ul></li>
          <a class="link" href="../1.html"><p class="back">Back to #${comics.section}</p></a>
      </ul>
  });

