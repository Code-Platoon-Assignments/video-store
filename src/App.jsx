import { useState } from 'react';
import HomePage from './components/HomePage';
import './App.css';
import originalInventory from './data/inventory.json';
import apiKey from './data/apiKey.json';

export default function App() {
  // defining all of our state at top level and then passing down where appropriate
  const [inventory, setInventory] = useState(originalInventory);
  const [selectedFilm, setSelectedFilm] = useState(null);

  // define helper methods where helpful
  const setSelectedFilmById = id => {
    const match = inventory.find(film => film.id === id);
    // if we found a match set to that film, otherwise if undefined set to null
    setSelectedFilm(match ? match : null);
  };

  const checkoutOrReturnFilmById = (id, type) => {
    // create brand new copy of array, so react will know to rerender
    const newInventory = [...inventory];
    // can now mutate, as it's a new array anyways
    const filmToReturn = newInventory.find(film => film.id === id);

    if (type === "checkout") {
      filmToReturn.copiesAvailable--;
    } else if (type === "return") {
      filmToReturn.copiesAvailable++;
    } else {
      console.error(`Unknown checkoutOrReturnFilmById type = ${type}`)
    }
    // finally set it to new array
    setInventory(newInventory);
  }

  // you'll want a useEffect here that invokes the OMDB API
  // Example url: https://www.omdbapi.com/?i=tt6615224&apikey=7f539340`

  return (
    <div id="app_root">
      <header>
        <h1>Video Store</h1>
      </header>
      <main>
        <HomePage
          inventory={inventory}
          selectedFilm={selectedFilm}
          setSelectedFilmById={setSelectedFilmById}
          checkoutOrReturnFilmById={checkoutOrReturnFilmById}
        />
      </main>
      <footer>© 2023 Video Store</footer>
    </div>
  );
}