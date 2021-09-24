import React from "react";
import "./Fav.css";
import { useLocation } from "wouter";
import useUserData from "../../hooks/useUserData";
import { db } from "../../config/firebaseConfig";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import { Tooltip } from '@material-ui/core';

const Fav = ({ movie }) => {
    const [, pushLocation] = useLocation();
    const { userLogged, userData } = useUserData();

    const handleFav = () => {
        if (!userLogged) return pushLocation("/login");
        console.log("agregar a favs", movie.id, userData.uid);
        /* 
        (cambiar el icono cuando se agrega) --> FavoriteRoundedIcon
        */
        const favsRef = db.collection("favs");

        favsRef
            .doc(userData.uid)
            .collection("userFavs")
            .add(movie)
            .then((doc) => console.log("subido!!", doc));
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
