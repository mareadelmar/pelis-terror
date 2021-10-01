import React from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Tooltip } from '@material-ui/core';
import { useLocation } from "wouter";
import useUserData from "../../hooks/useUserData";
import useWatchlist from '../../hooks/useWatchlist';

const Watchlist = ({ movie }) => {
    const { userLogged } = useUserData();
    const { addToWatchlist, userWatchlist } = useWatchlist();
    const [, pushLocation] = useLocation();
    const isAdded = userWatchlist.some(item => item.id === movie.id);

    const iconBtnType = !isAdded ? <BookmarkBorderIcon /> : <BookmarkIcon />
    const tooltipType = !isAdded ? "Agregar a watchlist" : "Quitar de watchlist"

    const handleAddToList = () => {
        console.log("agregar a watchlist", movie);
        if (!userLogged) return pushLocation("/login");
        addToWatchlist(movie);
    }

    return (
        <Tooltip title={tooltipType}>
            <button className="btn-fav" onClick={handleAddToList}>
                {iconBtnType}
            </button>
        </Tooltip>
    )
}

export default Watchlist;
