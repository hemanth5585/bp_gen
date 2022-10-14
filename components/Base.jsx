import React from "react";
import './Base.css';
import {Link} from "react-router-dom";
import logo from "../images/logo.png";
const Base = () => {
    return (
        <div>
            <header className="bp">
                <ui className="li-in">
                    <li> <img src={logo} className="App-logo" alt="logo" /> </li>
                </ui>
            </header>
            <Link to="/home"><button>CreateOne!</button></Link>
            </div>
       
    );
    
};
export default Base;