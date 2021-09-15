const axios = require('axios');

class Wrapper {
  constructor(token) {
    this.token = token
    this.client = axios.create({
      baseURL: 'https://api.github.com/',
      responseType: 'json',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token ' + this.token
      }
    })
  }

  //-----------------------FUNKCJE-----------------------
  // ----------------------REQUESTS----------------------

  getRequest(path) {
    return this.client.get(path)
  }

  postRequest(path, payload) {
    return this.client.post(path, payload)
  }

  root() {
    return this.getRequest('/')
  }

  deleteRequest(path) {
    return this.client.delete(path)
  }

  patchRequest(path, payload) {
    return this.client.patch(path, payload)
  }

    //-------------------------AKCJE----------------------

  createGist(payload) {
    return this.postRequest('/gists', payload)
  }
  
  deleteGist(gistId){
    return this.deleteRequest(`/gists/${gistId}`)
  }

  updateGist(gistId, payload) {
    return this.patchRequest(`/gists/${gistId}`, payload)
  }

  getGist(gistId) {
    return this.getRequest(`/gists/${gistId}`)
  }

  publicGist() {
    return this.getRequest('/gists/public')
  }
}

let token = "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"
let ghWrapper = new Wrapper(token)
let gistCreatePayload = {
  "description": "byebye World Examples",
  "public": true,
  "files": {
    "hello_world.rb": {
      "content": "class HelloWorld\n   def initialize(name)\n      @name = name.capitalize\n   end\n   def sayHi\n      puts \"Hello !\"\n   end\nend\n\nhello = HelloWorld.new(\"World\")\nhello.sayHi"
    },
    "hello_world.py": {
      "content": "class HelloWorld:\n\n    def __init__(self, name):\n        self.name = name.capitalize()\n       \n    def sayHi(self):\n        print \"Hello \" + self.name + \"!\"\n\nhello = HelloWorld(\"world\")\nhello.sayHi()"
    },
  }
}

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

//-----------------------WYKONANIE FUNKCJI-----------------------

//DODAWANIE
//ghWrapper.createGist(gistCreatePayload).then((response) => console.log(response.data))

//EDYCJA
//ghWrapper.updateGist('98c04d2758bb136ade0930ba63eb3abe', gistUpdatePayload).then((response) => console.log(response.data))

//USUWANIE
//ghWrapper.deleteGist('d1ce7d41ff792a4404bd23e2634a25ae').then((response) => console.log(response.data))

//LISTING user GIST
//ghWrapper.getGist('670ce001a54c826e460b19db41cdcfe6').then((response) => console.log(response.data))


//LISTING ALL GISTS 
ghWrapper.publicGist().then((response) => console.log(response.data))

//ghWrapper.root().then((response) => console.log(response.data)) */

export default Wrapper;