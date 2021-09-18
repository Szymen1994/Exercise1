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
      let gistCreatePayload = {
        "description": this.state.description,
        "files": 
        {
          "title": 
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
            
           {/* <input type="text" value={this.state.title} onChange={this.handleChange} /> */}
          </label>
          <label>
          Content:
          <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Dodaj" />
        </form>
      );
    }
  }
export default NoweTesty;