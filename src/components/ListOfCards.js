import React from "react";
import "./ListOfCards.css";
import Card from "./Card";

const ListOfCards = ({ listOfMovies }) => {
    return (
        <div className="flex cards-container">
            {listOfMovies.length > 0
                ? listOfMovies.map((item) => {
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
                  })
                : null}
        </div>
    );
};

export default ListOfCards;
