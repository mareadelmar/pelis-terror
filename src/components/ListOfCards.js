import React from "react";
import "./ListOfCards.css";
import Card from "./Card";

const ListOfCards = ({ listOfMovies }) => {
    return (
        <div className="flex cards-container">
            {listOfMovies.length > 0
                ? listOfMovies.map((item) => {
                      return <Card key={item.id} dataObject={item} />;
                  })
                : null}
        </div>
    );
};

export default ListOfCards;
