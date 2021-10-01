import React from "react";
import "./Fav.css";
import { useLocation } from "wouter";
import useUserData from "../../hooks/useUserData";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import { Tooltip } from '@material-ui/core';
import useFavs from "../../hooks/useFavs";

const Fav = ({ movie }) => {
    const [, pushLocation] = useLocation();
    const { userLogged, userData } = useUserData();
    const { addToFav } = useFavs();

    const handleFav = () => {
        if (!userLogged) return pushLocation("/login");
        console.log("agregar a favs", movie.id, userData.uid);
        /* 
        (cambiar el icono cuando se agrega) --> FavoriteRoundedIcon
        */
        addToFav(movie);
    };

    return (
        <Tooltip title="Agregar a favoritas">
            <button className="btn-fav" onClick={handleFav}>
                <FavoriteBorderRoundedIcon />
            </button>
        </Tooltip>
        
    );
};

export default Fav;
