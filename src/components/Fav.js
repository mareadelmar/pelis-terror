import React from "react";
import "./Fav.css";
import { useLocation } from "wouter";
import useUserData from "../hooks/useUserData";

const Fav = ({ id }) => {
    const [, pushLocation] = useLocation();
    const { userLogged } = useUserData();

    const handleFav = () => {
        if (!userLogged) return pushLocation("/login");
        console.log("agregar a favs", id);
    };

    return (
        <button className="btn-fav" onClick={handleFav}>
            <span aria-label="Fav movie" role="img">
                ♥️
            </span>
        </button>
    );
};

export default Fav;
