# 🎬 JavaScript DOM Favorites #5  
## Favoritfilm med `localStorage` og separat favoritside  
### CineMaxx Movies – Favorite Movies

## Opgavebeskrivelse

I denne opgave skal du bygge en løsning, hvor brugeren kan vælge sine favoritfilm og få dem gemt i browserens `localStorage`.

Du skal arbejde med to sider:

- `index.html`
- `favorit-movies.html`

På siden `index.html` skal brugeren kunne:

- se alle film
- klikke på en **hvid stjerne** `☆` for at tilføje en favoritfilm
- klikke på en **sort stjerne** `★` for at fjerne en favoritfilm

På siden `favorit-movies.html` skal brugeren kunne:

- se en oversigt over sine nuværende favoritfilm

Du skal bruge den færdige løsning med **Antik Museum**, hvor samme princip bruges med favorit-udstillinger, som inspiration til din egen løsning.

---

## Forudsætninger

Du må redigere i:

- `index.html`
- `favorit-movies.html`
- `js/movies-script.js`
- `js/favorit-movies-script.js`
- `css/style.css`

---

## Trin-for-trin

1. Download projektkoden (ZIP-fil) fra GitHub, og udpak den på din computer.

2. Opret et nyt repository på GitHub.com med et passende navn, fx:

`dom-favorite-movies-localstorage-exercise`

3. Kopiér linket til dit GitHub-repository.

4. Åbn GitHub Desktop og vælg **Clone repository**.

5. Vælg fanen **URL**, indsæt linket, og vælg en passende placering under **Local Path**.

6. Kopiér indholdet fra den udpakkede projektmappe over i den klonede mappe.

7. Åbn projektmappen i Visual Studio Code.

8. Brug den færdige løsning med **Antik Museum** som inspiration til, hvordan favorit-id’er gemmes i `localStorage`, og hvordan en separat favoritside kan bygges.

9. Løs nu opgaverne herunder.

---

## Projektmappe

Du får udleveret en projektmappe, som indeholder:

- en `index.html` fil
- en `favorit-movies.html` fil
- en `css`-mappe
- en `js`-mappe
- en `img`-mappe med billeder
- en `movies.txt` fil med filmdata

---

### Opgave 1 – Link CSS og JavaScript i `index.html`

På `index.html` skal du:

- linke til `css/style.css` i `<head>`
- linke til `js/movies-script.js` lige før `</body>`

---

### Opgave 2 – Opret datastrukturen `movies` i `movies-script.js`

Åbn filen `movies.txt`.

I `js/movies-script.js` skal du oprette en JavaScript-datastruktur med navnet:

- `movies`

Datastrukturen skal være et array med objekter.

Hvert objekt skal have disse properties:

- `id`
- `title`
- `genre`
- `year`
- `duration`
- `img`
- `url`

Du skal bruge filmdata fra `movies.txt`.

---

### Opgave 3 – Byg forsiden med alle film og favoritstjerner

I `js/movies-script.js` skal du:

- hente HTML-containeren med `querySelector()`
- oprette funktionen `displayMovies(movieList)`
- bruge `map()` og `join("")`
- vise alle film i DOM’en
- tilføje en stjerneknap til hver film
- bruge filmens `id` som unik nøgle
- gøre det muligt at tilføje og fjerne favoritfilm
- gemme favorit-id’er i `localStorage`

Du skal bruge den færdige løsning med **Antik Museum** som inspiration til favoritlogikken.

---

### Opgave 4 – Link CSS og JavaScript i `favorit-movies.html`

På `favorit-movies.html` skal du:

- linke til `css/style.css` i `<head>`
- linke til `js/favorit-movies-script.js` lige før `</body>`

---

### Opgave 5 – Opret datastrukturen `movies` i `favorit-movies-script.js`

Åbn filen `movies.txt`.

I `js/favorit-movies-script.js` skal du, ligesom på forsiden, oprette JavaScript-datastrukturen:

- `movies`

Datastrukturen skal være et array med objekter.

Hvert objekt skal have disse properties:

- `id`
- `title`
- `genre`
- `year`
- `duration`
- `img`
- `url`

Du skal bruge alle de samme filmdata fra `movies.txt`, som du brugte i `movies-script.js`.

---

### Opgave 6 – Vis favoritfilmene på favoritsiden

I `js/favorit-movies-script.js` skal du:

- hente favorit-id’er fra `localStorage`
- sammenligne dem med filmene i `movies`
- lave et nyt array med kun favoritfilmene
- oprette en render-funktion, fx `displayFavoriteMovies(movieList)`
- bruge `map()` og `join("")`
- vise favoritfilmene i DOM’en

Hver favoritfilm skal mindst vise:

- titel
- genre
- år
- varighed
- billede

---

### Opgave 7 – Style begge sider med CSS

I `css/style.css` skal du style begge sider.

Siderne skal mindst have:

- en centreret overskrift
- luft omkring indholdet
- filmkort med kant eller baggrund
- ensartet afstand mellem elementer
- billeder i en passende størrelse
- tydelig styling af stjerneknappen

---

### Opgave 8 – Layout med CSS Flexbox

Brug CSS Flexbox til at lave layoutet til filmene.

Filmene skal vises som kort i rækker med luft imellem.

Du skal bruge Flexbox på:

- `#movies-container`
- `#favorites-container`

---

## 🔎 Arbejdsmetode

Du skal ikke kopiere Antik Museum-løsningen direkte.

Du skal i stedet:

1. se på strukturen og idéen
2. forstå hvordan favorit-id’er gemmes i `localStorage`
3. overføre samme tankegang til filmdata

Det vigtigste er, at du forstår:

- hvorfor man gemmer **id’er**
- hvordan man opdaterer stjernen
- hvordan en separat favoritside kan hente de gemte data igen

---

## 📚 Ressourcer og hjælp

- W3Schools – JavaScript Arrays - https://www.w3schools.com/js/js_arrays.asp
- W3Schools – JavaScript Objects - https://www.w3schools.com/js/js_objects.asp
- W3Schools – JavaScript Functions - https://www.w3schools.com/js/js_functions.asp
- W3Schools – JavaScript map() - https://www.w3schools.com/jsref/jsref_map.asp
- W3Schools – JavaScript join() - https://www.w3schools.com/jsref/jsref_join.asp
- W3Schools – JavaScript filter() - https://www.w3schools.com/jsref/jsref_filter.asp
- W3Schools – JavaScript includes() - https://www.w3schools.com/jsref/jsref_includes.asp
- W3Schools – querySelector() - https://www.w3schools.com/jsref/met_document_queryselector.asp
- W3Schools – querySelectorAll() - https://www.w3schools.com/jsref/met_document_queryselectorall.asp
- W3Schools – addEventListener() - https://www.w3schools.com/js/js_htmldom_eventlistener.asp
- W3Schools – localStorage - https://www.w3schools.com/jsref/prop_win_localstorage.asp
- W3Schools – JSON.parse() - https://www.w3schools.com/js/js_json_parse.asp
- W3Schools – JSON.stringify() - https://www.w3schools.com/js/js_json_stringify.asp
- W3Schools – Template literals - https://www.w3schools.com/js/js_string_templates.asp
- W3Schools – CSS Flexbox - https://www.w3schools.com/css/css3_flexbox.asp

---

## 📤 Aflevering

Indsæt linket (URL) til dit GitHub-repository på Canvas.

Sørg for, at repository’et er public.

---

## ⏰ Afleveringsfrist

Torsdag d. 23. april 2026, kl. 23.59 på Canvas.