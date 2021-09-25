import React, { useEffect, useState } from "react";
import "./PageDetails.css";
import getMovie from "../../services/getMovie";
import getSimilar from "../../services/getSimilar";
import Similar from "../../components/Similar/Similar";
import Loader from "../../components/Loader/Loader";
import ErrorVisual from "../../components/ErrorVisual/ErrorVisual";
import { Helmet } from "react-helmet";
import { Container } from "@material-ui/core";
//import Fav from "../../components/Fav/Fav"
//import ListBtn from "../../components/ListBtn/ListBtn";
//import { Tooltip } from '@material-ui/core';

const PageDetails = ({ params }) => {
    const [movie, setMovie] = useState({ genres: [] });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [similar, setSimilar] = useState([]);
    const { id } = params;

    useEffect(() => {
        setLoading(true);
        getMovie({ id })
            .then((movieData) => {
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
            <Container className="details-container">
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
                        {/* <div className="flex details-icons">
                            <Tooltip title="Ir a IMBb">
                                <span to={movie.imdb}>
                                    <i class="fab fa-imdb"></i>
                                </span>
                            </Tooltip>
                            <Fav movie={movie} />
                            <ListBtn movie={movie} />
                        </div> */}
                    </div>
                </div>
                <Similar
                    similar={similar.length > 5 ? similar.slice(0, 5) : similar}
                />
            </Container>
        </>
    );
};

export default PageDetails;
