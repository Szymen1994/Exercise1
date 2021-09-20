import React from 'react';
import './style.css';
import AddGist from './Components/AddGist';
//import Wrapper from './Components/Wrapper';
import GistListPrivate from './Components/GistList';

class App extends React.Component {
render() {
  return (
    <>
    <AddGist />
    <GistListPrivate />
    </>
  ); 
}}

export default App;