import React from 'react'
import {ghWrapper} from './Wrapper';
import './GistList.css';

//Wyświetlanie gistów 
export class GistListPrivate extends React.Component {
    state = {
        gisty: []
    }
    componentDidMount() {
        ghWrapper.getUserGist('Szymen1994').then(response => {
            console.log(response);
        this.setState({gisty: response.data});
        });
    }

    delete(key){
        ghWrapper.deleteGist(key).then(response => {
          alert("Usunięto gist");
        });
        }

      
      render() {
        return (
            <div className="Gist_List">
                <h2> Moje Gisty</h2>
                <ul>
                    {this.state.gisty.map( gist => 
                    <li className="li" key={gist.id}>
                        Gist description: 
                        <a href={gist.html_url}> {gist.description || "[no description]"} </a>
                        <button className="usun" onClick={()=> this.delete(gist.id)}> usuń </button>
                        <button className="edit"  onClick={() => console.log(gist.id)}> Edytuj </button> 
                    </li>
                    )}
                </ul>
            </div>
        )
    }
    
}

export default GistListPrivate