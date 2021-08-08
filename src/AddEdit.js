import React from 'react';
import './style.css';

export default function AddEdit(){
    return(
    <>
        <form action="">
            <input type="text" name="nazwa" placeholder="Nazwa pliku"/>       {/*nazwa pliku*/}
            <input type="text" name="zawartość" placeholder="Zawartość"/>   {/*zawartość Gist'a*/}
            <input type="text" name="tytuł" placeholder="Tytuł"/>       {/*Tytuł Gista*/}
            <button>Dodaj Gist</button>
            <button>Edytuj Gist</button>
        </form>
    </>
    )
}