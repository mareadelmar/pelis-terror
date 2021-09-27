import React from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
// cuando está agregado --> import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Tooltip } from '@material-ui/core';
import { useLocation } from "wouter";
import useUserData from "../../hooks/useUserData";

const Watchlist = ({ movie }) => {
    const { userLogged } = useUserData();
    const [, pushLocation] = useLocation();

    const handleAddToList = () => {
        console.log("agregar a watchlist", movie);
        if (!userLogged) return pushLocation("/login");

        // mandar a firestore
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
