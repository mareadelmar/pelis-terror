import React, { useEffect, useState } from "react";
//import { Link } from "wouter";
import "./PageDetails.css";
import getMovie from "../services/getMovie";
import getSimilar from "../services/getSimilar";
import Similar from "../components/Similar";
import Loader from "../components/Loader";
import ErrorVisual from "../components/ErrorVisual";
import { Helmet } from "react-helmet";

const PageDetails = ({ params }) => {
    const [movie, setMovie] = useState({ genres: [] });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [similar, setSimilar] = useState([]);
    const { id } = params;
    console.log(id);

    useEffect(() => {
        setLoading(true);
        getMovie({ id })
            .then((movieData) => {
                console.log(movieData);
                setMovie(movieData);
                setLoading(false);
                setErrorMessage(false);
            })
            .catch((err) => {
                console.error(err);
                setErrorMessage(true);
            });
        getSimilar({ id })
            .then((similarMovies) => {
                console.log(similarMovies);

                setSimilar(similarMovies);
                setErrorMessage(false);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setErrorMessage(true);
            });
    }, [id]);

    if (errorMessage) return <ErrorVisual />;
    if (loading) return <Loader />;
    return (
        <>
            <Helmet>
                <title>{`Freaks | ${movie.title}`}</title>
                <meta name="description" content={movie.title} />
            </Helmet>
            <section className="details-container">
                <div className="flex details-content">
                    <div className="details-img">
                        <img
                            src={movie.img}
                            alt={movie.title}
                            className="img"
                        />
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
                        <div className="details-text">
                            {/* <Link to={movie.imdb}>
                            <i class="fab fa-imdb"></i>
                        </Link> */}
                        </div>
                    </div>
                </div>
                <Similar
                    similar={similar.length > 5 ? similar.slice(0, 5) : similar}
                />
            </section>
        </>
    );
};

export default PageDetails;
