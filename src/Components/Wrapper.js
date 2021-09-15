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

  publicGist() {
    return this.getRequest('/gists/public')
  }
}


export default Wrapper;