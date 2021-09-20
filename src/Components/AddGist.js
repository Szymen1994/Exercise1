import React from "react"
import {ghWrapper} from './Wrapper';

class AddGist extends React.Component {
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
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Description:
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} /> 
          </label>
          
          <label>
            Content:
            <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
          </label>

          <label>
            Title:
            <input type="text" name="filename" value={[this.state.filename]} onChange={this.handleChange} />
            </label>
          <input type="submit" value="Dodaj" />
        </form>
      );
    }
  }
export default AddGist;