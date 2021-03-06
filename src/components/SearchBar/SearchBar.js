import React, { useState } from "react";
import "./SearchBar.css";
import { useLocation } from "wouter";
import { Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
    const [keyword, setKeyword] = useState();
    const [, pushLocation] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        pushLocation(`/search/${keyword}/1`);
    };

    const handleInput = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="flex search-bar">
            <input
                className="search"
                onChange={handleInput}
                type="text"
                placeholder="Buscar película..."
            />
            <Button 
                color="primary" 
                variant="contained" 
                aria-label="search movie"
                type="submit"
                className="search-btn"
            >
                <SearchIcon />
            </Button>
        </form>
    );
};

export default SearchBar;
