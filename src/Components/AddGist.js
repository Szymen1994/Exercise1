import React from "react";
import { ghWrapper } from "./Wrapper";
import "./addGist.css";

class AddGist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "", content: "", filename: "" };
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
      description: this.state.description,
      files: {
        [this.state.filename]: {
          content: this.state.content,
        },
      },
    };

    ghWrapper
      .createGist(gistCreatePayload)
      .then((response) => console.log(response.data));
    event.preventDefault();
    alert("gist has been added " + gistCreatePayload.description);
  }

  render() {
    return (
      <section className="box">
        <h1> Add new gist</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Description:
            <input
              className="description boxes"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Title:
            <input
              className="filename boxes"
              type="text"
              name="filename"
              value={[this.state.filename]}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Content:
            <textarea
              rows="5"
              cols="60"
              className="content boxes"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </label>

          <input className="submit" type="submit" value="Add" />
        </form>
      </section>
    );
  }
}
export default AddGist;
