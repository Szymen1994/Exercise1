import React from "react";
import { ghWrapper } from "./Wrapper";
import "./GistList.css";
import { Link } from "react-router-dom";

//Wyświetlanie gistów
export class PublicGistList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gisty: [],
      pageNumber: 1,
      resultPerPage: 8,
    };
  }

  handleChange = (event) => {
    this.setState({
      pageNumber: event.target.value,
      resultPerPage: 8,
    });
    ghWrapper
      .publicGist(this.state.pageNumber, this.state.resultPerPage)
      .then((response) => {
        console.log(response);
        this.setState({ gisty: response.data });
      });
  };

  componentDidMount() {
    ghWrapper
      .publicGist(this.state.pageNumber, this.state.resultPerPage)
      .then((response) => {
        console.log(response);
        this.setState({ gisty: response.data });
      });
  }

  render() {
    return (
      <>
        <div className="Gist_List">
          <h2> Public gists</h2>
          <ul>
            {this.state.gisty.map((gist) => (
              <li className="li" key={gist.id}>
                Gist description:
                <a href={gist.html_url}>
                  {" "}
                  {gist.description || "[no description]"}{" "}
                </a>
              </li>
            ))}
          </ul>
          <Link to="/">
            {" "}
            <button className="public"> My gist list </button>
          </Link>
        </div>

        <div className="paginacja">
          <button
            name="pageNumber"
            value="1"
            onClick={this.handleChange.bind(this)}
          >
            1
          </button>
          <button
            name="pageNumber"
            value="2"
            onClick={this.handleChange.bind(this)}
          >
            2
          </button>
          <button
            name="pageNumber"
            value="3"
            onClick={this.handleChange.bind(this)}
          >
            3
          </button>
          <button
            name="pageNumber"
            value="4"
            onClick={this.handleChange.bind(this)}
          >
            4
          </button>
          <button
            name="pageNumber"
            value="5"
            onClick={this.handleChange.bind(this)}
          >
            5
          </button>
          <button
            name="pageNumber"
            value="6"
            onClick={this.handleChange.bind(this)}
          >
            6
          </button>
          <button
            name="pageNumber"
            value="7"
            onClick={this.handleChange.bind(this)}
          >
            7
          </button>
          <button
            name="pageNumber"
            value="8"
            onClick={this.handleChange.bind(this)}
          >
            8
          </button>
          <button
            name="pageNumber"
            value="9"
            onClick={this.handleChange.bind(this)}
          >
            9
          </button>
          <button
            name="pageNumber"
            value="10"
            onClick={this.handleChange.bind(this)}
          >
            10
          </button>
          <button
            name="pageNumber"
            value="11"
            onClick={this.handleChange.bind(this)}
          >
            11
          </button>
          <button
            name="pageNumber"
            value="12"
            onClick={this.handleChange.bind(this)}
          >
            12
          </button>
          <button
            name="pageNumber"
            value="13"
            onClick={this.handleChange.bind(this)}
          >
            13
          </button>
        </div>
      </>
    );
  }
}

export default PublicGistList;
