import React, { useState } from "react";
import { Link } from "wouter";
import useUserData from "../hooks/useUserData";
import "./DropdownUserData.css";

const DropdownUserData = () => {
    const { logOut, userData } = useUserData();
    // si matchea con login devuelve true

    const [show, setShow] = useState(false);

    const mailName = userData
        ? userData.email.substring(0, userData.email.lastIndexOf("@"))
        : "anónima";

    const handleDropdown = (e) => {
        setShow(!show);
        console.log("mostrame", show);
    };

    return (
        <div className="flex dropdown">
            <button onClick={handleDropdown} className="dropbtn">
                {mailName}
            </button>
            {show ? (
                <div id="myDropdown" className="dropdown-content">
                    <Link to="/profile">Perfil</Link>
                    <Link to="/favorites">Favs</Link>
                    <button className="btn-logout" onClick={logOut}>
                        Logout
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default DropdownUserData;
