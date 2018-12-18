import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar fixed-top">
        <p className="navbar-brand" href="#">Clicky Game!</p>
        <p className="nav-link-center"> Click an image to begin! </p>
        <p className="nav-link-right"> Score: <span>{props.count}</span> |  Top Score: <span>{props.topCount}</span></p>
    </nav>
);

export default NavBar;