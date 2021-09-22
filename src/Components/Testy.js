import React from 'react'
import Wrapper from './Wrapper';

let token = "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"
let ghWrapper = new Wrapper(token)

export class Testy extends React.Component {
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
        ghWrapper.deleteGist({key}).then((response) => 
        console.log(response.data))
        }
      
      render() {
        return (
            <div className="Gist_List">
            <h2> Moje Gisty</h2>
            <ul>
                {this.state.gisty.map( gist => 
                <li key={gist.id}>Gist użytkownika: 
                    <a href={gist.html_url}>{gist.owner.login}{gist.id}</a>
                    <button onClick={()=> this.delete(gist.id)}> usuń gist </button>
                </li>)}
            </ul>
            </div>
        )
    }
}

export default Testy