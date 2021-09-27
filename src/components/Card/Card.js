import React from "react";
import { Link } from "wouter";
import "./Card.css";
import Fav from "../Fav/Fav";
import Watchlist from "../Watchlist/Watchlist";

const Card = ({ dataObject }) => {
    //console.log(dataObject);
    const { img, lang, year, title, id } = dataObject;
    return (
        <div className="card" data-id={id}>
            <div className="card-btns">
                <Fav movie={dataObject} />
                <Watchlist movie={dataObject}/>
            </div>
            <Link to={`/movie/${id}`}>
                <img className="card-img" src={img} alt="" />
                <h4 className="card-name">
                    {title.length > 20 ? `${title.substr(0, 21)}...` : title}
                </h4>
                <p className="card-lang-year">{`${lang} – ${year}`}</p>
            </Link>
        </div>
    );
};
export default Card;

/*
CLIK PARA DETALLES:
- año
- géneros
- descripción
- vote average/vote count --puntaje/cantidad de votos
- no hay duración

- imagen: 
https://image.tmdb.org/t/p/w500/{imagen}
*/
