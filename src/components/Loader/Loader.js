import React from "react";
import "./Loader.css";

const Loader = () => {
    return (
        <div className="flex loader-container">
            <img
                loading="lazy"
                src="https://media.giphy.com/media/Xxw3u5IYp7vaCqWHzx/source.gif"
                alt="Loader"
            />
        </div>
    );
};

export default Loader;
