import React, { useState } from "react";
import "./Fav.css";
import { useLocation } from "wouter";
import useUserData from "../../hooks/useUserData";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { Tooltip, Snackbar} from '@material-ui/core';
import { Alert } from "@material-ui/lab";
import useFavs from "../../hooks/useFavs";

const Fav = ({ movie }) => {
    const [, pushLocation] = useLocation();
    const { userLogged } = useUserData();
    const { addToFav, userFavs, removeFromFav } = useFavs();
    const [ openSnackbar, setOpenSnackbar ] = useState(false);

    const isFavved = userFavs.some(item => item.id === movie.id);

    const iconBtnType = !isFavved ? <FavoriteBorderRoundedIcon /> : <FavoriteRoundedIcon />
    const tooltipType = !isFavved ? "Agregar a favoritas" : "Quitar de favoritas";

    const handleFav = () => {
        if (!userLogged) return pushLocation("/login");

        if(isFavved){
            console.log("eliminar de favoritos");
            removeFromFav(movie.id);
            return;
        }
        addToFav(movie);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    }

    return (
        <>
            <Tooltip title={tooltipType}>
                <button className="btn-fav" onClick={handleFav}>
                    {iconBtnType}
                </button>
            </Tooltip>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success">
                    Se agregó a tus favoritas!
                </Alert>
            </Snackbar>
        </>
    );
};

export default Fav;
