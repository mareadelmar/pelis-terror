import React from "react";
import "./ListOfCards.css";
import Card from "./Card";

const ListOfCards = ({ listOfMovies }) => {
    return (
        <div className="flex cards-container">
            {listOfMovies.length > 0
                ? listOfMovies.map((item) => {
                      //   const dataObject = {
                      //       details: `${item.lang} – ${item.year}`,
                      //       id: item.id,
                      //       name: item.title,
                      //       img: item.img,
                      //   };

                      return <Card key={item.id} dataObject={item} />;
                  })
                : null}
        </div>
    );
};

/*
<Card
    key={item.id}
    id={item.id}
    name={item.title}
    image={item.img}
    details={movieDetails}
/>

*/

export default ListOfCards;
