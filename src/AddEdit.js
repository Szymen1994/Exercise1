import React from 'react'

export default function AddEdit(){
    return(
    <>
        <form action="">
            <input type="text" name="nazwa"/>       {/*nazwa pliku*/}
            <input type="text" name="zawartość"/>   {/*zawartość Gist'a*/}
            <input type="text" name="tytuł"/>       {/*Tytuł Gista*/}
            <button>Dodaj Gist</button>
            <button>Edytuj Gist</button>
        </form>
    </>
    )
}