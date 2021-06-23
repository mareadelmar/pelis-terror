import React from "react";
import "./ErrorVisual.css";
import { Helmet } from "react-helmet";

const errorGifs = [
    "https://media.giphy.com/media/14a43iGArvJlPG/source.gif",
    "https://media.giphy.com/media/QZ819D8QEwXYdOdDNq/source.gif",
    "https://media.giphy.com/media/1dKkmeSSjAf0FYPMyD/source.gif",
    "https://media.giphy.com/media/6ZVZRNoRKyt3PrLA6E/source.gif",
];

const ErrorVisual = () => {
    const title = "Freaks | Error";
    // const {errorMessage} = props;
    const errorGifItem = errorGifs[Math.round(Math.random() * 4)];
    console.log(errorGifItem);
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>
            <div className="flex error-container">
                <img src={errorGifItem} alt="gif" />
                <p>Ooops! Hubo un percance...</p>
            </div>
        </>
    );
};

export default ErrorVisual;
