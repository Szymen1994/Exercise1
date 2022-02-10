import React from 'react'
  import {ghWrapper} from './Wrapper';
  import './GistList.css';

export class EditGist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: '', content: '', filename: '', gist: ''  }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    let gistUpdatePayload = {
      "description": this.state.description,
      "files": 
      { [this.state.filename]: 
        {
          "content": this.state.content
        }
      },
    }

    ghWrapper.updateGist(this.state.gistId, gistUpdatePayload).then((response) => console.log(response.data))
    event.preventDefault(); 
    alert("updated " + gistUpdatePayload.description)
  }

  render() {
    return (
      <div className="box">
        <h1> Edit Gist</h1>
        <form className="form" onSubmit={this.handleSubmit}>

          <label>
            Gist ID:
            <input className="gistId" type="text" name="gistId" value={this.state.gistId} onChange={this.handleChange} />
          </label>

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
            <textarea rows="5" cols="60" className="content"  name="content" value={this.state.content} onChange={this.handleChange} />
          </label>

          <input className="submit" type="submit" value="Add" />
          
        </form>
      </div>
    );
  }
  }

export default EditGist