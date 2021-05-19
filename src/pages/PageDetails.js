import React, { useEffect, useState } from "react";
import "./PageDetails.css";
import getMovie from "../services/getMovie";
import getSimilar from "../services/getSimilar";
import Similar from "../components/Similar";

/*
LLAMADA A API: 
- detalle: el detalle que trae el discover o necesito la llamada a esa peli? Se lo pasa a cada card
- similar: llamada a similar. Se lo pasa al componente similar y este se lo pasa a sus cards

DETALLE PELÍCULA

SIMILAR
- 20 cards
*/

const PageDetails = ({ params }) => {
    const [movie, setMovie] = useState({ genres: [] });
    const [similar, setSimilar] = useState([]);
    const { id } = params;
    console.log(id);

    useEffect(() => {
        getMovie({ id }).then((movieData) => {
            console.log(movieData);
            setMovie(movieData);
        });
        getSimilar({ id }).then((similarMovies) => {
            console.log(similarMovies);
            setSimilar(similarMovies);
        });
    }, [id]);
    return (
        <section className="details-container">
            <div className="flex details-content">
                <div className="details-img">
                    <img src={movie.img} alt={movie.title} className="img" />
                </div>
                <div className="details-data">
                    <h3 className="details-title details-text">
                        {movie.title}
                    </h3>
                    <p className="details-text">
                        {movie.lang} – {movie.year}
                    </p>
                    <p className="details-text">{movie.overview}</p>
                    <p className="details-text">
                        <strong>Genres:</strong>
                        {movie.genres.map((genre) => {
                            return ` ${genre}, `;
                        })}
                    </p>
                </div>
            </div>
            <Similar similar={similar} />
        </section>
    );
};

export default PageDetails;
