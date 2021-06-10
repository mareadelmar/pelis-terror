import React, { useState } from "react";
import "./SearchBar.css";
import { useLocation } from "wouter";

const SearchBar = () => {
    const [keyword, setKeyword] = useState();
    const [path, pushLocation] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        pushLocation(`/search/${keyword}/1`);
        console.log(keyword, path);
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
                value={keyword}
                placeholder="Buscar película..."
            />
            <button className="search-btn">buscar</button>
        </form>
    );
};

export default SearchBar;
