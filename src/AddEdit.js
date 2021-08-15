import React from 'react';
import './style.css';

<script src="https://gist.github.com/Szymen1994/940609d33b9008884fd37db63a22b23a.js"></script>

export default function AddEdit(){
    //wyszukiwanie gistów
    const Nazwa = document.getElementById('nazwa');
    const Zawartosc = document.getElementById('zawartość');
    const Tytul = document.getElementById('tytuł');

    Nazwa.addEventListener('keyup', (e) => {
        console.log(e.target.value)
    })

    Zawartosc.addEventListener('keyup', (i) => {
        console.log(i.target.value)
    })

    Tytul.addEventListener('keyup', (u) => {
        console.log(u.target.value)
    })

    return(
        <>
            </>
    )
}