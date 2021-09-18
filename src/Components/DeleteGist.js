import React from "react"
import Wrapper from './Wrapper';

let token = "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"
let ghWrapper = new Wrapper(token)

class NoweTesty extends React.Component {
    constructor(props) {
      super(props);
      this.state = { description: '', content: '' }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  
    handleSubmit(event) {
      let gistDeletePayload = {
        "description": this.state.description,
        "files": 
        {
          "title": 
          {
            "content": this.state.content
          }
        }
      }

      ghWrapper.deleteGist({gistDeletePayload}).then((response) => console.log(response.data))
      event.preventDefault(); 
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
              Podaj klucz gista:
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Wyślij" />
        </form>
      );
    }
  }
export default NoweTesty;