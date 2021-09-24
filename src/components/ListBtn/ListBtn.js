import React from 'react'
import MovieFilterOutlinedIcon from '@material-ui/icons/MovieFilterOutlined';
import { Tooltip } from '@material-ui/core';

const ListBtn = ({ movie }) => {

    const handleAddToList = () => {
        console.log("agregar a lista de películas")
    }

    return (
        <Tooltip title="Agregar a lista">
            <button className="btn-fav" onClick={handleAddToList}>
                <MovieFilterOutlinedIcon />
            </button>
        </Tooltip>
    )
}

export default ListBtn;
