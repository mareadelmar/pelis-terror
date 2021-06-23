import React from "react";
import "./Similar.css";
import Card from "./Card";

/*
capaz el map puede ser un component ListOfMovies y usarlo tmb en pagehome
*/
const Similar = ({ similar }) => {
    return (
        <section className="similar-container">
            <h2 className="similar-title">Similar movies</h2>
            <div className="flex similar-movies">
                {similar.map((item) => {
                    return <Card key={item.id} dataObject={item} />;
                })}
            </div>
        </section>
    );
};

export default Similar;
