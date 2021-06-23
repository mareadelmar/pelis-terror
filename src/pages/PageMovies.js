import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import "./PageMovies.css";
import ListOfCards from "../components/ListOfCards";
import Loader from "../components/Loader";
import getMovies from "../services/getMovies";
import ErrorVisual from "../components/ErrorVisual";
import { Helmet } from "react-helmet";

const PageMovies = ({ params }) => {
    const title = "Freaks | Explorar";
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const { page } = params;
    const [, pushLocation] = useLocation();

    const handleNextPage = () => {
        pushLocation(`/movies/${Number(page) + 1}`);
    };

    const handlePrevPage = () => {
        if (page <= 0) return;
        pushLocation(`/movies/${Number(page) - 1}`);
    };

    useEffect(() => {
        setLoading(true);
        getMovies({ page })
            .then((moviesArray) => {
                console.log(moviesArray);
                setMovies(moviesArray);
                setLoading(false);
                setErrorMessage(false);
            })
            .catch((err) => {
                setErrorMessage(true);
                console.error(err);
            });
    }, [page]);

    if (errorMessage) return <ErrorVisual />;
    if (loading) return <Loader />;
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>
            <section className="results-container">
                <ListOfCards listOfMovies={movies} />
                <div className="flex btn-container">
                    {page > 1 ? (
                        <button onClick={handlePrevPage} className="btn">
                            &#60; anterior
                        </button>
                    ) : null}
                    <button onClick={handleNextPage} className="btn-page btn">
                        próxima &#62;
                    </button>
                </div>
            </section>
        </>
    );
};

export default PageMovies;
