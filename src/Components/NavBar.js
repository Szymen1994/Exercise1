import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1>GIST WEBSITE</h1>
      <nav>
        <ul className="nav_links">
          <li>
            {" "}
            <Link className="li" to="/">
              {" "}
              <h2>GistList</h2>{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="li" to="/addgist">
              {" "}
              <h2>AddGist</h2>{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="li" to="/editgist">
              <h2>EditGitst</h2>
            </Link>{" "}
          </li>
        </ul>
      </nav>
      <p>Szymon Wojcik</p>
    </header>
  );
};

export default Navbar;
