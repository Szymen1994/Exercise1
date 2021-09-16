import React from 'react';
import './style.css';
import GistList from './Components/GistList';
import GistListPrivate from './Components/GistList_private';
import PersonList from './Components/PersonList';
import Wrapper from './Components/Wrapper';
import AddGist from './Components/AddGist';
//import Testy from './Components/Testy';

let token = "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"
let ghWrapper = new Wrapper(token)

let gistCreatePayload = {
  "description": "byebye World Examples",
  "public": true,
  "files": {
    "hello_world.rb": {
      "content": "class HelloWorld\n   def initialize(name)\n      @name = name.capitalize\n   end\n   def sayHi\n      puts \"Hello !\"\n   end\nend\n\nhello = HelloWorld.new(\"World\")\nhello.sayHi"
    },
  }
}

class App extends React.Component {
render() {
  return (
    <>
    <div className="Dodawanie gista">
      <input type="text" name="GistDescription"></input>
      <input type="text" name="GistName"></input>
      <input type="text" name="GistContent"></input>
      
      
      
    </div>
    <GistListPrivate />
    </>
  );
  
}
}

export default App;