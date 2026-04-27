"use strict";

// Her opretter jeg et array med objekter.
// Hvert objekt repræsenterer en udstilling med information om navn, datoer, placering, periode og beskrivelse.
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

const favoritesContainer = document.querySelector("#favorites-container");

// Nu opretter jeg en funktion, der viser de udstillinger, som der er  tilføjet til favoritterne.
let favoritIds = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

const favoriteMovies = movies.filter((item) => {
  return favoritIds.includes(item.id);
});

function displayMovies(movieList) {
  if (movieList.length === 0) {
    favoritesContainer.innerHTML =
      "<p>Du har endu ikke valgt nogen favoritfilm </p>";
    return;
  } // her slutter if sætning

  // .map og filter laver nye lister baserert på en gammel liste, og indsætter nye værdier
  const html = movieList
    .map((item) => {
      // Her skal jeg indsætte noget js kode
      return `
        <article>
            <h2>${item.title}</h2>
            <h3><span id="periode">År: </span> ${item.year}</h3>
            <h3><span id="placering">Genre: </span> ${item.genre}</h3>
            <p><span id="beskrivelse">Varighed: </span> ${item.duration}</p>
            <p>Film URL: <a href="${item.url}" target="_blank">${item.url}</a></p>
        </article>
        `;
      // her slutter .map loopet
    })
    .join("");

  favoritesContainer.innerHTML = html;
} // her slutter funktionen

displayMovies(favoriteMovies);

// Hvis man skal kunne tilføje eller fjerne favoritter på favoritsiden skal der tilføjes under: <article> og før <h2>
//
// <button class="favorite-btn" data-id="${item.id}" aria-label="Vælg favorit">
// ${star}
// </button>;
