import React from 'react'
import Wrapper from './Wrapper';
/*
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
*/
export default class AddGist extends React.Component {
render(){

    var Description = document.getElementById("description");
      //var Title = document.getElementById("title")
      var Content = document.getElementById("Content")

    let gistUpdatePayload = {
        "description": `${Description}`,
        "files": {
          "title": {
            "content": `${Content}`
          }
        }
      }
      

    return(
        <form onSubmit={gistUpdatePayload}>
            <input type="checkbox" className="description" id="description"></input>
            {/*<input type="checkbox" className="Title" id="title"> </input> */}
            <input type="checkbox" className="Content" value="content"> </input>
            <input type="submit" value="send" />
            <button> Dodaj Gist </button>
            <button> Edytuj Gist </button>
            <button> Usuń Gist </button>
        </form>
        )
    }
}
/*


  /*
  
  let gistUpdatePayload = {
    "description": "Hello World Examples",
    "files": {
      "byebye_world.rb": {
        "content": "Udało mi się zdalnie edytować gista!"
      },
      "hello_world.py": {
        "content": "class HelloWorld:\n\n    def __init__(self, name):\n        self.name = name.capitalize()\n       \n    def sayHi(self):\n        print \"Hello \" + self.name + \"!\"\n\nhello = HelloWorld(\"world\")\nhello.sayHi()"
      },
    }
  }

  */