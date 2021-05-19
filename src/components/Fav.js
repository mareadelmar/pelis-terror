import React from "react";
import "./Fav.css";
import { useLocation } from "wouter";

const Fav = ({ id }) => {
    const [, pushLocation] = useLocation();
    const isLogged = true;
    console.log(id);

    const handleFav = () => {
        console.log("agregar a favs");
        if (!isLogged) return pushLocation("/login");
        alert(id);
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
