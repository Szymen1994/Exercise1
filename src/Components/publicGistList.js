import React from 'react'
import {ghWrapper} from './Wrapper';
import './GistList.css';
import { Link } from 'react-router-dom';

//Wyświetlanie gistów 
export class PublicGistList extends React.Component {
    state = {
        gisty: []
    }
    componentDidMount() {
        ghWrapper.publicGist().then(response => {
            console.log(response);
        this.setState({gisty: response.data});
        });
    }
    
      
      render() {
        return (
            <div className="Gist_List">
                <h2> Publiczne</h2>
                <ul>
                    {this.state.gisty.map( gist => 
                    <li className="li" key={gist.id}>
                        Gist description: 
                        <a href={gist.html_url}> {gist.description || "[no description]"} </a>
                    </li>
                    )}
                </ul>
                <Link to="/"> <button className="public"> My gist list </button></Link> 
            </div>
        )
    }
    
}

export default PublicGistList