// deklarace promenne pro tabulku (selektor podle id z index.html)
const table = document.getElementById("multiplication-table");

// deklarace promenne pro zvuk (selektor podle id z index.html)
const sound = document.getElementById("clickSound");

// radky tabulky
for (let i = 1; i <= 10; i++) {
  // sloupce tabulky
  for (let j = 1; j <= 10; j++) {
    // logika nasobilky
    const result = i * j;

    // bunka tabulky
    const cell = document.createElement("div");
    cell.className = "cell";

    // zapis dat do bunek
    cell.textContent = result;
    table.appendChild(cell);

    // co se bude dit po clicku
    cell.addEventListener("click", function () {
      // zvuk
      sound.play();

      // video
      showVideo();
    });
  }
}

const bgVideo = document.getElementById("bg-video");

// Zacatek a konec(v sekundach)
const startTime = 0;
const endTime = 2;

// funkce pro zobrazeni videa
function showVideo() {
  const videoContainer = document.getElementById("video-container");

  //container videa
  videoContainer.classList.add("show");

  // zacatek videa a spousteni
  bgVideo.currentTime = startTime;
  bgVideo.play();

  // aktualizace casu
  bgVideo.addEventListener("timeupdate", function () {
    if (bgVideo.currentTime >= endTime) {
      //stop video
      bgVideo.pause();
      //odstraneni tridy show
      videoContainer.classList.remove("show");
    }
  });
}
