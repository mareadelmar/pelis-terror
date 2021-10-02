import React, { useState} from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Tooltip, Snackbar } from '@material-ui/core';
import { useLocation } from "wouter";
import useUserData from "../../hooks/useUserData";
import useWatchlist from '../../hooks/useWatchlist';
import { Alert } from '@material-ui/lab';

const Watchlist = ({ movie }) => {
    const { userLogged } = useUserData();
    const { addToWatchlist, userWatchlist, removeFromWatchlist } = useWatchlist();
    const [, pushLocation] = useLocation();
    const [ openSnackbar, setOpenSnackbar ] = useState(false);
    const isAdded = userWatchlist.some(item => item.id === movie.id);

    const iconBtnType = !isAdded ? <BookmarkBorderIcon /> : <BookmarkIcon />
    const tooltipType = !isAdded ? "Agregar a watchlist" : "Quitar de watchlist"

    const handleAddToList = () => {
        console.log("agregar a watchlist", movie);
        if (!userLogged) return pushLocation("/login");

        if(isAdded) {
            console.log("eliminar de favoritos");
            removeFromWatchlist(movie.id);
            return;
        }
        addToWatchlist(movie);
        setOpenSnackbar(true);
    }

    const handleCloseSnackbar = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    }

    return (
        <>
            <Tooltip title={tooltipType}>
                <button className="btn-fav" onClick={handleAddToList}>
                    {iconBtnType}
                </button>
            </Tooltip>
            <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success">
                    Se agregó a tus guardadas!
                </Alert>
            </Snackbar>
        </>
    )
}

export default Watchlist;
