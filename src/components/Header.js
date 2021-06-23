import React, { useState } from "react";
import "./Header.css";
import { Link, useRoute } from "wouter";
import useUserData from "../hooks/useUserData";
import "./DropdownUserData.css";

/*
llamar al hook que chequea logueo y devuelve el objeto user
condicionar, según eso, entre renderizar componente login o componente usuario
*/

const Header = () => {
    const { userLogged, logOut } = useUserData();
    // si matchea con login devuelve true
    const [matchLogin] = useRoute("/login");
    const [matchHome] = useRoute("/");
    const [show, setShow] = useState(false);

    const renderLoginButton = ({ userLogged }) => {
        return userLogged ? (
            <button onClick={logOut}>Logout</button>
        ) : (
            <Link to="/login">Login</Link>
        );
    };

    const loginBarCondition = matchLogin
        ? null
        : renderLoginButton({ userLogged });
    const titleStyleHome = matchHome ? "title-app-home" : "title-app";

    const handleDropdown = (e) => {
        setShow(!show);
        console.log("mostrame", show);
    };
    return (
        <header className="flex">
            {/* <div className="dropdown">
                <button onClick={handleDropdown} className="dropbtn">
                    Dropdown
                </button>
                {show ? (
                    <div id="myDropdown" className="dropdown-content">
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                        {loginBarCondition}
                    </div>
                ) : null}
            </div> */}
            <div className="flex log-container">{loginBarCondition}</div>
            <div className="flex title-container">
                <Link to="/">
                    <h1 className={titleStyleHome}>freaks</h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;
