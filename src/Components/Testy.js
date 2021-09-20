import React from "react"
import Wrapper from './Wrapper';

{/*let token = "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"
let ghWrapper = new Wrapper(token)

class NoweTesty extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {id:1, name: 'Hello'},
          {id:2, name: 'World'},
          {id:3, name: 'How'},
          {id:4, name: 'Are'},
          {id:5, name: 'You'},
          {id:6, name: '?'}
        ]
      }
    }

    delete(item){
      const data = this.state.data.filter(i => i.id !== item.id)
      this.setState({data})
    }
  
    render(){
      const listItem = this.state.data.map((item)=>{
          return <div key={item.id}>
          <span>{item.name}</span> <button onClick={this.delete.bind(this, item)}>Delete</button>
        </div>
      })
      return <div>
          {listItem}
      </div>
    }
    }
  */}
//-------------------------------------------------------------

let token = "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"
let ghWrapper = new Wrapper(token)

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
        console.log(response.data);
      });
      }
      
      render() {
        return (
            <div className="Gist_List">
            <h2> Najnowsze Gisty</h2>
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
    
export default GistListPrivate;