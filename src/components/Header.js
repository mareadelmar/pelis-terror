import React from "react";
import "./Header.css";
import { Link } from "wouter";

/*
ACÁ VA EL LOGIN y toda su lógica
*/

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1 className="title">Freaks</h1>
            </Link>
        </header>
    );
};

export default Header;
