import React from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
// cuando está agregado --> import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Tooltip } from '@material-ui/core';
import { useLocation } from "wouter";
import useUserData from "../../hooks/useUserData";
//import setWatchlist from '../../services/setWatchlistService';
import useWatchlist from '../../hooks/useWatchlist';

const Watchlist = ({ movie }) => {
    const { userLogged } = useUserData();
    const { addToWatchlist } = useWatchlist();
    const [, pushLocation] = useLocation();

    const handleAddToList = () => {
        console.log("agregar a watchlist", movie);
        if (!userLogged) return pushLocation("/login");

        addToWatchlist(movie);

        // setWatchlist(userData.uid, movie)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    }

    return (
        <Tooltip title="Agregar a lista">
            <button className="btn-fav" onClick={handleAddToList}>
                <BookmarkBorderIcon />
            </button>
        </Tooltip>
    )
}

export default Watchlist;
