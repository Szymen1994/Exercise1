import React from "react"
import Wrapper from './Wrapper';

let token = "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"
let ghWrapper = new Wrapper(token)

class NoweTesty extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        description: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({description: event.target.value});
    }
  
    handleSubmit(event) {
      let gistCreatePayload = {
        "description": this.state.description,
        "files": 
        {
          "title": 
          {
            "content": "contencik"
          }
        }
      }

      ghWrapper.createGist(gistCreatePayload).then((response) => console.log(response.data))
      event.preventDefault(); 
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Imię:
            <input type="text" value={this.state.description} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Wyślij" />
        </form>
      );
    }
  }
export default NoweTesty;