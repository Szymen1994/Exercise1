import React from 'react';
import AddGist from './Components/AddGist';
import GistListPrivate from './Components/GistList';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Components/NavBar'

class App extends React.Component {
render() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <GistListPrivate />
            </Route>
            <Route path="/addgist">
              <AddGist />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  ); 
}}

export default App;