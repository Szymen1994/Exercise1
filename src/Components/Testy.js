import React from 'react'
import {ghWrapper} from './Wrapper';
import './addGist.css';

export class Testy extends React.Component {

    constructor(props) {
      super(props);
      this.state = { description: '', content: '', filename: ''  }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  
    handleSubmit(event) {
      let gistCreatePayload = {
        "description": this.state.description,
        "files": 
        { [this.state.filename]: 
          {
            "content": this.state.content
          }
        },
      }

      ghWrapper.createGist(gistCreatePayload).then((response) => console.log(response.data))
      event.preventDefault(); 
      alert("added gist " + gistCreatePayload.description)
    }
  
    render() {
      return (
          
        <div className="box">
          <h1> Dodaj nowy Gist</h1>
          <form className="form" onSubmit={this.handleSubmit}>

            <label>
              Description:
              <input className="description" type="text" name="description" value={this.state.description} onChange={this.handleChange} /> 
            </label>

            <label>
              Title:
              <input className="filename" type="text" name="filename" value={[this.state.filename]} onChange={this.handleChange} />
            </label>

            <label>
              Content:
              <textarea className="content" rows="5" cols="60"   name="content" value={this.state.content} onChange={this.handleChange} />
            </label>

            <input className="submit" type="submit" value="Dodaj" />
            
          </form>
        </div>
      );
    }
  }

  export class GistListPrivate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pagiload: ''  }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
        });
      }
    
      handleSubmit(event) {
        let pagiload = "per_page=40";
        let pageload = "&page=1";
        
        ghWrapper.getUserGist1('Szymen1994',pagiload,pageload).then(response => {
            console.log(response);
            event.preventDefault();
        this.setState({gisty: response.data});
      });
    }

    state = {
        gisty: []
    }
    componentDidMount() {
        ghWrapper.getUserGist1('Szymen1994').then(response => {
            console.log(response);
        this.setState({gisty: response.data});
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
                    </li>
                    )}
                </ul>
                <input className="submit" type="submit" value="dodaj" />
            </div>
        )
    }
    
}
export default Testy