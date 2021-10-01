import React from "react";
import "./Fav.css";
import { useLocation } from "wouter";
import useUserData from "../../hooks/useUserData";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { Tooltip } from '@material-ui/core';
import useFavs from "../../hooks/useFavs";

const Fav = ({ movie }) => {
    const [, pushLocation] = useLocation();
    const { userLogged } = useUserData();
    const { addToFav, userFavs } = useFavs();

    const isFavved = userFavs.some(item => item.id === movie.id);
    console.log(isFavved);

    const iconBtnType = !isFavved ? <FavoriteBorderRoundedIcon /> : <FavoriteRoundedIcon />
    const tooltipType = !isFavved ? "Agregar a favoritas" : "Quitar de favoritas";

    const handleFav = () => {
        if (!userLogged) return pushLocation("/login");
        addToFav(movie);
    };

    return (
        <Tooltip title={tooltipType}>
            <button className="btn-fav" onClick={handleFav}>
                {iconBtnType}
            </button>
        </Tooltip>
        
    );
};

export default Fav;
