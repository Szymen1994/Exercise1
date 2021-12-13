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

  getUserGist(user, pageNumber, resultPerPage) {
    return this.getRequest(`/users/${user}/gists?page=`+pageNumber+'&per_page='+resultPerPage)
  }
  //?per_page=40&page=1

  publicGist(pageNumber, resultPerPage) {
    return this.getRequest('/gists/public?page='+pageNumber+'&per_page='+resultPerPage)
  }

}

export let token = "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"
export let ghWrapper = new Wrapper(token)

//-----------------------WYKONANIE FUNKCJI-----------------------

//DODAWANIE
//ghWrapper.createGist(gistCreatePayload).then((response) => console.log(response.data))

//EDYCJA
//ghWrapper.updateGist('98c04d2758bb136ade0930ba63eb3abe', gistUpdatePayload).then((response) => console.log(response.data))

//USUWANIE
//ghWrapper.deleteGist('d1ce7d41ff792a4404bd23e2634a25ae').then((response) => console.log(response.data))

//LISTING user GIST
//ghWrapper.getGist('940609d33b9008884fd37db63a22b23a').then((response) => console.log(response.data.files))

//LISTING ALL GISTS 
//ghWrapper.publicGist().then((response) => console.log(response.data))

//ghWrapper.root().then((response) => console.log(response.data))


export default Wrapper;