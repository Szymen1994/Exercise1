import React from 'react';
import Buttons from './Buttons.js';
import './style.css';
import Form from './Form.js';

function App() {
  return (
    <>
      
        
        <nav>
          <h2>Gists Search</h2>
        </nav>
          
        <Form />
        <Buttons />
        
      
      
      <ul id="gistsList"></ul>          {/*lista Gistów*/}
    </>
  )
}


export default App;
