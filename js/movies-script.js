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

function displayMovies(movieList) {
  // Her opbygger vi et nyt array med map() basererert på vores movie-array (liste)
  const html = movieList
    .map((movie) => {
      return `
    <article>
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
   </article>`;
    })
    .join(""); // Her samler man det hele med join("") til en samlet html-streng

  moviesContainer.innerHTML = html;
}

function filterMovies() {
  const selectedValue = selectedCategory.value;
  const searchTerm = searchInput.value.toLowerCase().trim();

  let filteredMovies = movies;

  if (selectedValue !== "Alle") {
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.genre === selectedValue;
    });
  }

  if (searchTerm !== "") {
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchTerm);
    });
  }

  displayMovies(filteredMovies);
}

// Sætter en addeventlistener på variablen searchInput (søgefeltet), som lytter på ændringer i søgefeltet
searchInput.addEventListener("input", filterMovies);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  filterMovies();
});

// Ændre på funktionen
selectedCategory.addEventListener("change", filterMovies);

// Her kalder jeg funktionen og sender hele movie-arrayet med ind som argument.
displayMovies(movies);
