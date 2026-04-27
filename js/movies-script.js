"use strict";

// Hvert objekt skal have følgende properties: id, title, genre, year, duration, img, url
const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "science-fiction",
    year: 2010,
    duration: 2.28,
    img: "img/inception.webp",
    url: "https://www.imdb.com/title/tt1375666/",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "action",
    year: 2008,
    duration: 2.32,
    img: "img/the-dark-knight.webp",
    url: "https://www.imdb.com/title/tt0468569/",
  },
  {
    id: 3,
    title: "Forrest Gump",
    genre: "drama",
    year: 1994,
    duration: 2.22,
    img: "img/forrest-gump.webp",
    url: "https://www.imdb.com/title/tt0109830/",
  },
  {
    id: 4,
    title: "Superbad",
    genre: "comedy",
    year: 2007,
    duration: 1.53,
    img: "img/superbad.webp",
    url: "https://www.imdb.com/title/tt0829482/",
  },
  {
    id: 5,
    title: "It",
    genre: "horror",
    year: 2017,
    duration: 2.15,
    img: "img/it.webp",
    url: "https://www.imdb.com/title/tt1396484/",
  },
  {
    id: 6,
    title: "The Hangover",
    genre: "comedy",
    year: 2009,
    duration: 1.4,
    img: "img/the-hangover.webp",
    url: "https://www.imdb.com/title/tt1119646/",
  },
  {
    id: 7,
    title: "The Conjuring",
    genre: "horror",
    year: 2013,
    duration: 1.52,
    img: "img/the-conjuring.webp",
    url: "https://www.imdb.com/title/tt1457767/",
  },
  {
    id: 8,
    title: "Interstellar",
    genre: "science-fiction",
    year: 2014,
    duration: 2.55,
    img: "img/interstellar.jpg",
    url: "https://www.imdb.com/title/tt0816692/",
  },
  {
    id: 9,
    title: "The Matrix",
    genre: "science-fiction",
    year: 1999,
    duration: 3.02,
    img: "img/the-matrix.webp",
    url: "https://www.imdb.com/title/tt0133093/",
  },
  {
    id: 10,
    title: "Pulp Fiction",
    genre: "drama",
    year: 1994,
    duration: 1.39,
    img: "img/pulp-fiction.webp",
    url: "https://www.imdb.com/title/tt0110912/",
  },
];

// Her opretter jeg en variabel som henter eller peger på id="movies-container" atribuetten over i html
const moviesContainer = document.querySelector("#movies-container");
const selectedCategory = document.querySelector("#category-select");
const searchInput = document.querySelector("#gsearch");
const form = document.querySelector("form");

// Vi gemmer kun id'er i localStorage (fx [1, 4, 9]), ikke hele film-objekter.
// Hvis der ikke er gemt noget endnu, bruger vi et tomt array.
let favoriteIds = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

function filterMovies() {
  // Henter værdier fra UI:
  // kategori fra dropdown + søgetekst fra input.
  const selectedValue = selectedCategory.value;
  const searchTerm = searchInput.value.toLowerCase().trim();

  // Start med alle film og filtrér dem trinvis.
  let filteredMovies = movies;

  // Filtrér på genre hvis brugeren har valgt andet end "Alle".
  if (selectedValue !== "Alle") {
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.genre === selectedValue;
    });
  }

  // Filtrér på titel hvis brugeren har skrevet noget i søgefeltet.
  // toLowerCase() gør søgningen case-insensitive.
  if (searchTerm !== "") {
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchTerm);
    });
  }

  // Vis resultatet i DOM.
  displayMovies(filteredMovies);
}

// Kør filtrering mens brugeren skriver.
searchInput.addEventListener("input", filterMovies);

// Forhindrer at siden reloades ved submit, og filtrerer i stedet i JavaScript.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  filterMovies();
});

// Kør filtrering når kategori ændres.
selectedCategory.addEventListener("change", filterMovies);

// Hjælpefunktion: returnerer true hvis id findes i favorit-listen.
function isFavorite(id) {
  return favoriteIds.includes(id);
}

function displayMovies(movieList) {
  // Bygger HTML for alle filmkort og indsætter i #movies-container.
  const html = movieList
    .map((movie) => {
      let star;

      if (isFavorite(movie.id)) {
        star = "★";
      } else {
        star = "☆";
      }

      return `
        <article>
        <button class="favorite-btn" data-id="${movie.id}" aria-label="Tilføj eller fjern favorit">
          ${star}
        </button>
        <h2>${movie.title}</h2>
        <ul>
            <li>Genre: ${movie.genre}</li>
            <li>År: ${movie.year}</li>
            <li>Varighed: ${movie.duration}</li>
        </ul>

        <figure>
            <a href="${movie.url}" target="_blank" rel="noopener noreferrer">
                <img src="${movie.img}" alt= "${movie.title}">
            </a>
            <figcaption>${movie.title}</figcaption>
        </figure>
   </article>
        `;
    })
    .join("");

  moviesContainer.innerHTML = html;

  // Knapperne oprettes dynamisk i innerHTML, så vi henter dem efter render.
  const favoriteButtons = document.querySelectorAll(".favorite-btn");

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // dataset.id er string => konverteres til Number før vi bruger den.
      const movieId = Number(button.dataset.id);
      toggleFavorite(movieId);
    });
  });
}

function toggleFavorite(id) {
  // Hvis film allerede er favorit: fjern den.
  // Ellers: tilføj den.
  if (favoriteIds.includes(id)) {
    favoriteIds = favoriteIds.filter((favoriteId) => {
      return favoriteId !== id;
    });
  } else {
    favoriteIds.push(id);
  }

  // Gem den opdaterede favorit-liste permanent i browseren.
  localStorage.setItem("favoriteMovies", JSON.stringify(favoriteIds));

  // Re-render så stjernerne opdateres med det samme.
  displayMovies(movies);
}

// Første render ved sideindlæsning.
displayMovies(movies);
