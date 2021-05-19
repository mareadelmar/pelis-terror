import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import "./PageMovies.css";
import Card from "../components/Card";
import getMovies from "../services/getMovies";

const PageMovies = ({ params }) => {
    console.log(params, "holi");
    const [movies, setMovies] = useState([]);
    const { page } = params;
    const [, pushLocation] = useLocation();
    console.log(page);

    const handleNextPage = () => {
        console.log("click en próxima", page);
        pushLocation(`/movies/${Number(page) + 1}`);
    };

    const handlePrevPage = () => {
        console.log("click en anterior", page);
        if (page <= 0) return;
        pushLocation(`/movies/${Number(page) - 1}`);
    };

    useEffect(() => {
        getMovies({ page }).then((moviesArray) => {
            console.log(moviesArray);
            setMovies(moviesArray);
        });
    }, [page]);

    return (
        <section className="flex cards-container">
            {movies.map((item) => {
                const movieDetails = `${item.lang} – ${item.year}`;
                return (
                    <Card
                        key={item.id}
                        id={item.id}
                        name={item.title}
                        image={item.img}
                        details={movieDetails}
                    />
                );
            })}
            <div className="flex btn-container">
                {page > 1 ? (
                    <button onClick={handlePrevPage} className="btn">
                        {" "}
                        &#60; anterior
                    </button>
                ) : null}
                <button onClick={handleNextPage} className="btn-page btn">
                    próxima &#62;
                </button>
            </div>
        </section>
    );
};

export default PageMovies;
