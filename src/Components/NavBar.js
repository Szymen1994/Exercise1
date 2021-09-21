import React from "react";
import { Link } from 'react-router-dom';
import './navBar.css';

 const Navbar = () => {
        return (
            <header>
                <h1>GIST WEBSITE</h1>
                <nav> 
                    <ul className="nav_links">
                        <li> <Link className="li" to="/"> <h2>GistList</h2> </Link> </li>
                        <li> <Link className="li" to="/addgist"> <h2>AddGist</h2> </Link> </li>
                    </ul>
                </nav>
                <p>Szymon Wójcik</p>
            </header>
        )
    }

export default Navbar