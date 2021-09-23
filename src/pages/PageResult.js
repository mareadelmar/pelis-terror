import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import "./PageMovies.css";
import SearchBar from "../components/SearchBar";
import ListOfCards from "../components/ListOfCards";
import getSearch from "../services/getSearch";
import Loader from "../components/Loader";
import ErrorVisual from "../components/ErrorVisual";
import TitlePage from "../components/TitlePage";
import { Helmet } from "react-helmet";
import { Container } from "@material-ui/core";


const PageResult = ({ params }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const { keyword, page } = params;
    const [, pushLocation] = useLocation();
    const title = `Freaks | Resultados para ${keyword}`;

    const handleNextPage = () => {
        pushLocation(`/search/${keyword}/${Number(page) + 1}`);
    };

    const handlePrevPage = () => {
        if (page <= 0) return;
        pushLocation(`/search/${keyword}/${Number(page) - 1}`);
    };

    useEffect(() => {
        setLoading(true);
        getSearch({ keyword })
            .then((res) => {
                setMovies(res);
                setLoading(false);
                setErrorMessage(false);
            })
            .catch((err) => {
                setErrorMessage(true);
            });
    }, [keyword]);

    if (errorMessage) return <ErrorVisual />;
    if (loading) return <Loader />;

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>
            <Container className="results-container">
                <SearchBar />
                <TitlePage title={`${movies.length} resultados`} />
                <ListOfCards listOfMovies={movies} />
                <div className="flex btn-container">
                    {page > 1 ? (
                        <button onClick={handlePrevPage} className="btn">
                            {" "}
                            &#60; anterior
                        </button>
                    ) : null}
                    {movies.length > 20 ? (
                        <button
                            onClick={handleNextPage}
                            className="btn-page btn"
                        >
                            próxima &#62;
                        </button>
                    ) : null}
                </div>
            </Container>
        </>
    );
};

export default PageResult;
