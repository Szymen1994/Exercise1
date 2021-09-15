import axios from 'axios'
import React from 'react'

export default class GistList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('https://github.com/Szymen1994')
        .then (res => {
            console.log(res);
            this.setState({persons: res.data});
        });
    }

    render() {
        return (
            <ul>
                {this.state.persons.map( person => <li>{person.name}</li>)}
            </ul>
        )
    }
}