import React from 'react';
import AddEdit from './AddEdit';
import './style.css';

function App() {
  return (
    <>
      <header>
        <h2>Gists Search</h2>
      </header>

      <AddEdit />
      <button> Usuń Gist </button>      {/*akcja*/}
      <button> Listuj Gisty </button>   {/*Paginacja*/}
      <button> Filtruj Gisty </button>  {/*Paginacja-Filtrowanie*/}
      {/*lista Gistów*/}
      <form>

      </form>
    </>
  )
}

export default App;
