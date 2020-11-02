import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {

    return (
        <nav className="nav__menu">

            <Link to="/" className="nav__home">Home</Link>
            <Link to="/about" className="nav__about">About</Link>
        </nav>
    );
}

export default Navigation;