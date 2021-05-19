import React from "react";
import { Link } from "wouter";
import "./Card.css";
import Fav from "./Fav";

const Card = ({ name, details, image, id }) => {
    return (
        <div className="card" data-id={id}>
            <div className="card-btns">
                <Fav id={id} />
            </div>
            <Link to={`/movie/${id}`}>
                <img className="card-img" src={image} alt="" />
                <h4 className="card-name">
                    {name.length > 20 ? `${name.substr(0, 21)}...` : name}
                </h4>
                <p className="card-lang-year">{details}</p>
            </Link>
        </div>
    );
};
export default Card;

/*
CLIK PARA DETALLES: modal o página aparte?
- año
- géneros
- descripción
- vote average/vote count --puntaje/cantidad de votos
- no hay duración

- imagen: 
https://image.tmdb.org/t/p/w500/{imagen}
*/
