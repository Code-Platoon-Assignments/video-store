import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import originalInventory from './data/inventory.json';
import apiKey from './data/apiKey.json';

export default function App() {
  // defining all of our state at top level and then passing down where appropriate
  const [inventory, setInventory] = useState(originalInventory);

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

  const updateInventoryById = (id, updateObj) => {
    // create brand new copy of array, so react will know to rerender
    const newInventory = [...inventory];
    // can now mutate, as it's a new array anyways
    const filmToUpdate = newInventory.find(film => film.id === id);
    // a way to add combine all the key/val pairs from one obj into an existing obj
    Object.assign(filmToUpdate, updateObj);
    // finally set it to new array
    setInventory(newInventory);
  }

  useEffect(() => {
    for (const entry of inventory) {
      const url = `https://www.omdbapi.com/?i=${entry.id}&apikey=${apiKey}`;
      axios.get(url)
        .then(response => updateInventoryById(entry.id, response.data))
        .catch(err => console.error(err));
    }
  }, []);

  return (
    <div id="app_root">
      <header>
        <h1>Video Store</h1>
      </header>
      <main>
        <Outlet
          context={{
            inventory,
            checkoutOrReturnFilmById
          }}
        />
      </main>
      <footer>© 2023 Video Store</footer>
    </div>
  );
}