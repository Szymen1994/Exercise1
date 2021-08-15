import React from 'react';
import AddEdit from './AddEdit';
import './style.css';

function App() {
  return (
    <>
      <div>
        
        <header>
          <h2>Gists Search</h2>
        </header>
        
        <form>

          {/*nazwa pliku*/}
          <input 
            type="text" 
            name="nazwa" 
            placeholder="Nazwa pliku" 
            id="nazwa" 
          />

          {/*zawartość Gist'a*/}  
          <input 
            type="text" 
            name="zawartość" 
            placeholder="Zawartość" 
            id="zawartość" 
          />

          {/*Tytuł Gista*/}
          <input 
            type="text" 
            name="tytuł" 
            placeholder="Tytuł" 
            id="tytuł"
          />       
            
          <button onclick="dodaj()">Dodaj Gist</button>
          <button onclick="edit()">Edytuj Gist</button>
          {/*Lista Gistów*/}
          <div id="lista"></div>

        </form>
        
        <AddEdit />
        <button> Usuń Gist </button>      {/*akcja*/}
        <button> Listuj Gisty </button>   {/*Paginacja*/}
        <button> Filtruj Gisty </button>  {/*Paginacja-Filtrowanie*/}
      </div>
      
      <ul id="gistsList"></ul>          {/*lista Gistów*/}
    </>
  )
}

export default App;
