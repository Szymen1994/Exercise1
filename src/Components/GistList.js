import React from 'react'
import Wrapper from './Wrapper';

let token = "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"
let ghWrapper = new Wrapper(token)

//Wyświetlanie gistów 

export class GistList extends React.Component {
    state = {
        gisty: []
    }

    componentDidMount() {
        ghWrapper.publicGist().then(response => {
            console.log(response.data);
        this.setState({gisty: response.data});
        });
    }
        
    render() {
        return (
            <div className="Gist_List">
            <h2> Najnowsze Gisty</h2>
            <ul>
                {this.state.gisty.map( gist => <li>Gist użytkownika: <a href={gist.html_url}>{gist.owner.login}</a></li>)}
            </ul>
            </div>
        )
    }
}

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
        
    render() {
        return (
            <div className="Gist_List">
            <h2>Lista moich gistów</h2>
            <ul >
                {this.state.gisty.map( gist => 
                <li>Description: 
                    <a href={gist.html_url}>{gist.description} </a> 
                   {/*  <p> Ostatnia aktualizacja: {gist.updated_at}</p> */}
                </li>
                )}
            </ul>
            </div>
        )
    }
}